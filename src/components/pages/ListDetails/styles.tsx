import { css } from '@emotion/react';

export default () => ({
  listDetailsContainer: css({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }),
  listDetailsCard: css({
    maxWidth: 600,
  }),
  listDetailsCardActions: css({
    justifyContent: 'space-between',
  }),
  listDetailsCardActionIcon: css({
    fontSize: 16,
  }),
});
