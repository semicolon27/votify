import CandidateDetailPage from '../pages/participant/candidate_detail.page';
import VotePage from '../pages/participant/vote.page';
import VoteSuccessPage from '../pages/participant/vote_success.page';
import { Route } from './types';

const routes: Route[] = [
  {
    path: '/vote',
    component: <VotePage />,
  },
  {
    path: '/candidate-detail/:id',
    component: <CandidateDetailPage />,
  },
  {
    path: '/vote-success',
    component: <VoteSuccessPage />,
  },
];

export default routes;
