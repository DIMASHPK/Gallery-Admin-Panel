import { useFormikContext } from 'formik';
import { ToolsFormType } from '~/components/pages/List/types';

export default () => {
  const { values } = useFormikContext<ToolsFormType>();

  const { filters } = values.currentValues;
  const { value: sortingValue, order: sortingOrder } =
    values.currentValues.sorting;

  const isFilterListOpen = Boolean(filters.length);
  const isSortingListOpen = Boolean(sortingOrder.length && sortingValue.length);

  return {
    isFilterListOpen,
    isSortingListOpen,
  };
};
