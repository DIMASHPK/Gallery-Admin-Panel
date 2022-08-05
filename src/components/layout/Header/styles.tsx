import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    spacing,
    palette: {
      secondary: { main },
      custom: {
        white: { primary: primaryWhite },
      },
    },
  } = useTheme();

  return {
    appBar: css({
      display: 'flex',
      flexDirection: 'row',
      padding: spacing(2),
      alignItems: 'center',
    }),
    logo: css({
      color: primaryWhite,
    }),
    logoLink: css({
      color: primaryWhite,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
    }),
    list: css({
      display: 'flex',
      marginLeft: spacing(4),
    }),
    listItem: css({
      width: 'auto',
    }),
    listItemLink: css({
      textDecoration: 'none',
      color: primaryWhite,
      '&.active': {
        color: main,
      },
    }),
  };
};
