import React, {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AppFeature} from "./types";
import MainFrame from "../mainFrame/MainFrame";
import {RequireAuth} from "./RequreAuth";

export interface DcbAppProps {
    logo: JSX.Element;
    features: AppFeature[];
    loggedIn?: boolean;
    loginComponent?: JSX.Element;
    passwordResetComponent?: JSX.Element;
}

export const DcbApp: FC<DcbAppProps> = ({
                                            features,
                                            logo,
                                            loggedIn,
                                            loginComponent,
                                            passwordResetComponent
                                        }) => {
    return (
        <BrowserRouter>
            {features.map((f) => (
                <React.Fragment key={`feature-dialogs-${f.label}`}>
                    {f.dialogs?.map((dialog, dialogIndex) => (
                        <React.Fragment key={`feature-dialog-${f.label}-${dialogIndex}`}>
                            {dialog}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
            <Routes>
                <Route path="/login" element={loginComponent}/>
                <Route path="/password-reset" element={passwordResetComponent}/>
                <Route path="/" element={
                    typeof loggedIn === "boolean"
                        ? (
                            <RequireAuth loggedIn={loggedIn}>
                                <MainFrame logo={logo} features={features}/>
                            </RequireAuth>
                        )
                        : <MainFrame logo={logo} features={features}/>

                }>
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
