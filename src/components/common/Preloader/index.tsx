import React from 'react';
import Loader, { CircularProgressProps } from '@mui/material/CircularProgress';
import { PRELOADER_STYLES_KEY } from '~/data/constants';
import { SerializedStyles } from '@emotion/react';
import useStyles, { ArgsType } from './styles';

type PreloaderPropsType = ArgsType &
  CircularProgressProps & {
    classes?: {
      preloaderWrapper?: SerializedStyles;
      preloader?: SerializedStyles;
    };
  };

const Preloader: React.FC<PreloaderPropsType> = props => {
  const { key = PRELOADER_STYLES_KEY.DEFAULT, classes, ...restProps } = props;

  const styles = useStyles({ key });

  return (
    <div css={[styles.preloaderWrapper, classes?.preloaderWrapper]}>
      <Loader css={[styles.preloader, classes?.preloader]} {...restProps} />
    </div>
  );
};

export default Preloader;
