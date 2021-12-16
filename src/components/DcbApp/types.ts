export interface AppFeature {
    path: string;
    label: string;
    icon: JSX.Element;
    list?: JSX.Element;
    view?: JSX.Element;
    dialogs?: JSX.Element[];

}
