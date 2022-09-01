import { useFormikContext } from 'formik';
import { SelectOptionType, ToolsFormType } from '~/types';
import { useMemo } from 'react';
import { FILTERS } from '~/data/constants';
import { toCapitalize } from '~/utils/helpers';

export default (index: number) => {
  const { values } = useFormikContext<ToolsFormType>();

  const currentFilters = values.changeableValues.filters;

  return useMemo(() => {
    const filtersArray = Object.values(FILTERS);

    const { name: currentFilterName } = currentFilters[index];

    type filterItem = typeof filtersArray[number];

    const initAcc = [] as SelectOptionType[];
    const handleReduce = (acc: SelectOptionType[], item: filterItem) => {
      const { NAME } = item;

      if (
        !currentFilters.find(({ name }) => name === NAME) ||
        currentFilterName === NAME
      ) {
        acc.push({ value: NAME, label: toCapitalize(NAME) });
      }

      return acc;
    };

    return filtersArray.reduce(handleReduce, initAcc);
  }, [currentFilters]);
};
