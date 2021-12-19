import React, {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppFeature} from "./types";
import MainFrame from "../mainFrame/MainFrame";

export interface DcbAppProps {
    logo: JSX.Element;
    features: AppFeature[];
}

export const DcbApp: FC<DcbAppProps> = ({features, logo}) => {
    return (
        <BrowserRouter>
            {features.map((f) =>
                <div key={`${f.path}-dialogs`}>
                    {f.dialogs}
                </div>
            )}
            <Routes>
                <Route path="/" element={<MainFrame logo={logo} features={features}/>}>
                    {features.map((f) =>
                        f.list
                            ? (
                                <Route key={f.path} path={f.path}>
                                    <Route index element={f.list}/>
                                    <Route path=":id/*" element={f.view}/>
                                </Route>
                            )
                            : (
                                <Route
                                    key={f.path}
                                    path={`${f.path}/*`}
                                    element={f.view}
                                />
                            )
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
