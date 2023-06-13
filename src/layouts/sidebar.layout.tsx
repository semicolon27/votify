import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import KeyIcon from '../assets/icons/key.svg';
import UsersMoreIcon from '../assets/icons/users-more.svg';
import UsersIcon from '../assets/icons/users.svg';
import ChartVerticalIcon from '../assets/icons/chart-vertical.svg';
import KeyIconActive from '../assets/icons/key-active.svg';
import UsersMoreIconActive from '../assets/icons/users-more-active.svg';
import UsersIconActive from '../assets/icons/users-active.svg';
import ChartVerticalIconActive from '../assets/icons/chart-vertical-active.svg';
import Logo from '../assets/icons/votify-logo.svg';
import { NavLink } from 'react-router-dom';

export const drawerWidth = 240;

export default function Sidebar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  type MenuData = {
    name: string;
    route: string;
    iconPath: string;
    iconPathActive: string;
  };

  const masterdata_menu: MenuData[] = [
    {
      name: 'Administrator',
      route: '/admin',
      iconPath: KeyIcon,
      iconPathActive: KeyIconActive,
    },
    {
      name: 'Candidates',
      route: '/admin/candidates',
      iconPath: UsersIcon,
      iconPathActive: UsersIconActive,
    },
    {
      name: 'Participants',
      route: '/admin/participants',
      iconPath: UsersMoreIcon,
      iconPathActive: UsersMoreIconActive,
    },
  ];

  const others_menu: MenuData[] = [
    {
      name: 'Score',
      route: '/admin/score',
      iconPath: ChartVerticalIcon,
      iconPathActive: ChartVerticalIconActive,
    },
  ];

  const drawer = (
    <div>
      <Toolbar sx={{ my: '1em' }}>
        <img
          style={{ height: '2.5em', marginRight: '0.5em' }}
          src={Logo}
          alt=""
        />
        <Typography
          style={{ color: 'var(--primary)' }}
          variant="h6"
          className="semibold"
        >
          Dashboard
        </Typography>
      </Toolbar>

      <div style={{ margin: '1.5em' }}>
        <Typography
          variant="caption"
          className="semibold text-light-gray-color"
        >
          MASTER DATA
        </Typography>

        <List>
          {masterdata_menu.map((row, index) => (
            <NavLink
              key={row.route}
              style={{ textDecoration: 'none' }}
              to={row.route}
            >
              <ListItem
                className={location.pathname === row.route ? 'menu-active' : ''}
                key={row.name}
                disablePadding
              >
                <ListItemButton className="sidebar-menu-item">
                  <ListItemIcon style={{ minWidth: '2.5em' }}>
                    <img
                      src={
                        location.pathname === row.route
                          ? row.iconPathActive
                          : row.iconPath
                      }
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        className={
                          'medium ' +
                          (location.pathname === row.route
                            ? 'text-primary-color'
                            : 'text-gray-color')
                        }
                      >
                        {row.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Typography
          variant="caption"
          className="semibold text-light-gray-color"
        >
          OTHER
        </Typography>
        <List>
          {others_menu.map((row, index) => (
            <NavLink style={{ textDecoration: 'none' }} to={row.route}>
              <ListItem key={row.route} disablePadding>
                <ListItemButton className="sidebar-menu-item">
                  <ListItemIcon style={{ minWidth: '2.5em' }}>
                    <img
                      src={
                        location.pathname === row.route
                          ? row.iconPathActive
                          : row.iconPath
                      }
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        className={
                          'medium ' +
                          (location.pathname === row.route
                            ? 'text-primary-color'
                            : 'text-gray-color')
                        }
                      >
                        {row.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
