import React from 'react';
// @mui
import { Card, Box, Typography, CardContent, CardMedia } from '@mui/material';
import { BookTypes } from '../../../queries';

const BookCard: React.FC<BookTypes> = ({ title, author, coverPhotoURL, readingLevel }) => {
    // Book - Title / Author Name /  
    console.log("readingLevel", readingLevel);
    console.log("title", title);
    console.log("author", author);
    console.log("coverPhotoURL", coverPhotoURL);
    return (

        <Card sx={{ display: 'flex' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent
                    sx={{ flex: '1 0 auto' }}
                >
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {author}
                    </Typography>
                </CardContent>

            </Box>

            <CardMedia component="img"
                sx={{ width: 151 }}
                image={coverPhotoURL}
                alt={title}
            />

        </Card>

    )
}


export default BookCard;