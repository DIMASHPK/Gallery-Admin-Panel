import { ToolsFormType } from '~/components/pages/List/types';

type helpersArgsType = { filterValue?: string } & Pick<
  ToolsFormType,
  'changeableValues' | 'currentValues'
>;

export const handleFilterDelete = ({
  changeableValues,
  currentValues,
  filterValue,
}: helpersArgsType) => {
  const filters = currentValues.filters.filter(
    ({ value }) => value !== filterValue
  );

  const filtersCondition =
    filters.length > 1 ? changeableValues.filtersCondition : '';

  return {
    changeableValues: {
      ...changeableValues,
      filtersCondition,
      filters: [...filters],
    },
    currentValues: {
      ...currentValues,
      filtersCondition,
      filters: [...filters],
    },
  };
};

export const handleSortDelete = ({
  changeableValues,
  currentValues,
}: helpersArgsType) => ({
  changeableValues: {
    ...changeableValues,
    sorting: { order: '', value: '' },
  },
  currentValues: { ...currentValues, sorting: { order: '', value: '' } },
});

export const handleConditionDelete = ({
  changeableValues,
  currentValues,
}: helpersArgsType) => ({
  changeableValues: { ...changeableValues, filtersCondition: '' },
  currentValues: { ...currentValues, filtersCondition: '' },
});
