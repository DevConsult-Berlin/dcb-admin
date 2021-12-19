import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link, Route, Routes, useResolvedPath} from 'react-router-dom';
import {useRouteMatch} from "./routerTabs.hook";

export interface RouterTabProps {
    index?: boolean;
    path: string;
    label: string;
    content: JSX.Element;
}

export interface RouterTabsProps {
    tabs: RouterTabProps[]
}

export function RouterTabs(props: RouterTabsProps) {

    const {pathname: basePathName} = useResolvedPath("");

    const routeMatch = useRouteMatch(props.tabs.map((t) => `${basePathName}/${t.path}`));

    const currentTab = routeMatch?.pattern?.path ?? `${basePathName}/${props.tabs[0].path}`;

    return (
        <React.Fragment>
            <Tabs value={currentTab}>
                {props.tabs.map((t) => (
                    <Tab
                        key={"tab-" + t.path}
                        label={t.label}
                        value={`${basePathName}/${t.path}`}
                        to={t.path}
                        component={Link}
                    />
                ))}
            </Tabs>
            <Box>
                <Routes>
                    {props.tabs.map((t) => (
                        t.index
                            ? (
                                <React.Fragment key={"route-fragment-" + t.path}>
                                    <Route key={"route-index"} index element={t.content}/>
                                    <Route key={"route-" + t.path} path={t.path} element={t.content}/>
                                </React.Fragment>
                            )
                            : <Route key={"route-" + t.path} path={t.path} element={t.content}/>
                    ))}
                </Routes>
            </Box>
        </React.Fragment>
    );
}
