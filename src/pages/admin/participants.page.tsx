import Box from '@mui/material/Box';
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
import TopBarParticipant from '../../layouts/topbar_admin.layout';
import ParticipantService from '../../services/participant.service';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../context/loading.context';
import EditIcon from '../../assets/icons/edit.svg';
import DeleteIcon from '../../assets/icons/delete.svg';
import { useNavigate } from 'react-router-dom';

interface ParticipantType {
  id: string;
  name: string;
  regnumber: string;
  password: string;
}

export default function ParticipantsPage() {
  const sParticipant = new ParticipantService();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const navigate = useNavigate();

  const getParticipants = async () => {
    setIsLoading(true);
    try {
      const result = await sParticipant.getParticipants();
      setParticipants(result);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  const onDeleteSubmit = async (id: string) => {
    try {
      const ok = await confirm('Anda yakin akan menghapus partisipan ?');
      if (ok) {
        await sParticipant.deleteParticipant(id);
        alert('Berhasil hapus partisipan');
        await sParticipant.getParticipants();
      }
    } catch (err) {
      alert('gagal hapus partisipan, ' + err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // await getTokenFromStorageOrLogout();
      getParticipants();
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
          <TopBarParticipant
            title="Participant"
            trailing={
              <Link href="#" underline="hover">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span className="semibold">+ New Participant</span>
                </div>
              </Link>
            }
            // breadcrumbs={[
            //   {
            //     name: 'Participant',
            //     route: '/participant',
            //   },
            // ]}
          />
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
                        Participant
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className="medium text-light-gray-color"
                      >
                        {' '}
                        Label
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className="medium text-light-gray-color"
                      >
                        {' '}
                        Password
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className="medium text-light-gray-color"
                      >
                        {' '}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {participants.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          {row.regnumber}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          {row.password}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              direction: 'row',
                              alignItems: 'center',
                            }}
                          >
                            <img
                              style={{
                                objectFit: 'contain',
                                height: '1.5em',
                                width: '1.5em',
                                marginRight: '1em',
                              }}
                              src={EditIcon}
                              alt=""
                              className="icon-button"
                              onClick={() =>
                                navigate(
                                  '/admin/participant/edit/' + row.regnumber
                                )
                              }
                            />
                            <img
                              style={{
                                objectFit: 'contain',
                                height: '1.5em',
                                width: '1.5em',
                                marginRight: '1em',
                              }}
                              src={DeleteIcon}
                              alt=""
                              className="icon-button"
                              onClick={() => onDeleteSubmit(row.regnumber)}
                            />
                          </Box>
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
function getTokenFromStorageOrLogout() {
  throw new Error('Function not implemented.');
}
