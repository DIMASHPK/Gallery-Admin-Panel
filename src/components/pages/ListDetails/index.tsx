import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ListDetailsResponseType } from '~/types';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { listDetailsDataAtom } from '~/recoil/atoms';
import { useQuery } from '~/hooks';
import { API_PATH_NAMES, EMPTY_PHOTO } from '~/data/constants';
import Preloader from '~/components/common/Preloader';
import { getDate } from '~/utils/datesHelpers';
import { formatBytes } from '~/utils/helpers';
import useStyles from './styles';
import DetailsNavigation from './Navigation';

const ListDetails: React.FC = () => {
  const { id } = useParams();

  const { loading, data } = useQuery<ListDetailsResponseType>({
    path: API_PATH_NAMES.LIST_DETAILS.replace(
      ':id',
      id as string
    ) as typeof API_PATH_NAMES.LIST_DETAILS,
  });

  const styles = useStyles();

  const [listDetailsData, setListDetailsData] =
    useRecoilState(listDetailsDataAtom);

  useEffect(() => {
    if (data) {
      setListDetailsData(data.data);
    }
  }, [data, setListDetailsData]);

  if (loading && !listDetailsData) {
    return <Preloader />;
  }

  if (!listDetailsData) {
    return null;
  }

  const { name, size, description, date, images } = listDetailsData;
  const [{ name: imageName, src } = EMPTY_PHOTO] = images;

  return (
    <DetailsNavigation>
      <Box css={styles.listDetailsContainer}>
        <Card css={styles.listDetailsCard}>
          <CardMedia component="img" image={src} alt={imageName} />
          <CardContent>
            <Typography variant="h3" component="h2">
              {name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              size: {formatBytes(size)} <br />
              date: {getDate(date)}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions css={styles.listDetailsCardActions}>
            <Button size="medium" variant="contained" color="primary">
              <EditIcon css={styles.listDetailsCardActionIcon} />
              &nbsp;
              <span>Edit</span>
            </Button>
            <Button size="medium" variant="contained" color="error">
              <DeleteIcon css={styles.listDetailsCardActionIcon} />
              &nbsp;
              <span>Remove</span>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </DetailsNavigation>
  );
};

export default ListDetails;
