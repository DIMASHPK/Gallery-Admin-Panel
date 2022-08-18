import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { ListItemImageType } from '~/types';
import ArrowLeft from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';
import ArrowRight from '@mui/icons-material/NavigateNext';
import { EMPTY_PHOTO } from '~/data/constants';
import useCarousel from '~/hooks/useCarousel';
import useSetFullViewPhotos from '~/hooks/useSetFullViewPhotos';
import useStyles from './styles';

type DetailsCarouselPropsType = {
  images: ListItemImageType[];
};

const DetailsCarousel: React.FC<DetailsCarouselPropsType> = props => {
  const { images: initialImages } = props;
  const images = !initialImages?.length ? [EMPTY_PHOTO] : initialImages;

  const { slides, wrapperRef, handlePreviousClick, handleNextClick } =
    useCarousel({ slides: images });

  const { handleSetFullViewImages } = useSetFullViewPhotos(images);

  const styles = useStyles();

  const handleSlidesMap = (
    { src, name, id }: typeof EMPTY_PHOTO,
    i: number
  ) => (
    <Box
      css={styles.slideWrapper}
      key={id + i}
      onClick={() => handleSetFullViewImages(i - 1)}
    >
      <CardMedia css={styles.slide} component="img" image={src} alt={name} />
    </Box>
  );

  const renderButton = (button: React.ReactNode) => images.length > 1 && button;

  return (
    <Box css={styles.detailsCarouselWrapper}>
      {renderButton(
        <IconButton
          css={[styles.arrowButton, styles.leftButton]}
          onClick={handlePreviousClick}
        >
          <ArrowLeft css={styles.arrowIcon} />
        </IconButton>
      )}
      <Box css={styles.slidesWrapper} ref={wrapperRef}>
        {slides.map(handleSlidesMap)}
      </Box>
      {renderButton(
        <IconButton
          css={[styles.arrowButton, styles.rightButton]}
          onClick={handleNextClick}
        >
          <ArrowRight css={styles.arrowIcon} />
        </IconButton>
      )}
    </Box>
  );
};

export default DetailsCarousel;
