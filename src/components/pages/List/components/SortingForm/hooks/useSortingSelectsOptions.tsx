import { SelectOptionType } from '~/types';
import { toCapitalize } from '~/utils/helpers';
import { useMemo } from 'react';
import { FILTERS, SORT_OPTIONS } from '~/components/pages/List/constants';

export default () =>
  useMemo(() => {
    const handleMap = (value: string): SelectOptionType => ({
      value,
      label: toCapitalize(value),
    });

    const sortingOrderOptions = Object.values(SORT_OPTIONS).map(handleMap);
    const sortingValueOptions = Object.keys(FILTERS).map(handleMap);

    return { sortingOrderOptions, sortingValueOptions };
  }, []);
