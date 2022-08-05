import { createTheme } from '@mui/material/styles';

const creamColor = '#fffbf0';
const primaryMainColor = '#943d24';
const secondaryMainColor = '#2d2d2d';
const whiteMainColor = '#fff';
const darkGreenColor = '#282612';

export default createTheme({
  typography: {
    h1: {
      color: creamColor,
    },
  },
  palette: {
    primary: {
      main: primaryMainColor,
    },
    secondary: {
      main: secondaryMainColor,
    },
    custom: {
      white: {
        primary: whiteMainColor,
        cream: creamColor,
      },
      green: {
        dark: darkGreenColor,
      },
    },
  },
});
