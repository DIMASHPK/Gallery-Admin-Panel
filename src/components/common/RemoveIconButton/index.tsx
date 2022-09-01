import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type RemoveIconButtonPropsType = IconButtonProps;

const RemoveIconButton: React.FC<RemoveIconButtonPropsType> = props => {
  const { onClick, size } = props;

  return (
    <IconButton color="error" size={size} onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

RemoveIconButton.defaultProps = {
  size: 'small',
};

export default RemoveIconButton;
