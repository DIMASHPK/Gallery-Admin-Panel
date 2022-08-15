import Loader from '@mui/material/CircularProgress';
import useStyles from './styles';

const Preloader = () => {
  const styles = useStyles();

  return (
    <div css={styles.preloaderWrapper}>
      <Loader css={styles.preloader} />
    </div>
  );
};

export default Preloader;
