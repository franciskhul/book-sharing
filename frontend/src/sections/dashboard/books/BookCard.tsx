import React from 'react';
// @mui
import { Card, Box, Typography, CardContent, CardMedia, CardActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// @queries
import { BookTypes } from '../../../queries';
// @component
import Iconify from '../../../components/Iconify';



interface BookCardProps extends BookTypes {
    assignBook: (id: string | number) => (void);
    unassignBook: (id: string | number) => (void);
}

const BookCard: React.FC<BookCardProps> = ({
    title, author, coverPhotoURL,
    assigned = false,
    id,
    assignBook,
    unassignBook
}) => {
    // Book - Title / Author Name /  

    return (

        <Card sx={{ display: 'flex', height: '300px' }}>

            {/* sx={{ flex: '1 0 auto' }} */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                <CardContent >
                    <Typography component="div" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {author}
                    </Typography>
                </CardContent>

                <CardActions>
                    <LoadingButton variant="contained"
                        startIcon={
                            <Iconify
                                icon={assigned ? 'bi:clipboard-x' : 'fluent:clipboard-checkmark-20-regular'}
                            />
                        }
                        onClick={() => {
                            if (assigned) {
                                unassignBook(id)
                            } else {
                                assignBook(id);
                            }
                        }}
                        color={assigned ? 'secondary' : 'primary'}
                    >
                        {assigned ? 'Unassign Book' : 'Assign Book'}
                    </LoadingButton>
                </CardActions>
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