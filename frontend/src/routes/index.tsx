import { useRoutes, Navigate } from 'react-router-dom';
import DashboardLayout from '../layout/dashboard';
import Books from '../pages/Books';
// TODO: Add Loadable

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to={'/books'} />, index: true },
                { path: 'books', element: <Books /> }
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}
