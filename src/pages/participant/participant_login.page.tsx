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
import CheckGray from '../../assets/icons/check-circle-gray.svg';
import CheckPrimary from '../../assets/icons/check-circle-primary.svg';
import { useNavigate } from 'react-router-dom';

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

function Step(props: { title: string; subtitle: string; active: boolean }) {
  let check;
  let classNameTitle = '';
  let classNameSubtitle = '';
  if (props.active) {
    check = <img src={CheckPrimary} alt="" style={{ height: '1.7em' }} />;
  } else {
    check = <img src={CheckGray} alt="" style={{ height: '1.7em' }} />;
    classNameTitle = 'disabled-color';
    classNameSubtitle = 'text-light-gray-color';
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        {check}
        <Box sx={{ ml: '0.8em' }}>
          <Typography
            variant="subtitle1"
            className={'semibold ' + classNameTitle}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            className={'text-dense medium text-gray-color ' + classNameSubtitle}
            sx={{ mb: 3 }}
          >
            {props.subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default function ParticipantLoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    navigate('/vote');
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} component={Paper} square>
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
              <Typography component="h1" variant="h4">
                Sign In
              </Typography>
              <Typography
                className="semibold text-gray-color"
                variant="subtitle2"
                sx={{ mb: '2em', mt: '0.5em' }}
              >
                It's Time to Vote and Select the Candidate that Aligns with Your
                Vision
              </Typography>
            </Box>

            <CTextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            px: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Express your choice
          </Typography>
          <Step
            title="Sign In Your Account"
            subtitle=" Sign in with the email and password that was provided"
            active={true}
          />
          <Step
            title="Look closely at the candidate"
            subtitle="Delve into the candidate's vision and mission with keen attention"
            active={false}
          />
          <Step
            title="Choose your ideal candidate"
            subtitle="Make your candidate selection with confidence, considering a variety of factors"
            active={false}
          />
          <Step
            title="Finish, wait for result"
            subtitle="Anticipate the thrilling moment of election results, awaiting the unveiling at the designated time"
            active={false}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
