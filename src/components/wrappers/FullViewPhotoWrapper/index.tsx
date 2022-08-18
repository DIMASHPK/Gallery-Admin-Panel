import React, { useEffect, useState } from 'react';
import { ChildrenType } from '~/types';
import { useRecoilValue } from 'recoil';
import { photoFullViewDataAtom } from '~/recoil/atoms';
import Lightbox from 'react-image-lightbox';
import useClickHandlers from './hooks/useClickHandlers';
import 'react-image-lightbox/style.css';

type FullViewPhotoWrapperPropsType = ChildrenType;

const FullViewPhotoWrapper: React.FC<FullViewPhotoWrapperPropsType> = ({
  children,
}) => {
  const { isOpen, images, photoIndex } = useRecoilValue(photoFullViewDataAtom);

  const { handleMovePrevRequest, handleMoveNextRequest, handleClose } =
    useClickHandlers();

  // fix for the infinity loader on the initial image opening
  const [key, setKey] = useState(false);

  // fix for the infinity loader on the initial image opening
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const timeout = setTimeout(() => setKey(key + 1));

    return () => {
      clearTimeout(timeout);
    };

    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <>
      {children}
      {Boolean(isOpen && images.length) && (
        <Lightbox
          // fix for the infinity loader on the initial image opening
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          //  @ts-ignore
          key={key}
          reactModalStyle={{
            overlay: {
              position: 'absolute',
              zIndex: 1300,
            },
          }}
          mainSrc={images[photoIndex].src}
          imageTitle={`${photoIndex + 1} of ${images.length} Photos`}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrevRequest}
          onMoveNextRequest={handleMoveNextRequest}
          nextSrc={images?.[(photoIndex + 1) % images.length]?.src}
          prevSrc={images?.[(photoIndex - 1) % images.length]?.src}
        />
      )}
    </>
  );
};

export default FullViewPhotoWrapper;
