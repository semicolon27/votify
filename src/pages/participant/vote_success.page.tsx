import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import kandidat2 from '../../assets/images/kandidat2-large.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../../layouts/topbar.layout';
import Paper from '@mui/material/Paper';
import CButtonSecondary from '../../components/button_secondary';
import { useNavigate } from 'react-router-dom';

export default function VoteSuccessPage() {
  const navigate = useNavigate();
  const onFinishVotePressed = () => {
    navigate('/login');
  };
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
        }}
      >
        <img style={{ height: '18em' }} src={kandidat2} alt="" />
        <Typography
          variant="h4"
          className="bold text-primary-color"
          sx={{
            pt: '0.7em',
            pb: '0.2em',
          }}
        >
          Rizki Arima
        </Typography>
        <Typography variant="h6" className="semibold text-light-gray-color">
          Computer Science - 2020
        </Typography>
        <CButtonSecondary onClick={onFinishVotePressed} sx={{ px: '2em' }}>
          Back To Sign In
        </CButtonSecondary>
      </Box>
    </>
  );
}
