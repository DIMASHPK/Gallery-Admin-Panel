import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';
import {
  ToolsFiltersFormType,
  ToolsFormChipsListType,
  ToolsFormCommonType,
  ToolsSortingFormType,
} from '~/components/pages/List/types';

export const handleSortTransform = (sorting: ToolsSortingFormType) => {
  const { value, order } = sorting;

  return value.length && order.length
    ? {
        label: `sort ${value}: ${order}`,
        type: TOOLS_FORM_VALUES_KEYS.SORT,
      }
    : null;
};

export const handleFilterTransform = (filters: ToolsFiltersFormType[]) => {
  const handleMap = (item: ToolsFiltersFormType) => {
    const { value: itemValue, name } = item;

    return {
      label: `filter ${name}: ${itemValue}`,
      type: TOOLS_FORM_VALUES_KEYS.FILTER,
      filterValue: itemValue,
    };
  };

  return filters.map(handleMap);
};

export const handleFilterConditionTransform = (filtersCondition: string) => {
  if (filtersCondition.length) {
    return {
      label: `condition: ${filtersCondition}`,
      type: TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION,
    };
  }

  return null;
};

export const getToolsChipList = (values: ToolsFormCommonType) => {
  const { filtersCondition, filters, sorting } = values;

  const transformedSortValues = handleSortTransform(sorting);
  const transformedFilterValues = handleFilterTransform(filters);
  const transformedFilterConditionValue =
    handleFilterConditionTransform(filtersCondition);

  const resultArray: ToolsFormChipsListType[] = [...transformedFilterValues];

  if (transformedFilterConditionValue) {
    resultArray.push(transformedFilterConditionValue);
  }

  if (transformedSortValues) {
    resultArray.push(transformedSortValues);
  }

  return resultArray;
};
