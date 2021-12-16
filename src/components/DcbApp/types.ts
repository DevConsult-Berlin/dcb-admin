export interface AppFeature {
    path: string;
    label: string;
    icon: JSX.Element;
    content?: JSX.Element;
    dialogs?: JSX.Element[];
}
