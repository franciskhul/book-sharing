// @mui
import { Box, IconButton, IconButtonProps } from '@mui/material';
import { ReactNode, forwardRef, Ref } from 'react';
import { m } from 'framer-motion';

const varSmall = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
};

const varLarge = {
    hover: { scale: 1.08 },
    tap: { scale: 0.99 }
};

const varMedium = {
    hover: { scale: 1.09 },
    tap: { scale: 0.97 }
};

interface AnimateWrapProps {
    size: string,
    children: ReactNode
}

function AnimateWrap({ size, children }: AnimateWrapProps) {
    const isSmall = size === 'small';
    const isLarge = size === 'large';

    return (
        <Box
            component={m.div}
            whileTap="tap"
            whileHover="hover"
            variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
            sx={{
                display: 'inline-flex'
            }}
        >
            {children}
        </Box>
    );
}

type Size = 'small' | 'medium' | 'large'

interface IconButtonAnimateProps extends IconButtonProps {
    children?: ReactNode;
    size?: Size;
}

const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonAnimateProps>(
    ({ children, size = 'medium', ...other }: IconButtonAnimateProps, ref: Ref<HTMLButtonElement>) => (
        <AnimateWrap size={size}>
            <IconButton size={size} ref={ref} {...other}>
                {children}
            </IconButton>
        </AnimateWrap>
    )
);

export default IconButtonAnimate;





