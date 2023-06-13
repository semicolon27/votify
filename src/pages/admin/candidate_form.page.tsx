import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CButton from '../../components/button.component';
import CButtonLink from '../../components/button_link.component';
import CTextField from '../../components/text_field.component';
import { AuthContext } from '../../context/auth.context';
import { LoadingContext } from '../../context/loading.context';
import Sidebar, { drawerWidth } from '../../layouts/sidebar.layout';
import TopBarCandidate from '../../layouts/topbar_admin.layout';
import CandidateService from '../../services/candidate.service';

export default function CandidateFormPage(props: { isEdit: boolean }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { userData, getTokenFromStorageOrLogout } = useContext(AuthContext);
  const { setTokenStorage } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  const sCandidate = new CandidateService();

  const [label, setLabel] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [option, setOption] = useState('');

  const getCandidateById = async () => {
    if (!props.isEdit) return;
    setIsLoading(true);
    try {
      const result = await sCandidate.getCandidateById(params.id ?? '');
      setName(result.name);
      setOption(result.option);
      setLabel(result.label);
      setImage(result.image);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitAddCandidate = async () => {
    setIsLoading(true);
    try {
      const result = await sCandidate.addCandidate(option, name, label, image);

      alert('submit berhasil');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitEditCandidate = async () => {
    setIsLoading(true);
    try {
      const result = await sCandidate.editCandidate(
        params.id ?? '',
        option,
        name,
        label,
        image
      );
      alert('submit berhasil');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = async () => {
    const yes = confirm('Yakin akan mensubmit form.');
    if (!yes) return;
    if (label == '') {
      alert('label kosong');
      return;
    }
    if (name == '') {
      alert('fullname kosong');
      return;
    }
    if (image == '') {
      alert('gambar kosong');
      return;
    }

    if (props.isEdit) submitEditCandidate();
    if (!props.isEdit) submitAddCandidate();
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
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Sidebar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <CssBaseline />
          <TopBarCandidate
            title={props.isEdit ? 'Detail Candidate' : 'Create New Candidate'}
            breadcrumbs={[
              {
                name: 'Candidate',
                route: '/admin/candidates',
              },
              {
                name: props.isEdit ? 'Edit Candidate' : 'Create Candidate',
              },
            ]}
          />
          <div style={{ margin: '0em 1em' }} className="box-wrapper">
            <Typography variant="h4" className="semibold">
              Detail
            </Typography>
            <Grid container columnSpacing={4}>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={name}
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={false} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={label}
                  id="label"
                  label="Label"
                  name="label"
                  autoComplete="label"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={image}
                  id="image"
                  label="Image"
                  name="image"
                  autoComplete="image"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={option}
                  id="option"
                  label="Option"
                  name="option"
                  autoComplete="option"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setOption(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitForm}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Submit'}
                </CButton>
              </Grid>
              <Grid item textAlign="center" xs={12}>
                <CButtonLink to="/admin/candidate">Back</CButtonLink>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
}
