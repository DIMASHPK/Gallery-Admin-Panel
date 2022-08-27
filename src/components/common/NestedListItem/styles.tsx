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
    arrowIcon: css({
      transition: 'transform .3s',
    }),
    opened: css({
      transform: 'rotateZ(180deg)',
    }),
    nestedList: css({
      borderTop: `1px solid ${primary}`,

      '&:last-of-type': {
        borderBottom: `1px solid ${primary}`,
      },
    }),
  };
};
