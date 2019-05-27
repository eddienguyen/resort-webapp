import Home from 'pages/Home';
import Rooms from 'pages/Rooms';
import SingleRoom from 'pages/SingleRoom';
import Error from 'pages/Error';
var indexRoutes = [
    { path: '/', component: Home, exact: true, name: 'Home' },
    { path: '/rooms/', component: Rooms, exact: true, name: 'Rooms' },
    { path: '/rooms/:slug', component: SingleRoom, exact: true, name: 'SingleRoom' },
    { path: null, component: Error, exact: false, name: 'Error' },
];

export default indexRoutes;