import React, { ReactNode } from "react";
// @mui
import { Theme, styled } from '@mui/material/styles';

interface LabelProps {
    children: ReactNode;
    sx: object
}

interface SpanProps {
    theme?: Theme
}

const RootStyle = styled('span')<SpanProps>(({ theme }) => {
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
        padding: theme.spacing(0, 1),
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(12),
        color: '#212B36',
        backgroundColor: '##DFE3E8'
    }
});


const Label: React.FC<LabelProps> = ({ children, sx }) => {
    return (
        <RootStyle sx={{ ...sx }}>
            {children}
        </RootStyle>
    )
}

export default Label;