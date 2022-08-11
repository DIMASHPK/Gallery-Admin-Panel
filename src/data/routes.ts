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
  LIST_DETAILS: {
    PATH: '/:id',
    LABEL: 'list details',
    TOP_NAV: false,
  },
} as const;
