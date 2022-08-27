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

export const FILTERS = {
  NAME: {
    NAME: 'name',
    TYPE: 'text',
  },
  SIZE: {
    NAME: 'size',
    TYPE: 'text',
  },
  DATE: {
    NAME: 'date',
    TYPE: 'range',
  },
  DESCRIPTION: {
    NAME: 'description',
    type: 'text',
  },
  CONDITION: {
    NAME: 'condition',
    type: 'select',
  },
};
