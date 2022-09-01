import { useTheme } from '@mui/material';
import { css } from '@emotion/react';

export default () => {
  const { spacing } = useTheme();

  return {
    filtersConditionWrapper: css({
      display: 'flex',
      flexDirection: 'column',
    }),
    filtersCondition: css({
      width: 100,
      margin: spacing(2, 0),
    }),
  };
};
