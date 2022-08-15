import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    palette: {
      custom: {
        white: { primary },
      },
    },
  } = useTheme();

  return {
    detailsNavigationWrapper: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }),
    navigationButton: css({
      height: 50,
      position: 'fixed',
      top: '50%',
      transform: 'translateY(-50%)',
      color: primary,
    }),
    rightButton: css({ right: 10 }),
    leftButton: css({ left: 10 }),
    arrowIcon: css({
      fontSize: 45,
    }),
  };
};
