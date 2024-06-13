import { ReactNode } from 'react';

// @mui
import { List, Box, Stack } from '@mui/material';
// 
import NavList from './NavList';
import { ListSubheaderStyle } from './style';

interface Item {
    title: string;
    path: string;
    children?: ReactNode
}

interface Config {
    subheader: string
    items: Array<Item>
}

interface NavSectionHorizontalProps {
    isCollapse: boolean;
    navConfig: Array<Config>
}

export default function NavSectionHorizontal({ navConfig, isCollapse, ...other }: NavSectionHorizontalProps) {

    return (
        <Box {...other}>
            {navConfig.map((group) => (
                <List key={group.subheader} disablePadding sx={{ px: 2 }}>
                    <ListSubheaderStyle
                        sx={{
                            ...(isCollapse && {
                                opacity: 0,
                            }),
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            {group.subheader}
                            {/* {translate(group.subheader)} */}
                        </Stack>
                    </ListSubheaderStyle>

                    {group.items.map((list) => (
                        <NavList
                            key={list.title + list.path}
                            data={list}
                            depth={1}
                            hasChildren={!!list.children}
                            isCollapse={isCollapse}
                        />
                    ))}

                </List>
            ))}
        </Box>
    )
}