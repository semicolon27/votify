import AdminsFormPage from '../pages/admin/admin_form.page';
import AdminsPage from '../pages/admin/admins.page';
import CandidatesPage from '../pages/admin/candidates.page';
import ParticipantsPage from '../pages/admin/participants.page';
import { Route } from './types';

const routes: Route[] = [
  {
    path: '/admin/candidates',
    component: <CandidatesPage />,
  },
  {
    path: '/admin/candidates/create',
    component: <CandidatesPage />,
  },
  {
    path: '/admin/candidates/edit/:id',
    component: <CandidatesPage />,
  },
  {
    path: '/admin/participants',
    component: <ParticipantsPage />,
  },
  {
    path: '/admin/participants/create',
    component: <ParticipantsPage />,
  },
  {
    path: '/admin/participants/edit/:id',
    component: <ParticipantsPage />,
  },
  {
    path: '/admin',
    component: <AdminsPage />,
  },
  {
    path: '/admin/create',
    component: <AdminsFormPage />,
  },
  {
    path: '/admin/edit/:id',
    component: <AdminsFormPage />,
  },
];

export default routes;
