import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Stack } from '@mui/material';
import SvgIconStyle from './SvgIconStyle';

interface LogoProps {
    disabledLink?: boolean;
    sx?: object;
    isFull?: boolean;
}
export default function Logo({ disabledLink = false, sx, isFull = true }: LogoProps) {
    const logo = (
        <Stack direction="row" spacing={1}>
            {
                isFull ? (
                    <SvgIconStyle
                        src={"/logoFull.svg"}
                        sx={{ width: 120, height: 60, cursor: 'pointer', ...sx }}
                    />
                ) : (
                    <Box
                        component="img"
                        src={'/ello.png'}
                        sx={{ width: 30, height: 30, cursor: 'pointer', ...sx }}
                    />
                )
            }
        </Stack>
    )

    if (disabledLink) {
        return logo;
    }

    return <RouterLink to={"/"}>{logo}</RouterLink>;
}