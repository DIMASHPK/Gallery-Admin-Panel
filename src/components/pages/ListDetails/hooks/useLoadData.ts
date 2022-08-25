import { useParams } from 'react-router-dom';
import { useQuery } from '~/hooks';
import { ListDetailsResponseType } from '~/types';
import { replacePathVariables } from '~/utils/pathReplacer';
import { API_PATH_NAMES } from '~/data/constants';
import { useSetRecoilState } from 'recoil';
import {
  detailsHasNextAtom,
  detailsHasPreviousAtom,
  listDetailsDataAtom,
} from '~/recoil/atoms';
import { useEffect } from 'react';

export default () => {
  const { id } = useParams();

  const { loading, data } = useQuery<ListDetailsResponseType>({
    path: replacePathVariables(API_PATH_NAMES.LIST_DETAILS, {
      $id$: id as string,
    }) as typeof API_PATH_NAMES.LIST_DETAILS,
  });

  const setListDetailsData = useSetRecoilState(listDetailsDataAtom);
  const setDetailsHasPrevious = useSetRecoilState(detailsHasPreviousAtom);
  const setDetailsHasNext = useSetRecoilState(detailsHasNextAtom);

  useEffect(() => {
    if (data) {
      setListDetailsData(data.itemData);
      setDetailsHasPrevious(data.hasPrevious);
      setDetailsHasNext(data.hasNext);
    }
  }, [data, setDetailsHasNext, setDetailsHasPrevious, setListDetailsData]);

  return { loading, listDetailsData: data?.itemData };
};
