import React from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import ToolsPopover from '~/components/pages/List/components/ToolsPopover';
import usePopoverHandlers from '~/components/pages/List/components/Tools/hooks/usePopoverHandlers';
import ToolsChipList from '~/components/pages/List/components/ToolsChipList';
import useStyles from './styles';

const Tools: React.FC = () => {
  const styles = useStyles();

  const {
    handleOpenPopover,
    handleCancelPopover,
    anchorEl,
    handleSavePopover,
  } = usePopoverHandlers();

  return (
    <Box css={styles.toolsContainer}>
      <Box css={styles.toolsWrapper}>
        <Button
          variant="contained"
          startIcon={<SettingsIcon />}
          onClick={handleOpenPopover}
        >
          Tools
        </Button>
        <ToolsChipList />
        <ToolsPopover
          anchorEl={anchorEl}
          onCancelPopover={handleCancelPopover}
          onSavePopover={handleSavePopover}
        />
      </Box>
    </Box>
  );
};

export default Tools;
