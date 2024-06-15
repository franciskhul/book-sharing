import React, { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, Popper, InputAdornment, PopperProps } from '@mui/material';
// components
import SearchNotFound from '../../../components/SearchNotFound';
import Iconify from '../../../components/Iconify';
import InputStyle from '../../../components/InputStyle';
import { BookTypes } from '../../../queries'


const PopperStyle = styled((props: PopperProps) => (<Popper placement="bottom-start" {...props} />))({
    width: '280px !important',
});

const BooksTitleSearch: React.FC = () => {

    const [searchResults, setSearchResults] = useState<BookTypes[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeSearch = (value: string) => {
        setSearchQuery(value);
        setSearchResults([]);
        console.log(value);
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(event);
    }

    return (
        <Autocomplete<BookTypes>
            size="small"
            autoHighlight
            popupIcon={null}
            PopperComponent={PopperStyle}
            options={searchResults}
            onInputChange={(event, value) => handleChangeSearch(value)}
            noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
            // TODO: Will shift to using ids
            isOptionEqualToValue={(option, value) => option.title == value.title}
            renderInput={(params) => (
                <InputStyle
                    {...params}
                    stretchStart={200}
                    placeholder="Search book..."
                    onKeyUp={handleKeyUp}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            renderOption={(props, post, { inputValue }) => {
                console.log("props", props)
                console.log("post", post);
                console.log(inputValue);
                return (
                    <a>Link</a>
                )
            }}
        />
    )
}

export default BooksTitleSearch;