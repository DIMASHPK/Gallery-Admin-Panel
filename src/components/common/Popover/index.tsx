import React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';
import { ChildrenType } from '~/types';

type CommonPopoverPropsType = Omit<PopoverProps, 'open'> & ChildrenType;

const CommonPopover: React.FC<CommonPopoverPropsType> = props => {
  const { children, anchorEl, ...restProps } = props;

  const open = Boolean(anchorEl);

  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...restProps}
      anchorEl={anchorEl}
      open={open}
    >
      {children}
    </Popover>
  );
};

export default CommonPopover;
