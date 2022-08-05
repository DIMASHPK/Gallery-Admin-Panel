export const ROUTES = {
  LIST: {
    PATH: '/',
    LABEL: 'gallery list',
    TOP_NAV: true,
  },
  TABLE: {
    PATH: '/table',
    LABEL: 'table',
    TOP_NAV: true,
  },
  LIST_ITEM: {
    PATH: '/:id',
    LABEL: 'list item',
    TOP_NAV: false,
  },
} as const;
