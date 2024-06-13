
const ROOTS_DASHBOARD: string = '/';

function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const PATH_DASHBOARD = {
    books: path(ROOTS_DASHBOARD, '/books')
}


const navConfig = [
    {
        subheader: 'Teacher',
        items: [
            {
                title: 'Books',
                path: PATH_DASHBOARD.books,
                icon: <></>
            }
        ]
    }
]

export default navConfig;