// components
import { ReactNode } from "react";
import SvgIconStyle from "../../../components/SvgIconStyle";

const ROOTS_DASHBOARD: string = '';

const getIcon = (name: string): ReactNode => (
    <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
)

function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

export const PATH_DASHBOARD = {
    books: path(ROOTS_DASHBOARD, '/'),
    uassignedBooks: path(ROOTS_DASHBOARD, '/books/assigned')
}


const navConfig = [
    {
        subheader: 'Teacher',
        items: [
            {
                title: 'Books',
                path: PATH_DASHBOARD.books,
                icon: getIcon('books')
            }
        ]
    }
]

export default navConfig;