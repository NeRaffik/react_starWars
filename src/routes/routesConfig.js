import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        Component: PeoplePage
    },
    {
        path: '/people/:id', //динамический параметр id
        exact: true,
        Component: PersonPage
    },
    {
        path: '/not-found',
        exact: true,
        Component: NotFoundPage
    },
    {
        path: '*',//нераспознанный путь
        exact: false,
        Component: NotFoundPage
    }
];

export default routesConfig;