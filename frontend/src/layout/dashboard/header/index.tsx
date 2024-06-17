// @mui
import { styled } from '@mui/material/styles';
import { AppBar, AppBarProps, Toolbar, Grid, Box, Stack, Avatar } from '@mui/material';
import cssStyles from '../../../utils/cssStyles';
import useResponsive from '../../../hooks/useResponsive';
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import IconButtonAnimate from '../../../components/animate/IconButtonAnimate';

const HEADER = {
    MOBILE_HEIGHT: 64,
    MAIN_DESKTOP_HEIGHT: 88,
    DASHBOARD_DESKTOP_HEIGHT: 92,
    DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
    BASE_WIDTH: 260,
    DASHBOARD_WIDTH: 280,
    DASHBOARD_COLLAPSE_WIDTH: 88,
    //
    DASHBOARD_ITEM_ROOT_HEIGHT: 48,
    DASHBOARD_ITEM_SUB_HEIGHT: 40,
    DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

interface DashboardHeaderProps {
    isCollapse: boolean;
    onOpenSidebar: VoidFunction
}

interface CustomAppBarProps extends AppBarProps {
    isCollapse?: boolean;
}

const RootStyle = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'isCollapse',
})<CustomAppBarProps>

    (({ isCollapse, theme }) => ({
        ...cssStyles().bgBlur(),
        boxShadow: 'none',
        height: HEADER.MOBILE_HEIGHT,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['width', 'height'], {
            duration: theme.transitions.duration.shorter,
        }),
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
            backgroundColor: "#FFFFFF",
            ...(isCollapse && {
                width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
            })
        },
    }));



export default function DashboardHeader({ onOpenSidebar, isCollapse }: DashboardHeaderProps) {

    const isDesktop = useResponsive('up', 'lg', 0, 0);

    return (
        <RootStyle isCollapse={isCollapse}>
            <Toolbar
                sx={{
                    minHeight: '100% !important',
                    marginTop: 2,
                    px: { lg: 5 },
                    backgroundColor: "#FFFFFF"
                }}
            >
                <Grid container spacing={0.5}>
                    <Grid item xs={12} display="flex" >
                        {isDesktop && <Logo sx={{ mr: 2.5 }} />}
                        {!isDesktop && (
                            <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
                                <Iconify icon="eva:menu-2-fill" />
                            </IconButtonAnimate>
                        )}

                        <Box sx={{ flexGrow: 1 }} />

                        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                            <IconButtonAnimate>
                                <Avatar sx={{ bgcolor: "#335C6E" }}>
                                    KN
                                </Avatar>
                            </IconButtonAnimate>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </RootStyle>
    )
}