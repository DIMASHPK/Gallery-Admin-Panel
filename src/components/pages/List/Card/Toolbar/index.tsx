import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { useSelectedItem } from '~/components/pages/List/hooks';
import useStyles from './styles';

type CardToolbarPropsType = {
  id: number;
};

const CardToolbar: React.FC<CardToolbarPropsType> = React.memo(props => {
  const { id } = props;
  const [isChecked, onCheckboxChange] = useSelectedItem(id);

  const styles = useStyles();

  const handlePreventClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      css={[styles.cardToolbar, isChecked && styles.cardToolbarShown]}
      className="cardToolbar"
      onClick={handlePreventClick}
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
