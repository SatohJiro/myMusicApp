// Pages
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
import Project from '~/pages/Project';
// import Upload from '~/pages/Upload';

import { ROUTE_NAME } from './routesConstant';

// Public routes
const publicRoutes = [
    { path: ROUTE_NAME.ROOT, component: Home },
    { path: ROUTE_NAME.PROFILE, component: Profile },
    { path: ROUTE_NAME.CONTACT, component: Contact },
    { path: ROUTE_NAME.PROJECT, component: Project },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
