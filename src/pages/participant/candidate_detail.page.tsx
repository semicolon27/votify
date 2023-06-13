import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import kandidat2 from '../../assets/images/kandidat2-large.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../../layouts/topbar.layout';
import Paper from '@mui/material/Paper';
import CButtonSecondary from '../../components/button_secondary.component';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import { LoadingContext } from '../../context/loading.context';
import CandidateService from '../../services/candidate.service';

export default function CandidateDetailPage() {
  const navigate = useNavigate();
  const onBackPressed = () => {
    navigate(-1);
  };

  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { userData, getTokenFromStorageOrLogout } = useContext(AuthContext);
  const { setTokenStorage } = useContext(AuthContext);
  const params = useParams();

  const sCandidate = new CandidateService();

  const [label, setLabel] = useState('');
  const [name, setName] = useState('');
  const [vision, setVission] = useState<any[]>([]);
  const [mission, setMission] = useState<any[]>([]);
  const [image, setImage] = useState('');
  const [option, setOption] = useState('');

  const getCandidateById = async () => {
    setIsLoading(true);
    try {
      const result = await sCandidate.getCandidateById(params.id ?? '');
      setName(result.name);
      setOption(result.option);
      setLabel(result.label);
      setImage(result.image);
      setVission(result.vision);
      setMission(result.mission);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTokenFromStorageOrLogout();
      getCandidateById();
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
              <img style={{ height: '18em' }} src={image} alt="" />
              <Typography
                variant="h4"
                className="bold text-primary-color"
                sx={{
                  pt: '0.7em',
                  pb: '0.2em',
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                className="semibold text-light-gray-color"
              >
                {label}
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
              {vision.map((row) => (
                <Typography
                  variant="subtitle1"
                  className="semibold text-light-gray-color"
                  style={{ marginLeft: '0.3em' }}
                >
                  {row.vision}
                </Typography>
              ))}

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
                  {mission.map((row) => (
                    <li>{row.mission}</li>
                  ))}
                </ol>
              </Typography>
            </Box>
          </Grid>
          <Grid container justifyContent="flex-end" component={Paper}>
            <Grid item xs={12}>
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
