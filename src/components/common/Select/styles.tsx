import { useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default () => {
  const {
    palette: {
      custom: {
        white: { primary },
      },
      error: { main: error },
    },
  } = useTheme();

  return {
    option: css({
      color: primary,
    }),
    helperText: css({
      color: error,
      marginLeft: 14,
    }),
  };
};
