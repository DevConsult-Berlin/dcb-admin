import {Navigate, useLocation} from "react-router-dom";
import React from "react";

export const RequireAuth = ({children, loggedIn}: {children: JSX.Element, loggedIn: boolean}) => {
    const location = useLocation();

    if (!loggedIn) {
        return <Navigate to="/login" state={{from: location}}/>
    }
    return children;
}
