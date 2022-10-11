import { GetOptionalType } from '~/utils/typeHelpers';
import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';

export type ToolsSortingFormType = {
  order: string;
  value: string;
};

export type ToolsFiltersFormType = {
  name: string;
  value: string;
};

export type ToolsFormCommonType = {
  sorting: ToolsSortingFormType;
  filters: ToolsFiltersFormType[];
  filtersCondition: string;
};

export type ToolsFormChipsListType = {
  label: string;
  type: GetOptionalType<typeof TOOLS_FORM_VALUES_KEYS>;
  filterValue?: string;
};

export type ToolsFormType = {
  changeableValues: ToolsFormCommonType;
  currentValues: ToolsFormCommonType;
  chipsList: ToolsFormChipsListType[];
};
