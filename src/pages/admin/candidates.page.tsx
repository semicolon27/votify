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
import TopBarCandidate from '../../layouts/topbar_admin.layout';
import CandidateService from '../../services/candidate.service';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../context/loading.context';
import EditIcon from '../../assets/icons/edit.svg';
import DeleteIcon from '../../assets/icons/delete.svg';
import { useNavigate } from 'react-router-dom';

export interface VisionType {
  candidateid: string;
  mission: string;
}
export interface MissionType {
  candidateid: string;
  vision: string;
}
export interface CandidateType {
  id: string;
  option: string;
  name: string;
  label: string;
  image: string;
  vision: VisionType[];
  mission: MissionType[];
}

export default function CandidatesPage() {
  const sCandidate = new CandidateService();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const navigate = useNavigate();

  const getCandidates = async () => {
    setIsLoading(true);
    try {
      const result = await sCandidate.getCandidates();
      setCandidates(result);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  const onDeleteSubmit = async (id: string) => {
    try {
      const ok = await confirm('Anda yakin akan menghapus kandidat ?');
      if (ok) {
        await sCandidate.deleteCandidate(id);
        await sCandidate.getCandidates();
        alert('Berhasil menghapus kandidat');
      }
    } catch (err) {
      alert('gagal hapus kandidat, ' + err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // await getTokenFromStorageOrLogout();
      getCandidates();
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
            title="Candidate"
            trailing={
              <Link href="#" underline="hover">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span className="semibold">+ New Candidate</span>
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
                        Candidate
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
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {candidates.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
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
                                height: '5em',
                                width: '5em',
                                marginRight: '1em',
                              }}
                              src={row.image}
                              alt=""
                            />
                            <span>{row.name}</span>
                          </Box>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          className="medium text-gray-color"
                        >
                          {row.label}
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
                                navigate('/admin/candidate/edit/' + row.id)
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
                              onClick={() => onDeleteSubmit(row.id)}
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
