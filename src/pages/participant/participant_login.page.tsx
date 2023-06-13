import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import CButton from '../../components/button.component';
import CTextField from '../../components/text_field.component';
import Logo from '../../assets/icons/votify-logo.svg';
import DashboardImage from '../../assets/images/dashboard.png';
import CheckGray from '../../assets/icons/check-circle-gray.svg';
import CheckPrimary from '../../assets/icons/check-circle-primary.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { LoadingContext } from '../../context/loading.context';
import AuthService from '../../services/auth.service';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function ParticipantLoginPage() {
  const navigate = useNavigate();
  const { getTokenFromStorage, setTokenStorage } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const sAuth = new AuthService();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const token = await sAuth.loginParticipant(
        data.get('regnumber')?.toString() ?? '',
        data.get('password')?.toString() ?? ''
      );
      await setTokenStorage(token);
      await getTokenFromStorage();
      navigate('/vote');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        alignItems="center"
        component={Paper}
        square
      >
        <Box
          sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              width: '90%',
              maxWidth: '400px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <img
                src={Logo}
                style={{ width: '3em', height: '3em', marginBottom: '1em' }}
                alt=""
              />
              <Typography
                component="h1"
                variant="h4"
                style={{
                  width: '100%',
                }}
              >
                Sign In
              </Typography>
            </Box>

            <CTextField
              required
              fullWidth
              id="regnumber"
              label="RegNumber"
              name="regnumber"
              autoComplete="regnumber"
              autoFocus
              sx={{ mb: 3 }}
            />
            <CTextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CButton
              type="submit"
              fullWidth
              variant="contained"
              loading={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </CButton>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        md={5}
        sx={{
          backgroundColor: '#F1F6F9',
        }}
      >
        <Box
          sx={{
            py: 8,
            px: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="subtitle1"
            className="text-gray-color semibold"
            sx={{}}
          >
            Empower your voting events with precision planning, seamless data
            configuration, and anticipation for the moment of truth: unveiling
            the voting results.
          </Typography>
          <Typography
            sx={{ mb: 1 }}
            className="text-light-gray-color"
            variant="body1"
          >
            www.votify.co.id
          </Typography>
          <div className="">
            <img
              style={{
                height: '30em',
              }}
              src={DashboardImage}
              alt=""
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
