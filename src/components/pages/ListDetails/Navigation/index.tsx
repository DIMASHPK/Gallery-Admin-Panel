import React from 'react';
import { ChildrenType } from '~/types';
import ArrowLeft from '@mui/icons-material/NavigateBefore';
import ArrowRight from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import useButtonsHandlers from './hooks/useButtonsHandlers';
import useButtonsDisabled from './hooks/useButtonsDisabled';
import useStyles from './styles';

type NavigationDetailsPropsType = ChildrenType;

const NavigationDetails: React.FC<NavigationDetailsPropsType> = props => {
  const { children } = props;

  const styles = useStyles();

  const { isLeftButtonDisabled, isRightButtonDisabled } = useButtonsDisabled();

  const { handlePreviousClick, handleNextClick } = useButtonsHandlers();

  return (
    <div css={styles.detailsNavigationWrapper}>
      <IconButton
        css={[styles.navigationButton, styles.leftButton]}
        disabled={isLeftButtonDisabled}
        onClick={handlePreviousClick}
      >
        <ArrowLeft css={styles.arrowIcon} />
      </IconButton>
      {children}
      <IconButton
        css={[styles.navigationButton, styles.rightButton]}
        disabled={isRightButtonDisabled}
        onClick={handleNextClick}
      >
        <ArrowRight css={styles.arrowIcon} />
      </IconButton>
    </div>
  );
};

export default NavigationDetails;
