import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { listDataAtom } from '~/recoil/atoms';

export default () => {
  const { id } = useParams();

  const listData = useRecoilValue(listDataAtom);

  const firstListDataItem = listData ? listData[0] : null;
  const lastListDataItem = listData ? listData[listData.length - 1] : null;

  const isLeftButtonDisabled =
    !listData || firstListDataItem?.id === parseInt(id as string, 10);

  const isRightButtonDisabled =
    !listData || lastListDataItem?.id === parseInt(id as string, 10);

  return { isLeftButtonDisabled, isRightButtonDisabled };
};
