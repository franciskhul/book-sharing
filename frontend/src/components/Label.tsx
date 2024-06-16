import React, { ReactNode } from "react";
// @mui
import { Theme, styled, alpha } from '@mui/material/styles';

interface LabelProps {
    children: ReactNode;
    color: string;
    sx?: object
}

interface SpanProps {
    theme?: Theme
    ownerState: { color: string; }
}

const RootStyle = styled('span')<SpanProps>(({ theme, ownerState }) => {
    const { color } = ownerState;


    const styleGhost = (color: string) => ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        color: theme.palette[color],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        backgroundColor: alpha(theme.palette[color], 0.16),
    });

    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 6,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightBold,
        ...styleGhost(color)
    }
});


const Label: React.FC<LabelProps> = ({ children, color, sx }) => {
    return (
        <RootStyle sx={{ ...sx }} ownerState={{ color }}>
            {children}
        </RootStyle>
    )
}

export default Label;