import React, {FC} from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {drawerWidth} from "./utils";
import {ListLink} from "./ListLink";
import {AppFeature} from "../DcbApp/types";

export interface AppDrawerProps {
    features: AppFeature[];
}

export const AppDrawer: FC<AppDrawerProps> = (props) => (
    <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
        }}
    >
        <Toolbar/>
        <Box sx={{overflow: 'auto', mt: 3}}>
            <List>
                {props.features.map((listLink) => (
                    <ListLink
                        key={`/${listLink.path}`}
                        linkProps={{to: `/${listLink.path}`}}
                        icon={listLink.icon}
                        label={listLink.label}
                    />
                ))}
            </List>
        </Box>
    </Drawer>
);
