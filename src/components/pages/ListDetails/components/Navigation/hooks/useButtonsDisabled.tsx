import { useRecoilValue } from 'recoil';
import { detailsHasNextAtom, detailsHasPreviousAtom } from '~/recoil/atoms';

export default () => {
  const detailsHasPrevious = useRecoilValue(detailsHasPreviousAtom);
  const detailsHasNext = useRecoilValue(detailsHasNextAtom);

  const isLeftButtonDisabled = !detailsHasPrevious;

  const isRightButtonDisabled = !detailsHasNext;

  return { isLeftButtonDisabled, isRightButtonDisabled };
};
