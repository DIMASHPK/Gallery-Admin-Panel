import { useRecoilState } from 'recoil';
import { photoFullViewDataAtom } from '~/recoil/atoms';
import { PhotoFullViewImageType } from '~/types';

export default (images: PhotoFullViewImageType[]) => {
  const [fullViewPhotosData, setFullViewPhotosData] = useRecoilState(
    photoFullViewDataAtom
  );

  const handleSetFullViewImages = (photoIndex: number) => {
    const data = {
      ...fullViewPhotosData,
      images,
      isOpen: true,
      photoIndex,
    };

    setFullViewPhotosData(data);
  };

  return { handleSetFullViewImages };
};
