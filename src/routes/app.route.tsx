import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import adminRoute from './admin.route.tsx';
import participantRoute from './participant.route.tsx';
import publicRoute from './public.route.tsx';
import type { Route as RouteType } from './types.ts';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { AuthContext } from '../context/auth.context.tsx';

const AppRoutes = () => {
  const { getTokenFromStorage, setTokenStorage } = useContext(AuthContext);
  const getRoutes = (): RouteType[] => {
    const isLoggedIn = true;
    const isAdmin = true;

    let routes: RouteType[] = [];
    if (isLoggedIn) {
      if (isAdmin) routes = adminRoute;
      else routes = participantRoute;
    }
    return [...publicRoute, ...adminRoute, ...participantRoute];
  };

  const [routes, setRoutes] = useState<RouteType[]>([]);

  useEffect(() => {
    const routes = getRoutes();
    setRoutes(routes);
  }, []);

  return (
    <>
      <div style={{ fontFamily: 'Inter Variable !important' }}>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default AppRoutes;
