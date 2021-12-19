import {Link as RouterLink, LinkProps as RouterLinkProps, useMatch, useResolvedPath} from "react-router-dom";
import React, {FC} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Typography} from "@mui/material";

interface ListLinkProps {
    linkProps: RouterLinkProps;
    icon: JSX.Element;
    label: string
}

export const ListLink: FC<ListLinkProps> = ({ label, icon, linkProps}) => {
    const resolved = useResolvedPath(linkProps.to);
    const match = useMatch(`${resolved.pathname}/*`);

    return (
        <ListItem selected={Boolean(match)} component={RouterLink} to={linkProps.to}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="inherit" color="textPrimary">{label}</Typography>}/>
        </ListItem>
    )
}
