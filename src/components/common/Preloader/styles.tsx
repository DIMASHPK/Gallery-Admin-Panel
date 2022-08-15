import { css } from '@emotion/react';

export default () => ({
  preloaderWrapper: css({
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
  }),
  preloader: css({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }),
});
