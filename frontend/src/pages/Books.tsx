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

    const [currentFilterTab, setFilterTab] = useState(() => (
        searchParams.get('tab') || 0
    ));


    const [books, setBooks] = useState(data?.books || []);

    useEffect(() => {
        setBooks(data?.books || [])
    }, [data]);

    const filteredBooks = useMemo(() => (
        applySortFilter(books, currentFilterTab)
    ), [books, currentFilterTab])

    // partially load books
    const slicedBooks: BookTypes[] = useMemo(() => (
        filteredBooks.slice(0, page * 10)
    ), [page, filteredBooks]);


    const onFilterTab = (_: React.SyntheticEvent<Element, Event>, tab: string) => {
        setFilterTab(tab);
        searchParams.set('tab', tab);
    }

    const booksTotalNumber = useMemo(() => {
        const totalBooks: number = books.length;
        const filteredBooksNo: number = filteredBooks.length;
        let unassignedNo: number;
        let assignedNo: number;
        if (currentFilterTab.toString() !== '0') {
            unassignedNo = currentFilterTab.toString() === '1' ? filteredBooksNo : (totalBooks - filteredBooksNo);
            assignedNo = currentFilterTab.toString() === '2' ? filteredBooksNo : (totalBooks - filteredBooksNo);
        } else {
            assignedNo = books.filter((book) => (book.assigned)).length;
            unassignedNo = totalBooks - assignedNo;
        }
        return {
            0: unassignedNo,
            1: assignedNo,
            2: totalBooks
        }
    }, [filteredBooks, books, currentFilterTab])

    // values - 0 = unassigend, 1 = assigned, 2 = all
    const TABS: TabsInterface[] = [
        {
            value: 0,
            label: 'All',
            description: 'All the books',
            color: 'steelBlue',
            count: booksTotalNumber[2]
        },
        {
            value: 1,
            label: 'Unassigned',
            description: 'Books that have not been assigned to the students reading list',
            color: 'yellowDark',
            count: booksTotalNumber[0]
        },
        {
            value: 2,
            label: 'Assigned',
            description: 'Books that have been assigned to the students reading list',
            color: 'turquoiseDark',
            count: booksTotalNumber[1]
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
                    value={currentFilterTab}
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

// values - 1 = unassigend, 2 = assigned, 0 = all
function applySortFilter(books: BookTypes[], currentFilterTab: string | number): BookTypes[] {
    switch (currentFilterTab.toString()) {
        case '1':
            // unassigned = false or not defined
            return books.filter((book) => (!book.assigned))
        case '2':
            // assigned
            return books.filter((book) => (book.assigned))
        case '0':
            // all
            return books;
        default:
            return books;
    }
}