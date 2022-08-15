import React from 'react';
import { ChildrenType } from '~/types';
import ArrowLeft from '@mui/icons-material/NavigateBefore';
import ArrowRight from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';

type NavigationDetailsPropsType = ChildrenType;

const NavigationDetails: React.FC<NavigationDetailsPropsType> = props => {
  const { children } = props;

  const styles = useStyles();

  return (
    <div css={styles.detailsNavigationWrapper}>
      <IconButton css={[styles.navigationButton, styles.leftButton]}>
        <ArrowLeft css={styles.arrowIcon} />
      </IconButton>
      {children}
      <IconButton css={[styles.navigationButton, styles.rightButton]}>
        <ArrowRight css={styles.arrowIcon} />
      </IconButton>
    </div>
  );
};

export default NavigationDetails;
