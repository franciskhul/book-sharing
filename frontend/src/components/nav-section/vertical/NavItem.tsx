import { ReactNode } from 'react';
import { ComponentProps } from 'react';
// @mui
import { Box, Tooltip, ListItemButton } from '@mui/material';
import { ListItemStyle, ListItemIconStyle, ListItemTextStyle } from './style';
// component
import Iconify from '../../Iconify';

interface Item {
    title: string;
    path: string;
    children?: ReactNode;
    disabled?: boolean;
    caption?: string;
    info?: string;
    icon?: ReactNode;
}

type ListItemButtonProps = ComponentProps<typeof ListItemButton>;

interface NavItemProp extends ListItemButtonProps {
    isCollapse: boolean;
    depth: number;
    active: boolean;
    open: boolean;
    item: Item
}

export default function NavItem({ item, depth, active, open, isCollapse, ...other }: NavItemProp) {
    const { title, icon, info, children, disabled, caption } = item;

    return (
        <ListItemStyle depth={depth} active={active} disabled={disabled} {...other}>
            {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}

            {depth !== 1 && <DotIcon active={active && depth !== 1} />}

            <ListItemTextStyle
                isCollapse={isCollapse}
                // translate(title)
                primary={title}
                secondary={
                    caption && (
                        // title={translate(caption)}
                        <Tooltip title={caption} placement="top-start">
                            {/* translate(caption)  */}
                            <span>{caption}</span>
                        </Tooltip>
                    )
                }
                primaryTypographyProps={{
                    noWrap: true,
                    variant: active ? 'subtitle2' : 'body2',
                }}
                secondaryTypographyProps={{
                    noWrap: true,
                    variant: 'caption',
                }}
            />

            {!isCollapse && (
                <>
                    {info && (
                        <Box component="span" sx={{ lineHeight: 0 }}>
                            {info}
                        </Box>
                    )}

                    {!!children && (
                        <Iconify
                            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
                            sx={{ width: 16, height: 16, ml: 1, flexShrink: 0 }}
                        />
                    )}
                </>
            )}
        </ListItemStyle>
    )
}

interface DotIconProp {
    active: boolean;
}
export function DotIcon({ active }: DotIconProp) {
    return (
        <ListItemIconStyle>
            <Box
                component="span"
                sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    bgcolor: 'text.disabled',
                    transition: (theme) =>
                        theme.transitions.create('transform', {
                            duration: theme.transitions.duration.shorter,
                        }),
                    ...(active && {
                        transform: 'scale(2)',
                        bgcolor: 'primary.main',
                    }),
                }}
            />
        </ListItemIconStyle>
    )
}