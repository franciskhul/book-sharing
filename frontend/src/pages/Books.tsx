import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS, BookTypes } from '../queries';
import { LoadingButton } from '@mui/lab';
// @mui
import { Container, Box } from '@mui/material';
// @components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import HeadBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../layout/dashboard/navbar/NavConfig';

const Books: React.FC = () => {
    const { loading, error, data } = useQuery<{ books: BookTypes[] }>(GET_BOOKS);

    console.log("******loading***********", loading);
    console.log("******error*************", error);
    console.log("******data***************", data);

    return (
        <Page title="Books">
            <Container maxWidth={'lg'}>
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
            </Container>

        </Page>
    )
}

export default Books;