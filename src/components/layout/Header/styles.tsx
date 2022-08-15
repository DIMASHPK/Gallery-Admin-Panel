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
    listItemButton: css({
      padding: 0,
    }),
    listItemLink: css({
      textDecoration: 'none',
      padding: spacing(1, 2, 1, 2),
      color: primaryWhite,
      '&.active': {
        color: main,
      },
    }),
  };
};
