import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

interface LogoProps {
    disabledLink?: boolean;
    sx?: object
}

export default function Logo({ disabledLink = false, sx }: LogoProps) {

    const logoPath = `/logoFull.svg`;
    const logo = <Box component="img" src={logoPath} sx={{ width: 120, height: 60, cursor: 'pointer', ...sx }} />
    return disabledLink ? logo : <RouterLink to="/">{logo}</RouterLink>;
}