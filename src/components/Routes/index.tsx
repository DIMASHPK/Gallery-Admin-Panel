import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '~/data/routes';
import List from '~/components/pages/List';
import ListDetails from '~/components/pages/ListDetails';
import AnimatedWrapper from './AnimatedWrapper';

const {
  LIST: { PATH: LIST_PATH },
  TABLE: { PATH: TABLE_PATH },
  LIST_DETAILS: { PATH: LIST_DETAILS_PATH },
} = ROUTES;

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatedWrapper>
      <Switch location={location}>
        <Route path={LIST_PATH} element={<List />} />
        <Route path={LIST_DETAILS_PATH} element={<ListDetails />} />
        <Route path={TABLE_PATH} />
      </Switch>
    </AnimatedWrapper>
  );
};

export default Routes;
