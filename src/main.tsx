import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import AppRoutes from './routes/app.route.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/styles/globalStylesteet.scss';
import themeConfig from './config/theme.config.ts';
import { AppProvider } from './context/app.context.tsx';
// import theme from './config/theme.config.ts';
// import 'typeface-inter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeConfig}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
