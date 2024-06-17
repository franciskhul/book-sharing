import { Suspense, lazy, ComponentType } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import DashboardLayout from '../layout/dashboard';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = <P extends object>(Component: ComponentType<P>): React.FC<P> => (props: P) => {

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

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

const Books = Loadable(lazy(() => import('../pages/Books')));
