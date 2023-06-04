import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import kandidat1 from '../../assets/images/kandidat1.png';
import kandidat2 from '../../assets/images/kandidat2.png';
import kandidat3 from '../../assets/images/kandidat3.png';
import TopBar from '../../layouts/topbar.layout';
import { useNavigate } from 'react-router-dom';

function CandidateCard(props: {
  name: string;
  detail: string;
  imagePath: string;
}) {
  const navigate = useNavigate();

  const onDetailPressed = () => {
    navigate('/candidate-detail');
  };

  const onVotePressed = () => {
    navigate('/vote-success');
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
      <img src={props.imagePath} alt="" />
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            width: '100%',
            pr: '5em',
            pl: '5em',
          }}
        >
          <CandidateCard
            name="M Alfi Gufron"
            detail="Computer Science - 2022"
            imagePath={kandidat1}
          />
          <CandidateCard
            name="Rizki Arima"
            detail="Computer Science - 2020"
            imagePath={kandidat2}
          />
          <CandidateCard
            name="M Dio Damiyati"
            detail="Computer Science - 2021"
            imagePath={kandidat3}
          />
        </Box>
      </Box>
    </>
  );
}
