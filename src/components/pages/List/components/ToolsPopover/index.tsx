import React from 'react';
import Popover from '~/components/common/Popover';
import { PopoverProps } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import NestedListItem from '~/components/common/NestedListItem';
import FiltersForm from '~/components/pages/List/components/FiltersForm';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useStyles from './styles';

type ToolsPopoverPropsType = {
  anchorEl: PopoverProps['anchorEl'];
  onCancelPopover: () => void;
  onSavePopover: () => void;
};

const ToolsPopover: React.FC<ToolsPopoverPropsType> = props => {
  const { anchorEl, onCancelPopover, onSavePopover } = props;

  const styles = useStyles();

  return (
    <Popover
      anchorEl={anchorEl}
      onClose={onCancelPopover}
      css={styles.toolsPopover}
    >
      <Typography css={styles.toolsPopoverTitle} component="h3">
        Tools List
      </Typography>
      <List>
        <NestedListItem label="Filters">
          <FiltersForm />
        </NestedListItem>
        <NestedListItem label="Sorting">
          <FiltersForm />
        </NestedListItem>
      </List>
      <Box css={styles.buttonsWrapper}>
        <Button variant="contained" color="primary" onClick={onSavePopover}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancelPopover}>
          Cancel
        </Button>
      </Box>
    </Popover>
  );
};

export default ToolsPopover;
