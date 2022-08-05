import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    spacing,
    palette: {
      secondary: { main },
    },
  } = useTheme();

  return {
    layout: css({
      background: main,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }),
    main: css({
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      padding: spacing(5),
    }),
  };
};
