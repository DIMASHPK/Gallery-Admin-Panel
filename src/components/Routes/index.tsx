import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { ROUTES } from '~/data/routes';
import List from '~/components/pages/List';

const {
  LIST: { PATH: LIST_PATH },
  TABLE: { PATH: TABLE_PATH },
} = ROUTES;

const Routes: React.FC = () => (
  <Switch>
    <Route path={LIST_PATH} element={<List />} />
    <Route path={TABLE_PATH} />
  </Switch>
);

export default Routes;
