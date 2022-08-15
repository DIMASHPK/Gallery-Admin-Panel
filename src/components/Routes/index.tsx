import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { ROUTES } from '~/data/routes';
import List from '~/components/pages/List';
import ListDetails from '~/components/pages/ListDetails';

const {
  LIST: { PATH: LIST_PATH },
  TABLE: { PATH: TABLE_PATH },
  LIST_DETAILS: { PATH: LIST_DETAILS_PATH },
} = ROUTES;

const Routes: React.FC = () => (
  <Switch>
    <Route path={LIST_PATH} element={<List />} />
    <Route path={LIST_DETAILS_PATH} element={<ListDetails />} />
    <Route path={TABLE_PATH} />
  </Switch>
);

export default Routes;
