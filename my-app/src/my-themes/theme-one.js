import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Red
    },
    background: {
      default: '#f5f5f5', // Light gray
    },
    text: {
      primary: '#000', // Black
      secondary: '#555', // Dark gray
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
});

export default theme;
