import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    spacing,
    palette: {
      custom: {
        white: { cream },
        green: { dark },
      },
    },
  } = useTheme();

  return {
    listDetailsContainer: css({
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }),
    listDetailsCard: css({
      maxWidth: 600,
    }),
    listDetailsCardActions: css({
      justifyContent: 'space-between',
    }),
    listDetailsCardActionIcon: css({
      fontSize: 16,
    }),
  };
};
