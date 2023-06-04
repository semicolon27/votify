import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import CheckSuccess from '../../assets/icons/check-circle-success.svg';
import Logo from '../../assets/icons/votify-logo.svg';
import CButtonSecondary from '../../components/button_secondary';

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
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <img
          style={{ height: '7em', marginTop: '3em' }}
          src={CheckSuccess}
          alt=""
        />
        <Typography
          variant="h4"
          className="semibold"
          sx={{
            pt: '0.7em',
            pb: '0.2em',
          }}
        >
          Voting successfully
        </Typography>
        <Typography variant="h6" className="text-light-gray-color">
          Please wait for the voting results at the designated time
        </Typography>
        <CButtonSecondary
          onClick={onFinishVotePressed}
          sx={{ px: '2em', mt: '4em', mb: '10em' }}
        >
          Back To Sign In
        </CButtonSecondary>
        <img src={Logo} style={{ width: '4.5em', height: '4.5em' }} alt="" />
      </Box>
    </>
  );
}
