// Pages
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
import Project from '~/pages/Project';
// import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/contact', component: Contact },
    { path: '/project', component: Project },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
