import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { useSelecteItem } from '~/components/pages/List/hooks';
import useStyles from './styles';

type CardToolbarPropsType = {
  id: string;
};

const CardToolbar: React.FC<CardToolbarPropsType> = React.memo(props => {
  const { id } = props;
  const [isChecked, onCheckboxChange] = useSelecteItem(id);

  const styles = useStyles();

  return (
    <div
      css={[styles.cardToolbar, isChecked && styles.cardToolbarShown]}
      className="cardToolbar"
    >
      <div>
        <Checkbox
          checked={isChecked}
          onChange={onCheckboxChange}
          css={styles.cardToolbarCheckbox}
        />
      </div>
      <div css={styles.cardToolbarDown}>
        <IconButton>
          <EditIcon css={styles.cardToolbarEdit} />
        </IconButton>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
});

CardToolbar.displayName = 'CardToolbar';

export default CardToolbar;
