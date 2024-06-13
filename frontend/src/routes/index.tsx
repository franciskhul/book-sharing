import {
    useRoutes
} from 'react-router-dom'
import DashboardLayout from '../layout/dashboard'


export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />
        }
    ])
}