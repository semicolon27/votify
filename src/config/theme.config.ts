import { createTheme, responsiveFontSizes, Shadows } from "@mui/material";

const theme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#02C3BD",
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    fontFamily: [
      'Inter',
      'Inter Variable',
      'sans-serif',
    ].join(','),
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Some CSS
          fontSize: '1rem',
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: '8px',
          fontSize: '12px',
          textTransform: "none",
          padding: "6px 10px"
        },
      },
    },
  },
});

theme.typography.fontFamily = "Inter, Inter Variable, sans-serif ";

export default responsiveFontSizes(theme);