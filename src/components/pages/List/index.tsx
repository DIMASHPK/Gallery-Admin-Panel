import React from 'react';
import Typography from '@mui/material/Typography';
import { ListItemType } from '~/types';
import Preloader from '~/components/common/Preloader';
import { useLoadData } from './hooks';
import Card from './Card';
import useStyles from './styles';

const List: React.FC = () => {
  const { loading, listData, setRef, isEnd } = useLoadData();

  const styles = useStyles();

  const handleCardMap = ({ id, ...restItem }: ListItemType, index: number) =>
    index === (listData?.length || 0) - 1 && !isEnd ? (
      <div key={id} ref={setRef}>
        <Card key={id} {...restItem} id={id} />
      </div>
    ) : (
      <Card key={id} {...restItem} id={id} />
    );

  const renderPreloader = loading && <Preloader size={60} />;

  return (
    <div css={styles.listContainer}>
      <Typography component="h1" variant="h1" css={styles.listTitle}>
        List Gallery
      </Typography>
      <div css={styles.listItemsContainer}>
        {listData?.map?.(handleCardMap)}
      </div>
      {renderPreloader}
    </div>
  );
};

export default List;
