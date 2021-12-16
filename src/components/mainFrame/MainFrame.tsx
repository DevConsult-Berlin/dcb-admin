import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {AppDrawer, AppDrawerProps} from "./AppDrawer";
import {Outlet} from "react-router-dom";
import {AppBar} from "./AppBar";

interface MainFrameProps extends AppDrawerProps {
    logo: JSX.Element;

}

export default function MainFrame(props: MainFrameProps) {
    return (
        <Box sx={{display: 'flex', minHeight: "100vh"}}>
            <AppBar logo={props.logo}/>
            <AppDrawer {...props}/>
            <Box component="main" sx={{flexGrow: 1, p: 3, background: (theme) => theme.palette.grey["50"]}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}
