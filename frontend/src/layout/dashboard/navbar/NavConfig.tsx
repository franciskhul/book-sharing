// components
import { ReactNode } from "react";
import SvgIconStyle from "../../../components/SvgIconStyle";

const ROOTS_DASHBOARD: string = '/';

const getIcon = (name: string): ReactNode => (
    <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
)

function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const PATH_DASHBOARD = {
    books: path(ROOTS_DASHBOARD, '/'),
    uassignedBooks: path(ROOTS_DASHBOARD, '/books/assigned')
}


const navConfig = [
    {
        subheader: 'Teacher',
        items: [
            {
                title: 'Unassigned Books',
                path: PATH_DASHBOARD.books,
                icon: getIcon('ic_unassigned_books')
            },
            {
                title: 'Assigned Books',
                path: PATH_DASHBOARD.uassignedBooks,
                icon: getIcon('ic_assigned_books')
            }
        ]
    }
]

export default navConfig;