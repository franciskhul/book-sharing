import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from "react-router-dom";

import { LoadingButton } from '@mui/lab';
// @mui
import { Container, Box, Stack, Grid, Tabs, Tooltip, Tab } from '@mui/material';
// @components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import HeadBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonBookItem } from '../components/skeleton';
import Label from '../components/Label';
// @config
import { PATH_DASHBOARD } from '../layout/dashboard/navbar/NavConfig';
// @sections
import { BooksTitleSearch, BookCard } from '../sections/dashboard/books';
// @queries
import { GET_BOOKS, BookTypes } from '../queries';
// @hooks
import { useInfiniteScroll } from '../hooks';

interface TabsInterface {
    value: string | number;
    label: string;
    description: string;
    color: string;
    count: number
}

const Books: React.FC = () => {
    const { loading, /**error,**/ data } = useQuery<{ books: BookTypes[] }>(GET_BOOKS);
    const page = useInfiniteScroll();
    const [searchParams] = useSearchParams();

    const [filterTab, setFilterTab] = useState(() => (
        searchParams.get('tab') || 0
    ));


    const [books, setBooks] = useState(data?.books || []);

    useEffect(() => {
        setBooks(data?.books || [])
    }, [data]);

    // partially load books
    const slicedBooks: BookTypes[] = useMemo(() => (
        books.slice(0, page * 10)
    ), [page, books]);



    const onFilterTab = (_: React.SyntheticEvent<Element, Event>, tab: string) => {
        setFilterTab(tab);
        searchParams.set('tab', tab);
    }

    // values - 0 = unassigend, 1 = assigned, 2 = all
    const TABS: TabsInterface[] = [
        {
            value: 0,
            label: 'Unassigned',
            description: 'Books that have not been assigned to students',
            color: 'yellowDark',
            count: 40
        },
        {
            value: 1,
            label: 'Assigned',
            description: 'Books that have been assigned to students',
            color: 'turquoiseDark',
            count: 30
        },
        {
            value: 2,
            label: 'All',
            description: 'All the books',
            color: 'steelBlue',
            count: books.length
        }
    ]

    const assignBook = useCallback((id: string | number) => {
        setBooks(books.map((book) => {
            if (book.id.toString() === id.toString()) {
                return {
                    ...book,
                    assigned: true
                }
            }
            return book;
        }));
    }, [books]);

    const unassignBook = useCallback((id: string | number) => {
        setBooks(books.map((book) => {
            if (book.id.toString() === id.toString()) {
                return {
                    ...book,
                    assigned: false
                }
            }
            return book;
        }));
    }, [books]);

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
                                disabled
                            >
                                Assign Books
                            </LoadingButton>
                        </Box>
                    }
                />

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BooksTitleSearch />
                </Stack>

                <Tabs
                    allowScrollButtonsMobile
                    variant="scrollable"
                    scrollButtons="auto"
                    onChange={onFilterTab}
                    value={filterTab}
                    sx={{ px: 2, bgcolor: 'background.neutral' }}
                >
                    {
                        TABS.map((tabItem) => (
                            <Tooltip title={tabItem.description} key={tabItem.value} placement="top">
                                <Tab
                                    disableRipple
                                    key={tabItem.value}
                                    value={tabItem.value}
                                    icon={<Label color={tabItem.color} sx={{ marginRight: "5px" }}> {tabItem.count} </Label>}
                                    label={tabItem.label}
                                    iconPosition="start"
                                />
                            </Tooltip>
                        ))
                    }
                </Tabs>


                <Grid container spacing={8} sx={{ marginTop: "2em" }}>
                    {
                        (loading ? [...Array(10)] : slicedBooks).map((book, index) => (
                            book ? (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <BookCard {...book} assignBook={assignBook} unassignBook={unassignBook} />
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