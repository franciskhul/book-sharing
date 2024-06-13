import { forwardRef, ReactNode, Ref } from "react"
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

interface PageProps {
    title: string;
    children?: ReactNode;
    meta?: ReactNode;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
    ({ children, title = '', meta, ...other }, ref: Ref<HTMLDivElement>) => (
        <>
            <Helmet>
                <title>{`${title} | Ello`}</title>
                {meta}
            </Helmet>

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    )
);

export default Page;