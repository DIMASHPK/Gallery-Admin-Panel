import { useIntersectionObserver, useQuery } from '~/hooks';
import { ListResponseType } from '~/types';
import { API_PATH_NAMES } from '~/data/constants';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { listDataAtom } from '~/recoil/atoms';
import { replacePathVariables } from '~/utils/pathReplacer';

export default () => {
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  const listEndpoint = replacePathVariables(API_PATH_NAMES.LIST, {
    $1$: page,
  }) as typeof API_PATH_NAMES.LIST;

  const { data, loading } = useQuery<ListResponseType>({
    path: listEndpoint,
  });

  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const [listData, setListData] = useRecoilState(listDataAtom);

  const observerEntry = useIntersectionObserver({ current: ref });

  useEffect(() => {
    if (observerEntry?.isIntersecting && !isEnd) {
      setPage(prev => prev + 1);
    }
  }, [isEnd, observerEntry]);

  useEffect(() => {
    if (data) {
      setIsEnd(data.isEnd);
      setListData(prev => [...(prev || []), ...data.data]);
    }
  }, [data, setListData]);

  return { loading, listData, setRef, isEnd };
};
