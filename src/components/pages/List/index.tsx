import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { ListItemType, ListResponseType } from '~/types';
import { useRecoilState } from 'recoil';
import { listDataAtom } from '~/recoil/atoms';
import { useQuery } from '~/hooks';
import { API_PATH_NAMES } from '~/data/constants';
import Preloader from '~/components/common/Preloader';
import Card from './Card';
import useStyles from './styles';

const List: React.FC = () => {
  const { data, loading } = useQuery<ListResponseType>({
    path: API_PATH_NAMES.LIST,
  });

  const [listData, setListData] = useRecoilState(listDataAtom);

  const styles = useStyles();

  useEffect(() => {
    if (data) {
      setListData(data.data);
    }
  }, [data, setListData]);

  const handleCardMap = ({ id, ...restItem }: ListItemType) => (
    <Card key={id} {...restItem} id={id} />
  );

  if (loading && !listData) {
    return <Preloader />;
  }

  if (!listData) {
    return null;
  }

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
