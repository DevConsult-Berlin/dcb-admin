import React from "react";
import {Form, Formik, FormikProps} from "formik";
import {useDialogState} from "../dialog.hookts";
import {Dialog, DialogContent, DialogTitle, LinearProgress} from "@mui/material";
import {DialogActions} from "./DialogActions";
import {DialogMode} from "../types";

export interface FormikDialogFormProps<T, C, U> {
    dialogId: string;
    title: React.ReactNode | ((mode: DialogMode) => JSX.Element);
    onSubmit: (input: C | U, mode: DialogMode) => Promise<T>;
    creationInitialValues: C;
    validationSchema: any;
    loading: boolean;
    form: JSX.Element;
    formikProps?: FormikProps<C | U>;
}

export function FormikDialogForm<T, C, U>(props: FormikDialogFormProps<T, C, U>) {

    const {open, closeDialog, initialValues, mode} = useDialogState<U>(props.dialogId);

    const handleSubmit = (dto: C | U) =>
        props.onSubmit(dto, mode)
            .then((mitarbeiter) => {
                if (mitarbeiter) {
                    closeDialog();
                }
            });

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                {typeof props.title === "function"
                    ? props.title(mode)
                    : props.title
                }
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={initialValues ?? props.creationInitialValues}
                    validationSchema={props.validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({submitForm}) => (
                        <Form>
                            {props.form}
                            <DialogActions
                                disabled={props.loading}
                                confirm={{
                                    label: mode === "create" ? "Erstellen" : "Speichern",
                                    onClick: submitForm
                                }}
                                cancel={{onClick: closeDialog}}
                            />
                            {props.loading && <LinearProgress/>}
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}
