import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: {
      white: {
        primary: string;
        cream: string;
      };
      green: {
        dark: string;
      };
    };
  }

  interface PaletteOptions {
    custom: {
      white: {
        primary: string;
        cream: string;
      };
      green: {
        dark: string;
      };
    };
  }
}
