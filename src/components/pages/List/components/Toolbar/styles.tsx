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
    cardToolbar: css({
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      background: dark,
      zIndex: 1,
      padding: spacing(1),
      transition: 'transform .3s',
      transform: 'translateX(-300%)',
    }),
    cardToolbarDown: css({
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    }),
    cardToolbarShown: css({
      transform: 'translateX(0%)',
    }),
    cardToolbarEdit: css({
      color: cream,
    }),
    cardToolbarCheckbox: css({
      color: cream,
      '&.Mui-checked': {
        color: cream,
      },
    }),
  };
};
