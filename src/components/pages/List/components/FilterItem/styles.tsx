import { useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default () => {
  const { spacing } = useTheme();

  return {
    filterItemWrapper: css({
      marginBottom: spacing(3),
      display: 'flex',
    }),
    nameField: css({
      marginRight: spacing(2),
      width: 100,
    }),
    valueField: css({
      flexGrow: 1,
      marginRight: spacing(1),
    }),
  };
};
