import React from 'react';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ListItem } from '~/types';
import Typography from '@mui/material/Typography';
import CardToolbar from '~/components/pages/List/Card/Toolbar';
import useStyles from './styles';

type CardPropsType = ListItem;

const Card: React.FC<CardPropsType> = React.memo(props => {
  const { images, name, description, id } = props;
  const [{ name: imageName, src }] = images;

  const styles = useStyles();

  return (
    <MuiCard css={styles.card}>
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
