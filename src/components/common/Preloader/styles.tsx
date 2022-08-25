import { css } from '@emotion/react';
import { GetOptionalType } from '~/utils/typeHelpers';
import { PRELOADER_STYLES_KEY } from '~/data/constants';

export type ArgsType = {
  key?: GetOptionalType<typeof PRELOADER_STYLES_KEY>;
};

export default (args: ArgsType) => {
  const { key = PRELOADER_STYLES_KEY.DEFAULT } = args;

  const styles = {
    [PRELOADER_STYLES_KEY.DEFAULT]: {
      preloaderWrapper: css({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }),
      preloader: css({}),
    },
    [PRELOADER_STYLES_KEY.FIXED]: {
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
    },
  };

  return styles[key];
};
