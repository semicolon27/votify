import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Sidebar, { drawerWidth } from '../../layouts/sidebar.layout';
import TopBarAdmin from '../../layouts/topbar_admin.layout';
import CTextField from '../../components/text_field.component';
import { NavLink } from 'react-router-dom';
import CButton from '../../components/button.component';
import CButtonLink from '../../components/button_link.component';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AdminsFormPage() {
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
            title="Administrators"
            breadcrumbs={[
              {
                name: 'Administrators',
                route: '/admin',
              },
              {
                name: 'Create Admin',
                route: '/admin/create',
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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  sx={{ mb: 3 }}
                />
              </Grid>
              <Grid item xs={false} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  sx={{ mb: 3 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CTextField
                  required
                  fullWidth
                  id="confirm_password"
                  label="Confirm Password"
                  name="confirm_password"
                  autoComplete="confirm_password"
                  autoFocus
                  sx={{ mb: 3 }}
                />
              </Grid>
              <Grid item xs={12}>
                <CButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
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
