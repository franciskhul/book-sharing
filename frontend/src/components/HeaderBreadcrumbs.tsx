import React from 'react';
// @mui
import { Box, Typography, Link, BoxProps } from '@mui/material';
// @component
import Breadcrumbs, { LinkType } from './Breadcrumbs';

interface HeadBreadcrumbs extends BoxProps {
    links: Array<LinkType>;
    heading: string;
    moreLink?: string | Array<string>;
    sx?: object
}

const HeadBreadcrumbs: React.FC<HeadBreadcrumbs> = ({ links, heading, moreLink = "" || [], sx, ...other }) => {
    return (
        <Box sx={{ mb: 5, ...sx }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        {heading}
                    </Typography>
                    <Breadcrumbs links={links} {...other} />
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                {typeof moreLink === 'string' ? (
                    <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
                        {moreLink}
                    </Link>
                ) : (
                    moreLink.map((href) => (
                        <Link
                            noWrap
                            key={href}
                            href={href}
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            sx={{ display: 'table' }}
                        >
                            {href}
                        </Link>
                    ))
                )}
            </Box>
        </Box>
    )
}

export default HeadBreadcrumbs;