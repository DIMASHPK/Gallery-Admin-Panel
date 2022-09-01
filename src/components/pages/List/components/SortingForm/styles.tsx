import { useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default () => {
  const { spacing } = useTheme();

  return {
    sortingFormWrapper: css({
      marginBottom: spacing(2),
      display: 'flex',
      marginLeft: spacing(2),
    }),
    orderField: css({
      marginRight: spacing(2),
      width: 100,
    }),
    valueField: css({
      flexGrow: 1,
      marginRight: spacing(1),
    }),
  };
};
