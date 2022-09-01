import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { ChildrenType } from '~/types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useStyles from './styles';

type NestedListItemPropsType = ChildrenType & {
  label: string;
  isOpen?: boolean;
};

const NestedListItem: React.FC<NestedListItemPropsType> = props => {
  const { label, children, isOpen } = props;

  const [open, setOpen] = useState(isOpen as boolean);

  const styles = useStyles();

  const handleToggle = () => {
    const handleState = (prevValue: boolean) => !prevValue;

    setOpen(handleState);
  };

  return (
    <Box component="li" css={styles.nestedList}>
      <ListItemButton onClick={handleToggle}>
        <ListItemText primary={label} />
        <ExpandMore css={[styles.arrowIcon, open && styles.opened]} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>{children}</List>
      </Collapse>
    </Box>
  );
};

NestedListItem.defaultProps = {
  isOpen: false,
};

export default NestedListItem;
