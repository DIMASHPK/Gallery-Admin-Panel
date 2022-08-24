import { useCallback, useEffect, useRef, useState } from 'react';
import { api } from '~/api';
import { ApiPathNamesType } from '~/types';
import useEffectOnce from './useEffectOnce';
import usePrevious from './usePrevious';

type useQueryArgsType = {
  skip?: boolean;
  path: ApiPathNamesType;
};

export default <T>(args: useQueryArgsType) => {
  const { skip = false, path } = args;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef({ isMounted: false });

  const handleQuery = useCallback(async () => {
    try {
      setLoading(true);

      const { data: responseData } = await api.get<T>({ path });

      setLoading(false);

      setData(responseData);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }, [path]);

  useEffectOnce(() => {
    if (skip) {
      return;
    }

    (async () => {
      await handleQuery();
      isMountedRef.current.isMounted = true;
    })();
  });

  const previousSkip = usePrevious(skip);

  useEffect(() => {
    if (skip || !isMountedRef?.current?.isMounted) {
      return;
    }

    (async () => {
      await handleQuery();
    })();
  }, [handleQuery, previousSkip, skip]);

  return {
    data,
    loading,
    error,
    queryData: handleQuery,
  };
};
