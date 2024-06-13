// @mui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { useState } from 'react';

import useCollapseDrawer from '../../hooks/useCollapseDrawer';

import DashboardHeader from './header';

import NavbarVertical from './navbar/Navbar';

const HEADER = {
    MOBILE_HEIGHT: 64,
    MAIN_DESKTOP_HEIGHT: 88,
    DASHBOARD_DESKTOP_HEIGHT: 92,
    DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

const NAVBAR = {
    BASE_WIDTH: 260,
    DASHBOARD_WIDTH: 280,
    DASHBOARD_COLLAPSE_WIDTH: 88,
    //
    DASHBOARD_ITEM_ROOT_HEIGHT: 48,
    DASHBOARD_ITEM_SUB_HEIGHT: 40,
    DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

interface MainStyleProps {
    collapseClick?: boolean;
    theme?: Theme;
}
const MainStyle = styled('main', {
    shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
    flexGrow: 1,
    paddingTop: HEADER.MOBILE_HEIGHT + 24,
    paddingBottom: HEADER.MOBILE_HEIGHT + 24,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
        transition: theme.transitions.create('margin-left', {
            duration: theme.transitions.duration.shorter,
        }),
        ...(collapseClick && {
            marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
        }),
    },
}));

export default function DashboardLayout() {

    const { collapseClick, isCollapse } = useCollapseDrawer();

    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                display: { lg: 'flex' },
                minHeight: { lg: 1 },
            }}
        >
            <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />

            <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

            <MainStyle collapseClick={collapseClick}>
                <Outlet />
            </MainStyle>
        </Box>
    )
}