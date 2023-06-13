import AdminFormPage from '../pages/admin/admin_form.page';
import AdminsPage from '../pages/admin/admins.page';
import CandidateFormPage from '../pages/admin/candidate_form.page';
import CandidatesPage from '../pages/admin/candidates.page';
import ParticipantFormPage from '../pages/admin/participant_form.page';
import ParticipantsPage from '../pages/admin/participants.page';
import ScoresPage from '../pages/admin/scores.page';
import { Route } from './types';

const routes: Route[] = [
  {
    path: '/admin/candidates',
    component: <CandidatesPage />,
  },
  {
    path: '/admin/candidate/create',
    component: <CandidateFormPage isEdit={false} />,
  },
  {
    path: '/admin/candidate/edit/:id',
    component: <CandidateFormPage isEdit={true} />,
  },
  {
    path: '/admin/participants',
    component: <ParticipantsPage />,
  },
  {
    path: '/admin/participant/create',
    component: <ParticipantFormPage isEdit={false} />,
  },
  {
    path: '/admin/participant/edit/:id',
    component: <ParticipantFormPage isEdit={true} />,
  },
  {
    path: '/admin',
    component: <AdminsPage />,
  },
  {
    path: '/admin/create',
    component: <AdminFormPage isEdit={false} />,
  },
  {
    path: '/admin/edit/:id',
    component: <AdminFormPage isEdit={true} />,
  },
  {
    path: '/admin/score',
    component: <ScoresPage />,
  },
];

export default routes;
