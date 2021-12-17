import {useLocation, useSearchParams} from "react-router-dom";
import {DialogMode} from "./types";

/**
 * Returns a function to navigate to the desired dialog
 * @param dialogId
 * @param mode
 * @param initialValues values to be set to history's state for usage in a DialogForm as initial values if mode is edit
 * @return function to navigate to the dialog
 */
export function useNavigateDialog<T>(dialogId: string, mode: DialogMode, initialValues?: T) {
    const [,setParams] = useSearchParams();

    return () => setParams(
        {[dialogId]: mode},
        {state: initialValues, replace: true}
    );
}

/**
 * Gets DialogState from params and
 * initial values for i.e. editing from location state
 * @param dialogId key for the url param
 * @return {
 *     open: dialog open or not,
 *     mode: create or edit
 *     closeDialog: function to close dialog,
 *     initialValues: initial values for forms
 * }
 */
export function useDialogState<T>(dialogId: string) {
    const [params, setParams] = useSearchParams();
    const location = useLocation();

    const dialogParam = params.get(dialogId);

    const closeDialog = () => {
        const newParams = {...params}
        params.delete(dialogId);
        setParams(newParams, {replace: true});
    }

    return ({
        open: typeof dialogParam === "string",
        mode: (dialogParam ?? "create") as DialogMode,
        closeDialog,
        initialValues: location.state as T | undefined
    })
}

