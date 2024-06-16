import React from 'react';
// @mui
import { Card, Box, Typography, CardContent, CardMedia } from '@mui/material';
import { BookTypes } from '../../../queries';

const BookCard: React.FC<BookTypes> = ({ title, author, coverPhotoURL, readingLevel }) => {
    // Book - Title / Author Name /  
    console.log("readingLevel", readingLevel);
    return (

        <Card sx={{ display: 'flex', height: '300px' }}>

            {/* sx={{ flex: '1 0 auto' }} */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent >
                    <Typography component="div" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {author}
                    </Typography>
                </CardContent>
            </Box>

            {/* sx={{ flex: '1 0 auto' }} */}
            <CardMedia component="img"
                // sx={{ width: "100%", height: '100%', objectFit: 'cover' }}
                image={coverPhotoURL}
                alt={title}
            />

        </Card>

    )
}


export default BookCard;