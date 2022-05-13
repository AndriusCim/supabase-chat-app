import PublicRoute from 'components/PublicRoute';
import * as route from 'config/routes';
import Login from 'features/Login';
import Chat from 'features/Chat';
import Register from 'features/Register';
import PrivateRoute from 'components/PrivateRoute';
import PasswordReset from 'features/PasswordReset';

export const privateRoutes = [
  {
    path: route.MAIN,
    component: Chat,
  },
  {
    path: route.INDEX,
    component: PublicRoute,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: route.LOGIN,
    component: Login,
  },
  {
    path: route.REGISTER,
    component: Register,
  },
  {
    path: route.PASSWORD_RESET,
    component: PasswordReset,
  },
  {
    path: route.INDEX,
    component: PrivateRoute,
    exact: true,
  },
];
