// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import cssStyles from '../../../utils/cssStyles';
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// components
import Scrollbar from '../../../components/Scrollbar';
import Logo from '../../../components/LogoDashboard'
import CollapseButton from './CollapseButton';
import { NAVBAR } from '../../../config';

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.shorter,
        }),
    },
}));

interface NavbarProps {
    isOpenSidebar: boolean;
    onCloseSidebar: () => void;
}

export default function Navbar({ isOpenSidebar, onCloseSidebar }: NavbarProps) {

    const isDesktop = useResponsive('up', 'lg', 0, 0);

    const theme = useTheme();

    const { isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave } =
        useCollapseDrawer();

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    pt: 3,
                    pb: 2,
                    px: 2.5,
                    flexShrink: 0,
                    ...(isCollapse && { alignItems: 'center' }),
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Logo isFull={!isCollapse} />
                    {isDesktop && !isCollapse && (
                        <CollapseButton onToggleCollapse={onToggleCollapse} collapseClick={collapseClick} />
                    )}
                </Stack>
            </Stack>
        </Scrollbar>
    )

    return (
        <RootStyle
            sx={{
                width: {
                    lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
                },
                ...(collapseClick && {
                    position: 'absolute',
                }),
            }}
        >
            {!isDesktop && (
                <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}>
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    onMouseEnter={onHoverEnter}
                    onMouseLeave={onHoverLeave}
                    PaperProps={{
                        sx: {
                            width: NAVBAR.DASHBOARD_WIDTH,
                            borderRightStyle: 'dashed',
                            bgcolor: 'background.default',
                            transition: (theme) =>
                                theme.transitions.create('width', {
                                    duration: theme.transitions.duration.standard,
                                }),
                            ...(isCollapse && {
                                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
                            }),
                            ...(collapseHover && {
                                ...cssStyles(theme).bgBlur(),
                                boxShadow: () => 'white' // TODO: Fix the issue of the boxShadow
                                // boxShadow: (theme) => theme.customShadows.z24,
                            }),
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

        </RootStyle>
    )
}