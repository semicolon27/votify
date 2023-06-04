import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Logo from '../assets/icons/votify-logo.svg';

export default function TopBar(props: { title: string; subtitle: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        width: '100%',
        pt: '5em',
        pb: '2em',
        px: '5em',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <Typography variant="h4" className="semibold">
          {props.title}
        </Typography>
        <Typography variant="subtitle1" className="text-light-gray-color">
          {props.subtitle}
        </Typography>
      </Box>
      <Box>
        <img src={Logo} style={{ width: '4em', height: '4em' }} alt="" />
      </Box>
    </Box>
  );
}
