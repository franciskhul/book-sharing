import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

// function getDirection(value = 'bottom') {
//     return {
//         top: 'to top',
//         right: 'to right',
//         bottom: 'to bottom',
//         left: 'to left',
//     }[value];
// }

// ----------------------------------------------------------------------
interface bgBlurProps {
    color: string;
    blur: number;
    opacity: number,
}

// theme
export default function cssStyles(theme?: Theme) {
    return {
        bgBlur: (props?: bgBlurProps) => {
            const color = props?.color || theme?.palette.background.default || '#000000';
            const blur = props?.blur || 6;
            const opacity = props?.opacity || 0.8;

            return {
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
                backgroundColor: alpha(color, opacity),
            };
        }
    };
}
