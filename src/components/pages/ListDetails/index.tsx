import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Preloader from '~/components/common/Preloader';
import { getDate } from '~/utils/datesHelpers';
import { formatBytes } from '~/utils/helpers';
import DetailsCarousel from '~/components/pages/ListDetails/components/Carousel';
import { useLoadData } from '~/components/pages/ListDetails/hooks';
import useStyles from './styles';
import DetailsNavigation from './components/Navigation';

const ListDetails: React.FC = () => {
  const styles = useStyles();

  const { listDetailsData, loading } = useLoadData();

  if (loading) {
    return <Preloader />;
  }

  if (!listDetailsData) {
    return null;
  }

  const { name, size, description, date, images } = listDetailsData;

  return (
    <DetailsNavigation>
      <Box css={styles.listDetailsContainer}>
        <Card css={styles.listDetailsCard}>
          <DetailsCarousel images={images} />
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
