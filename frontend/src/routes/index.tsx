import {
    useRoutes
} from 'react-router-dom'


export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <div>Hellow world!</div>
        }
    ])
}