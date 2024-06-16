import { useEffect, useState, useCallback } from 'react';

const useInfiniteScroll = () => {
    const [page, setPage] = useState(1);

    const scrollHandler = useCallback(() => {
        const documentHeight = document.body.scrollHeight;
        const currentScroll = window.scrollY + window.innerHeight;
        const modifier = 200;
        if (currentScroll + modifier > documentHeight) {
            setPage((prevState) => prevState + 1);
        }
    }, [setPage]);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    return page;
}

export default useInfiniteScroll;