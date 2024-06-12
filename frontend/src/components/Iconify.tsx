// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

interface IconifyProps {
    icon: string,
    sx?: object
}

export default function Iconify({ icon, sx = {}, ...other }: IconifyProps) {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}