import React, { ChangeEvent } from 'react';

// @mui
import { InputAdornment, TextField } from '@mui/material';
// components
import Iconify from '../../../components/Iconify';

interface BooksTitleSearchProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => (void);
    titleQuery: string;
}

const BooksTitleSearch: React.FC<BooksTitleSearchProps> = ({ handleChange, titleQuery }) => {

    return (
        <TextField
            fullWidth
            sx={{ maxWidth: { md: 400 } }}
            value={titleQuery}
            onChange={handleChange}
            placeholder='Search by title............................'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default BooksTitleSearch;