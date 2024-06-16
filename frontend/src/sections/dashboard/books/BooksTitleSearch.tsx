import React from 'react';
// @mui
import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

// components
import Iconify from '../../../components/Iconify';

type CustomProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    titleQuery: string;
}

type ExpandableTextFieldProps = TextFieldProps & CustomProps


const StyledTextField = styled(TextField)(() => ({
    transition: `width 250ms ease-in-out`,
    width: '200px',
    '&:focus-within': {
        width: '300px',
    },
}));

const ExpandableTextField: React.FC<ExpandableTextFieldProps> = ({ handleChange, titleQuery, ...props }) => {
    return (
        <StyledTextField {...props}
            fullWidth
            value={titleQuery}
            onChange={handleChange}
            placeholder='Search by title.......'
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

export default ExpandableTextField;