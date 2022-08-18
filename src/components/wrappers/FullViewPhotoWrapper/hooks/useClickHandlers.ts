import { useRecoilState } from 'recoil';
import { photoFullViewDataAtom } from '~/recoil/atoms';

export default () => {
  const [fullViewPhotosData, setFullViewPhotosData] = useRecoilState(
    photoFullViewDataAtom
  );

  const handleClose = () => {
    const data = {
      ...fullViewPhotosData,
      isOpen: false,
    };

    setFullViewPhotosData(data);
  };

  const handleMovePrevRequest = () => {
    const { photoIndex, images } = fullViewPhotosData;

    const data = {
      ...fullViewPhotosData,
      photoIndex: (photoIndex + images.length - 1) % images.length,
    };

    setFullViewPhotosData(data);
  };

  const handleMoveNextRequest = () => {
    const { photoIndex, images } = fullViewPhotosData;

    const data = {
      ...fullViewPhotosData,
      photoIndex: (photoIndex + images.length + 1) % images.length,
    };

    setFullViewPhotosData(data);
  };

  return {
    handleClose,
    handleMovePrevRequest,
    handleMoveNextRequest,
  };
};
