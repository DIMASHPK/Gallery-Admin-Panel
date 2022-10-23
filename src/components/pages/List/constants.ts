export const TOOLS_FORM_VALUES_KEYS = {
  SORT: 'sorting',
  FILTER: 'filters',
  FILTER_CONDITION: 'filtersCondition',
} as const;

export const FILTERS_CONDITION_OPTIONS = {
  AND: {
    label: 'And',
    value: 'and',
  },
  OR: {
    label: 'Or',
    value: 'or',
  },
};

export const FILTER_NAMES = {
  NAME: 'name',
  SIZE: 'size',
  DATE: 'date',
  DESCRIPTION: 'description',
  ID: 'id',
} as const;

export const FILTERS = {
  [FILTER_NAMES.NAME]: {
    NAME: FILTER_NAMES.NAME,
  },
  [FILTER_NAMES.SIZE]: {
    NAME: FILTER_NAMES.SIZE,
  },
  [FILTER_NAMES.DATE]: {
    NAME: FILTER_NAMES.DATE,
  },
  [FILTER_NAMES.DESCRIPTION]: {
    NAME: FILTER_NAMES.DESCRIPTION,
  },
  [FILTER_NAMES.ID]: {
    NAME: FILTER_NAMES.ID,
  },
};

export const SORT_OPTIONS = {
  DESCENDING: 'descending',
  ASCENDING: 'ascending',
};
