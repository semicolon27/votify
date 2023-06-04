import CandidatePage from '../pages/admin/candidate.page';
import ClassPage from '../pages/admin/class.page';
import { Route } from './types';

const routes: Route[] = [
  {
    path: '/admin/candidate',
    component: <CandidatePage />,
  },
  {
    path: '/admin/class',
    component: <ClassPage />,
  },
];

export default routes;
