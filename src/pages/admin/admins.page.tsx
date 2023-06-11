import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Sidebar, { drawerWidth } from '../../layouts/sidebar.layout';
import TopBarAdmin from '../../layouts/topbar_admin.layout';
import CButtonLink from '../../components/button_link.component';
import Box from '@mui/material/Box';
import { AppContext } from '../../context/app.context';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../context/loading.context';
import { AuthContext } from '../../context/auth.context';
import AdminService from '../../services/admin.service';

interface AdminType {
  id: string;
  name: string;
  username: string;
}

export default function AdminsPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { userData, getTokenFromStorageOrLogout } = useContext(AuthContext);
  const { setTokenStorage } = useContext(AuthContext);

  const sAdmin = new AdminService();

  const [admins, setAdmins] = useState<AdminType[]>([]);

  const getAdmins = async () => {
    setIsLoading(true);
    try {
      const result = await sAdmin.getAdmins();
      setAdmins(result);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdmins();
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
            title="Administrators"
            trailing={
              <CButtonLink to="/admin/create">+ New Administrator</CButtonLink>
            }
            // breadcrumbs={[
            //   {
            //     name: 'Participant',
            //     route: '/participant',
            //   },
            // ]}
          />
          <span>aaaa {userData.username}</span>
          <div style={{ margin: '0em 1em' }} className="box-wrapper">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className="medium text-light-gray-color"
                      >
                        {' '}
                        Nama
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        className="medium text-light-gray-color"
                      >
                        {' '}
                        Username
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {admins.map((row, index) => (
                    <TableRow
                      key={row.username}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.username}
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>
    </>
  );
}
