// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Cambia a 'dark' para modo oscuro
    primary: {
      main: '#000',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#dfdfdf'
    },
    text: {
      primary: '#000000',
      secondary: '#5f6368',
      disabled: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Mantiene el texto de los botones en su formato original
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Radio de bordes redondeados por defecto
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.2)',
    '0px 1px 5px rgba(0, 0, 0, 0.2)',
    '0px 1px 8px rgba(0, 0, 0, 0.2)',
    '0px 1px 10px rgba(0, 0, 0, 0.2)',
    '0px 1px 14px rgba(0, 0, 0, 0.2)',
    '0px 1px 18px rgba(0, 0, 0, 0.2)',
    '0px 2px 16px rgba(0, 0, 0, 0.2)',
    '0px 3px 14px rgba(0, 0, 0, 0.2)',
    '0px 3px 16px rgba(0, 0, 0, 0.2)',
    '0px 4px 18px rgba(0, 0, 0, 0.2)',
    '0px 4px 20px rgba(0, 0, 0, 0.2)',
    '0px 5px 22px rgba(0, 0, 0, 0.2)',
    '0px 5px 24px rgba(0, 0, 0, 0.2)',
    '0px 5px 26px rgba(0, 0, 0, 0.2)',
    '0px 6px 28px rgba(0, 0, 0, 0.2)',
    '0px 6px 30px rgba(0, 0, 0, 0.2)',
    '0px 6px 32px rgba(0, 0, 0, 0.2)',
    '0px 7px 34px rgba(0, 0, 0, 0.2)',
    '0px 7px 36px rgba(0, 0, 0, 0.2)',
    '0px 8px 38px rgba(0, 0, 0, 0.2)',
    '0px 8px 40px rgba(0, 0, 0, 0.2)',
    '0px 8px 42px rgba(0, 0, 0, 0.2)',
    '0px 9px 44px rgba(0, 0, 0, 0.2)',
    '0px 9px 46px rgba(0, 0, 0, 0.2)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 20px',
        },
        containedPrimary: {
          color: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#004ba0', // Color de la AppBar
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '1rem',
          lineHeight: '1.5',
        },
      },
    },
  },
  spacing: 8, // Espaciado por defecto: 8px (el multiplicador que usa el sistema de espaciado de MUI)
});

export default theme;
