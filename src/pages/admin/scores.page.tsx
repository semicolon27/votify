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
import TopBarScore from '../../layouts/topbar_admin.layout';
import VoteService from '../../services/vote.service';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../context/loading.context';
import { CandidateType } from './candidates.page';
import GroupIcon from '../../assets/icons/users-more.svg';

interface ScoreType {
  candidateid: string;
  candidate: CandidateType;
  count: string;
}

export default function ScoresPage() {
  const sVote = new VoteService();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [scores, setScores] = useState<ScoreType[]>([]);

  const getScores = async () => {
    setIsLoading(true);
    try {
      const result = await sVote.getVotesCount();
      setScores(result);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // await getTokenFromStorageOrLogout();
      getScores();
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
          <TopBarScore title="Score" />
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
                        Total Voter
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
                  {scores.map((row) => (
                    <TableRow
                      key={row.candidate.name}
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
                              src={row.candidate.image}
                              alt=""
                            />
                            <span>{row.candidate.name}</span>
                          </Box>
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
                                height: '2em',
                                width: '2em',
                                marginRight: '1em',
                              }}
                              src={GroupIcon}
                              alt=""
                            />
                            <span>
                              {Number(row.count).toLocaleString('id')}
                            </span>
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
