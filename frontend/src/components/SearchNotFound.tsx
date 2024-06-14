import React from 'react';
import { Paper, Typography } from '@mui/material';

interface SearchNotFoundProps {
    searchQuery: string,
    initialText?: string
}

const SearchNotFound: React.FC<SearchNotFoundProps> = ({ searchQuery = '', initialText = "Please enter keywords", ...other }) => {
    return searchQuery ? (
        <Paper {...other}>
            <Typography gutterBottom align="center" variant="subtitle1">
                Not found
            </Typography>
            <Typography variant="body2" align="center">
                No results found for &nbsp;
                <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
            </Typography>
        </Paper>
    ) : (
        <Typography variant="body2">
            {initialText}
        </Typography>
    );
}

export default SearchNotFound;