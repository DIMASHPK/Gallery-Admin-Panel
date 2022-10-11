import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    palette: {
      primary: { main: primary },
    },
    spacing,
  } = useTheme();

  return {
    chip: css({
      color: primary,
      border: `1px solid ${primary}`,
      marginBottom: spacing(0.5),
      marginTop: spacing(0.5),
      maxWidth: 200,
      '&:not(&:last-of-type)': {
        marginRight: spacing(2),
      },
      '&:first-of-type': {
        marginLeft: spacing(2),
      },
    }),
  };
};
