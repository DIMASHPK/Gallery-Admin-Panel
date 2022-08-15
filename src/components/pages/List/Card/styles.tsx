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
    card: css({
      display: 'flex',
      padding: spacing(3),
      cursor: 'pointer',
      position: 'relative',
      minHeight: 337,
      '&:hover .cardToolbar': {
        transform: 'translateX(0%)',
      },
    }),
    cardImageWrapper: css({
      width: '100%',
      position: 'absolute',
      height: '100%',
      overflow: 'hidden',
      top: 0,
      left: 0,
    }),
    cardImage: css({
      position: 'absolute',
      height: '100%',
    }),
    cardContent: css({
      padding: spacing(2),
      zIndex: 2,
      width: '70%',
    }),
    cardContentDescription: css({
      display: '-webkit-box',
      '-webkit-line-clamp': '5',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }),
    cardContentTitle: css({
      color: dark,
      marginBottom: spacing(2),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
  };
};
