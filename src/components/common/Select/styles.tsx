import { useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default () => {
  const {
    palette: {
      custom: {
        white: { primary },
      },
    },
  } = useTheme();

  return {
    option: css({
      color: primary,
    }),
  };
};
