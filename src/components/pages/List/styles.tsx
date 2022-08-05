import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    spacing,
    palette: {
      custom: {
        white: { cream },
      },
    },
  } = useTheme();

  return {
    listContainer: css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }),
    listTitle: css({
      textAlign: 'center',
      marginBottom: spacing(5),
      color: cream,
    }),
    listItemsContainer: css({
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: spacing(4),
    }),
  };
};
