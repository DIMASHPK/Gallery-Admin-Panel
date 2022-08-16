type ApiPathNamesType = {
  LIST: '/list';
  LIST_DETAILS: `/list/:${number | string}`;
};

export const API_PATH_NAMES: ApiPathNamesType = {
  LIST: '/list',
  LIST_DETAILS: '/list/:id',
};

export const EMPTY_PHOTO = {
  name: 'empty image',
  src: 'https://www.ochch.org/wp-content/themes/mast/images/empty-photo.jpg',
  id: new Date().getDate(),
};
