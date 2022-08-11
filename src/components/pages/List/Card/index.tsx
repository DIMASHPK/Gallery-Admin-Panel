import React from 'react';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ListItemType } from '~/types';
import Typography from '@mui/material/Typography';
import CardToolbar from '~/components/pages/List/Card/Toolbar';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/data';
import useStyles from './styles';

type CardPropsType = ListItemType;

const Card: React.FC<CardPropsType> = React.memo(props => {
  const { images, name, description, id } = props;
  const [{ name: imageName, src }] = images;

  const styles = useStyles();

  const navigate = useNavigate();

  const handleRoute = () => {
    const { PATH } = ROUTES.LIST_DETAILS;

    const replacedString = PATH.replace(':id', id);

    navigate(replacedString);
  };

  return (
    <MuiCard css={styles.card} onClick={handleRoute}>
      <div css={styles.cardImageWrapper}>
        <CardMedia
          component="img"
          image={src}
          alt={imageName}
          css={styles.cardImage}
        />
      </div>
      <CardContent css={styles.cardContent}>
        <Typography component="h2" variant="h3" css={styles.cardContentTitle}>
          {name}
        </Typography>
        <Typography css={styles.cardContentDescription}>
          {description}
        </Typography>
      </CardContent>
      <CardToolbar id={id} />
    </MuiCard>
  );
});

Card.displayName = 'Card';

export default Card;
