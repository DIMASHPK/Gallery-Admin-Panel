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
    detailsCarouselWrapper: css({
      position: 'relative',
      height: 350,
      width: '100%',
    }),
    arrowButton: css({
      position: 'absolute',
      zIndex: 2,
      top: '50%',
      transform: 'translateY(- 50%)',
      color: primary,
    }),
    leftButton: css({
      left: 5,
    }),
    rightButton: css({
      right: 5,
    }),
    arrowIcon: css({ fontSize: 35 }),
    slidesWrapper: css({
      display: 'flex',
      height: '100%',
      transition: 'transform .3s',
    }),
    slideWrapper: css({
      flexShrink: 0,
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    }),
    slide: css({
      position: 'absolute',
      height: 'auto',
      width: '100%',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }),
  };
};
