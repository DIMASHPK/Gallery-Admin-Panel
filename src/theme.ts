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
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          background: creamColor,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          background: creamColor,
          padding: 16,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: secondaryMainColor,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: whiteMainColor,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: whiteMainColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          background: darkGreenColor,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: whiteMainColor,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: whiteMainColor,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: primaryMainColor,
          },
        },
        input: {
          color: whiteMainColor,
        },
        notchedOutline: {
          borderColor: whiteMainColor,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: whiteMainColor,
        },
        select: {
          '& .MuiMenuItem-root': {
            color: whiteMainColor,
          },
        },
      },
    },
  },
});
