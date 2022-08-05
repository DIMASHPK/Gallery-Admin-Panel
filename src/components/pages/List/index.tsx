import React, { useCallback, useState } from 'react';
import { useListDataContext } from '~/hooks';
import Typography from '@mui/material/Typography';
import { ListItem } from '~/types';
import Card from './Card';
import useStyles from './styles';

const List: React.FC = () => {
  const listData = useListDataContext();
  const styles = useStyles();
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleCheckboxChange = useCallback(
    (id: string) => {
      const handleState = (prevState: string[]) => {
        const currentData = [...prevState];
        const findingIndex = currentData.indexOf(id);

        if (findingIndex > -1) {
          currentData.splice(findingIndex, 1);
        } else {
          currentData.push(id);
        }

        return currentData;
      };

      setCheckedIds(handleState);
    },
    [checkedIds]
  );

  const handleCardMap = ({ id, ...restItem }: ListItem) => (
    <Card
      key={id}
      {...restItem}
      onCheckboxChange={handleCheckboxChange}
      isChecked={checkedIds.includes(id)}
      id={id}
    />
  );

  return (
    <div css={styles.listContainer}>
      <Typography component="h1" variant="h1" css={styles.listTitle}>
        List Gallery
      </Typography>
      <div css={styles.listItemsContainer}>{listData.map(handleCardMap)}</div>
    </div>
  );
};

export default List;
