import React, { useCallback } from 'react';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ListItem } from '~/types';
import Typography from '@mui/material/Typography';
import CardToolbar from '~/components/pages/List/Card/Toolbar';
import useStyles from './styles';

type CardPropsType = ListItem & {
  // eslint-disable-next-line no-unused-vars
  onCheckboxChange: (id: string) => void;
  isChecked: boolean;
};

const Card: React.FC<CardPropsType> = React.memo(props => {
  const { images, name, description, id, onCheckboxChange, isChecked } = props;
  const [{ name: imageName, src }] = images;

  const handleCheckboxChange = useCallback(() => {
    onCheckboxChange(id);
  }, []);

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
        <Typography>{description}</Typography>
      </CardContent>
      <CardToolbar
        onCheckboxChange={handleCheckboxChange}
        isChecked={isChecked}
      />
    </MuiCard>
  );
});

Card.displayName = 'Card';

export default Card;
