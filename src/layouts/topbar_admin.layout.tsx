import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

export default function TopBarAdmin(props: {
  title: string;
  trailing?: React.ReactNode | undefined;
  breadcrumbs?:
    | {
        name: string;
        route?: string;
      }[]
    | undefined;
}) {
  const optionalBreadcrumb = () => {
    if (props.breadcrumbs)
      return (
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          {props.breadcrumbs?.map((row, index) => {
            if (row.route)
              return (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  color="inherit"
                  to={row.route}
                >
                  <Typography className="text-light-gray-color" variant="body2">
                    {row.name}
                  </Typography>
                </NavLink>
              );
            else
              return (
                <Typography className="text-light-gray-color" variant="body2">
                  {row.name}
                </Typography>
              );
          })}
        </Breadcrumbs>
      );
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        pt: '2em',
        pb: '2em',
        px: '1em',
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
        {optionalBreadcrumb()}
        <Typography variant="h4" className="semibold">
          {props.title}
        </Typography>
      </Box>
      <Box>{props.trailing}</Box>
    </Box>
  );
}
