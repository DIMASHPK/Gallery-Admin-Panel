import React from 'react';
import Popover from '~/components/common/Popover';
import { PopoverProps } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

type ToolsPopoverPropsType = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: () => void;
};

const ToolsPopover: React.FC<ToolsPopoverPropsType> = props => {
  const { anchorEl, handleClose } = props;

  return (
    <Popover anchorEl={anchorEl} onClose={handleClose}>
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
};

export default ToolsPopover;
