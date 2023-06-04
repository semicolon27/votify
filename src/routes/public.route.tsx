import AdminLoginPage from '../pages/admin/admin_login.page';
import ParticipantLoginPage from '../pages/participant/participant_login.page';
import { Route } from './types';

const routes: Route[] = [
  {
    path: '/admin/login',
    component: <AdminLoginPage />,
  },
  {
    path: '/login',
    component: <ParticipantLoginPage />,
  },
];

export default routes;
