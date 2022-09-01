type ApiPathNamesType = {
  LIST: `/list?page=${number | string}`;
  LIST_DETAILS: `/list/$${number | string}$`;
};

export const API_PATH_NAMES: ApiPathNamesType = {
  LIST: '/list?page=$1$',
  LIST_DETAILS: '/list/$id$',
};

export const EMPTY_PHOTO = {
  name: 'empty image',
  src: 'https://www.ochch.org/wp-content/themes/mast/images/empty-photo.jpg',
  id: new Date().getDate(),
};

export const PRELOADER_STYLES_KEY = {
  DEFAULT: 'DEFAULT',
  FIXED: 'FIXED',
} as const;

export const FILTERS_CONDITION_OPTIONS = {
  AND: {
    label: 'And',
    value: '&&',
  },
  OR: {
    label: 'Or',
    value: '||',
  },
};

export const FILTER_NAMES = {
  NAME: 'name',
  SIZE: 'size',
  DATE: 'date',
  DESCRIPTION: 'description',
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
};
