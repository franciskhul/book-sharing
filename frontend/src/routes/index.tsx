import { useRoutes, Navigate } from 'react-router-dom'
import DashboardLayout from '../layout/dashboard'


export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <>
                            Unassinged Books page
                        </>
                    )
                },
                {
                    path: '/books/assigned',
                    element: (
                        <>
                            Assigned Books page
                        </>
                    )
                }
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}