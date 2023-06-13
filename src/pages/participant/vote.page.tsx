import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../../context/loading.context';
import TopBar from '../../layouts/topbar.layout';
import CandidateService from '../../services/candidate.service';
import VoteService from '../../services/vote.service';
import { CandidateType } from '../admin/candidates.page';

function CandidateCard(props: {
  id: string;
  name: string;
  detail: string;
  imagePath: string;
}) {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const sVote = new VoteService();

  const onDetailPressed = () => {
    navigate('/candidate-detail/' + props.id);
  };

  const onVotePressed = async () => {
    setIsLoading(true);
    try {
      const result = await sVote.addVote(props.id);
      navigate('/vote-success');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '333px',
        padding: '3em',
        borderRadius: 5,
      }}
      className="shadow-on-hover"
    >
      <img src={props.imagePath} style={{ maxWidth: '18em' }} alt="" />
      <Typography variant="h5" className="semibold" sx={{ mt: '1em' }}>
        {props.name}
      </Typography>
      <Typography
        variant="subtitle2"
        className="text-light-gray-color"
        sx={{ mt: '0.4em', mb: '1em' }}
      >
        {props.detail}
      </Typography>
      <Button
        onClick={onDetailPressed}
        variant="outlined"
        fullWidth
        sx={{ margin: '0.7em' }}
      >
        Detail
      </Button>
      <Button
        onClick={onVotePressed}
        variant="contained"
        fullWidth
        sx={{ margin: '0.7em' }}
      >
        Vote
      </Button>
    </Box>
  );
}

export default function VotePage() {
  const sCandidate = new CandidateService();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const navigate = useNavigate();

  const getCandidates = async () => {
    setIsLoading(true);
    try {
      const result = await sCandidate.getCandidates();
      setCandidates(result);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // await getTokenFromStorageOrLogout();
      getCandidates();
    };
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          height: '100vh',
        }}
      >
        <TopBar
          title="Select your ideal candidate."
          subtitle="Delve into the candidate's vision and mission with keen attention"
        />
        <Grid
          container
          component="main"
          justifyContent="space-evenly"
          sx={{
            pr: '5em',
            pl: '5em',
          }}
        >
          {candidates.map((row) => (
            <Grid item xs={12} sm={6} md={4} lg={3} component={Paper} square>
              <CandidateCard
                name={row.name}
                detail={row.label}
                imagePath={row.image}
                id={row.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
