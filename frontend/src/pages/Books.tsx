import React from 'react';
import { useQuery } from '@apollo/client';

import { LoadingButton } from '@mui/lab';
// @mui
import { Container, Box, Stack, Grid } from '@mui/material';
// @components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import HeadBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonBookItem } from '../components/skeleton';
// @config
import { PATH_DASHBOARD } from '../layout/dashboard/navbar/NavConfig';
// @sections
import { BooksTitleSearch, BookCard } from '../sections/dashboard/books';
// @queries
import { GET_BOOKS, BookTypes } from '../queries';
// @hooks
import { useInfiniteScroll } from '../hooks';

const Books: React.FC = () => {
    const { loading, error, data } = useQuery<{ books: BookTypes[] }>(GET_BOOKS);
    const page = useInfiniteScroll();

    // console.log("******loading***********", loading);
    console.log("******error*************", error);
    // console.log("******data***************", data);

    // partially load books
    const books: BookTypes[] = (data?.books || []).slice(0, page * 10);

    console.log("****the sliced books*********", books);

    return (
        <Page title="Books">
            <Container maxWidth={false}>
                <HeadBreadcrumbs
                    heading='Books'
                    links={[{ name: 'Books', href: PATH_DASHBOARD.books }]}
                    action={
                        <Box>
                            <LoadingButton variant="contained"
                                startIcon={<Iconify icon={'mdi:truck-fast-outline'} />}
                                onClick={() => {
                                    console.log("******assign books*****");
                                }}
                            >
                                Assign Books
                            </LoadingButton>
                        </Box>
                    }
                />

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BooksTitleSearch />
                </Stack>

                <Grid container spacing={8}>
                    {
                        (loading ? [...Array(10)] : books).map((book, index) => (
                            book ? (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <BookCard {...book} />
                                </Grid>
                            ) : (
                                <SkeletonBookItem key={index} />
                            )
                        ))
                    }
                </Grid>

            </Container>

        </Page>
    )
}

export default Books;