import React from 'react';
import Typography from '@mui/material/Typography';
import { ListItem } from '~/types';
import { useRecoilValue } from 'recoil';
import { listDataAtom } from '~/recoil/atoms';
import Card from './Card';
import useStyles from './styles';

const List: React.FC = () => {
  const listData = useRecoilValue(listDataAtom);
  const styles = useStyles();

  const handleCardMap = ({ id, ...restItem }: ListItem) => (
    <Card key={id} {...restItem} id={id} />
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
