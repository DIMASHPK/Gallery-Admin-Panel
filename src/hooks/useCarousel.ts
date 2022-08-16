import { useCallback, useEffect, useMemo, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';

type UseCarouselArgsType<T extends any[] = any[]> = {
  slides: T;
};

export default <T extends any[] = any[]>(args: UseCarouselArgsType<T>) => {
  const { slides } = args;

  const carouselData = useRef({
    index: 1,
    isTransition: false,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const preparedSlides = useMemo(() => {
    if (slides.length === 1 || !slides.length) {
      return slides;
    }

    const firstSlideClone = cloneDeep(slides[0]);
    const lastSlideClone = cloneDeep(slides[slides.length - 1]);

    return [lastSlideClone, ...slides, firstSlideClone];
  }, [slides]);

  const getWrapper = () => wrapperRef.current as HTMLDivElement;
  const getCarouselData = () => carouselData.current;

  const setTransitionToWrapper = () => {
    const wrapper = getWrapper();

    const { transition } = wrapper.style;

    if (transition === 'unset') {
      wrapper.style.transition = `transform .3s`;
    }
  };
  const setTransformValueForWrapper = useCallback((value = 1) => {
    const wrapper = getWrapper();
    const { isTransition } = getCarouselData();

    if (isTransition) {
      return;
    }

    wrapper.style.transform = `translateX(${value * -100}%)`;
  }, []);

  const handleMoveSlides = (
    callback: () => void,
    currentCarouselData: ReturnType<typeof getCarouselData>
  ) => {
    if (currentCarouselData.isTransition) {
      return;
    }

    callback();

    setTransitionToWrapper();

    setTransformValueForWrapper(currentCarouselData.index);

    // eslint-disable-next-line no-param-reassign
    currentCarouselData.isTransition = true;
  };

  const handleNextClick = () => {
    const currentCarouselData = getCarouselData();

    const handleMoveSlidesCallback = () => {
      currentCarouselData.index += 1;
    };

    handleMoveSlides(handleMoveSlidesCallback, currentCarouselData);
  };
  const handlePreviousClick = () => {
    const currentCarouselData = getCarouselData();

    const handleMoveSlidesCallback = () => {
      currentCarouselData.index -= 1;
    };

    handleMoveSlides(handleMoveSlidesCallback, currentCarouselData);
  };

  const handleTransitionEnd = useCallback(() => {
    const wrapper = getWrapper();
    const currentCarouselData = getCarouselData();

    currentCarouselData.isTransition = false;

    if (
      currentCarouselData.index !== 0 &&
      currentCarouselData.index !== preparedSlides.length - 1
    ) {
      return;
    }

    if (currentCarouselData.index === 0) {
      currentCarouselData.index = preparedSlides.length - 2;
    }

    if (currentCarouselData.index === preparedSlides.length - 1) {
      currentCarouselData.index = 1;
    }

    wrapper.style.transition = `unset`;

    setTransformValueForWrapper(currentCarouselData.index);
  }, [preparedSlides.length, setTransformValueForWrapper]);

  useEffect(() => {
    const wrapper = getWrapper();

    if (wrapper && preparedSlides.length > 1) {
      setTransformValueForWrapper();
      wrapper.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (wrapper && preparedSlides.length > 1) {
        wrapper.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [handleTransitionEnd, preparedSlides, setTransformValueForWrapper]);

  return {
    slides: preparedSlides,
    wrapperRef,
    handleNextClick,
    handlePreviousClick,
  };
};
