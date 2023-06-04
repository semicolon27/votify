import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import kandidat2 from '../../assets/images/kandidat2-large.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../../layouts/topbar.layout';
import Paper from '@mui/material/Paper';
import CButtonSecondary from '../../components/button_secondary';
import { useNavigate } from 'react-router-dom';

export default function CandidateDetailPage() {
  const navigate = useNavigate();
  const onBackPressed = () => {
    navigate(-1);
  };
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
          title="Candidate Detail"
          subtitle="Make your candidate selection with confidence, considering a variety of factors"
        />
        <Grid
          container
          component="main"
          sx={{ height: '100vh', px: '5em', pt: '3em' }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            alignContent="start"
            square
          >
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
              <Typography
                variant="h6"
                className="semibold text-light-gray-color"
              >
                Computer Science - 2020
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} square>
            <Box>
              <Typography
                variant="h5"
                className="text-primary-color bold"
                sx={{ mb: '0.2em' }}
              >
                Vision
              </Typography>
              <Typography
                variant="subtitle1"
                className="semibold text-light-gray-color"
                style={{ marginLeft: '0.3em' }}
              >
                To be a leading provider of innovative and sustainable solutions
                in the field of renewable energy, contributing to a greener and
                more sustainable future
              </Typography>

              <Typography
                variant="h5"
                className="text-primary-color bold"
                sx={{ mt: '0.8em' }}
              >
                Mission
              </Typography>
              <Typography variant="subtitle1" className="semibold ">
                <ol
                  style={{ marginLeft: '-1em' }}
                  className="text-light-gray-color"
                >
                  <li>
                    Deliver high-quality and reliable renewable energy products
                    and services that meet the evolving needs of our customers.
                  </li>
                  <li>
                    Drive innovation and research to develop cutting-edge
                    technologies that optimize energy efficiency and harness
                    renewable resources.
                  </li>
                  <li>
                    Collaborate with industry partners and stakeholders to
                    promote the adoption of renewable energy solutions and
                    contribute to a sustainable energy ecosystem.
                  </li>
                </ol>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} container justifyContent="flex-end" component={Paper}>
            <Grid item>
              <CButtonSecondary onClick={onBackPressed} sx={{ px: '2em' }}>
                Back to Candidates
              </CButtonSecondary>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
