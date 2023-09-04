import config from '~/config';

import Home from '~/pages/Home';
import Branch from '~/pages/Branch';
import Menu from '~/pages/RestaurantMenu';
import Service from '~/pages/RestaurantService';
import Hall from '~/pages/Hall';
import Feedback from '~/pages/Feedback';
import Login from '~/pages/Login';
//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.branch, component: Branch },
    { path: config.routes.hall, component: Hall },
    { path: config.routes.menu, component: Menu },
    { path: config.routes.service, component: Service },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.login, component: Login },
    //{ path: config.routes.register, component:}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
