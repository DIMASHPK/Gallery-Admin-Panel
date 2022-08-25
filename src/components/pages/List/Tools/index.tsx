import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import ToolsPopover from '~/components/pages/List/Tools/ToolsPopover';
import useStyles from './styles';

const Tools: React.FC = () => {
  const styles = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box css={styles.toolsContainer}>
      <Box>
        <Button
          variant="contained"
          startIcon={<SettingsIcon />}
          onClick={handleOpenPopover}
        >
          Tools
        </Button>
        <ToolsPopover anchorEl={anchorEl} handleClose={handleClosePopover} />
      </Box>
    </Box>
  );
};

export default Tools;
