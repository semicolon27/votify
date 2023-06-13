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
import TopBarAdmin from '../../layouts/topbar_admin.layout';
import AdminService from '../../services/admin.service';

export default function AdminFormPage(props: { isEdit: boolean }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { userData, getTokenFromStorageOrLogout } = useContext(AuthContext);
  const { setTokenStorage } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  const sAdmin = new AdminService();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getAdminById = async () => {
    if (!props.isEdit) return;
    setIsLoading(true);
    try {
      const result = await sAdmin.getAdminById(params.id ?? '');
      setUsername(result.username);
      setName(result.name);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitAddAdmin = async () => {
    setIsLoading(true);
    try {
      const result = await sAdmin.addAdmin(username, name, password);
      alert('submit berhasil');
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitEditAdmin = async () => {
    setIsLoading(true);
    try {
      const result = await sAdmin.editAdmin(
        params.id ?? '',
        username,
        name,
        password
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
    if (name == '') {
      alert('name kosong');
      return;
    }
    if (username == '') {
      alert('username kosong');
      return;
    }
    if (password != '') {
      if (password != confirmPassword) {
        alert('password tidak sama.');
        return;
      }
    }

    if (props.isEdit) submitEditAdmin();
    if (!props.isEdit) submitAddAdmin();
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTokenFromStorageOrLogout();
      getAdminById();
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
          <TopBarAdmin
            title={
              props.isEdit
                ? 'Detail Administrators'
                : 'Create New Administrator'
            }
            breadcrumbs={[
              {
                name: 'Administrators',
                route: '/admin',
              },
              {
                name: props.isEdit ? 'Edit Admin' : 'Create Admin',
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
                  value={username}
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={false} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={name}
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={password}
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  type="password"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  value={confirmPassword}
                  id="confirm_password"
                  label="Confirm Password"
                  name="confirm_password"
                  autoComplete="confirm_password"
                  type="password"
                  autoFocus
                  sx={{ mb: 3 }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                <CButtonLink to="/admin">Back</CButtonLink>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
}
