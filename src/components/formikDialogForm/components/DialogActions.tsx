import React, {FC} from "react";
import {Button} from "@mui/material";
import {DialogActions as MuiDialogActions} from "@mui/material";

export interface DialogActionsProps {
    disabled: boolean;
    confirm: {
        label?: string;
        onClick: () => void;
    },
    cancel: {
        label?: string;
        onClick: () => void;
    }
}

export const DialogActions: FC<DialogActionsProps> = (props) => (
    <MuiDialogActions>
        <Button
            disabled={props.disabled}
            sx={{color: "text.secondary"}}
            onClick={props.cancel.onClick}
        >
            {props.cancel.label ??  "Abbrechen"}
        </Button>
        <Button
            disabled={props.disabled}
            onClick={props.confirm.onClick}
            sx={{color: "success.light"}}
        >
            {props.confirm.label ?? "Erstellen"}
        </Button>
    </MuiDialogActions>
)
