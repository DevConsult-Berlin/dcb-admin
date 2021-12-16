import React, {FC} from "react";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";
import {Box} from "@mui/material";

interface AppBarProps {
    logo: JSX.Element;
}

export const AppBar: FC<AppBarProps> = ({logo}) => (
    <MuiAppBar
        position="fixed"
        sx={(theme) => ({
            zIndex: theme.zIndex.drawer + 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
        })}
    >
        <Toolbar>
            <Box mr="auto">
                {logo}
            </Box>
            <AccountMenu/>
        </Toolbar>
    </MuiAppBar>
)
