import PublicRoute from 'components/PublicRoute';
import NotFound from 'features/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { requireAuth } from 'utils';
import { privateRoutes, publicRoutes } from './routeConfig';

export default (
  <Switch>
    {publicRoutes.map((route, index) => (
      <PublicRoute key={index} {...route} />
    ))}
    {privateRoutes.map(({ path, component, exact }, index) => (
      <Route
        key={index}
        path={path}
        exact={exact}
        component={requireAuth(component)}
      />
    ))}
    <Route exact path="*" component={NotFound} />
  </Switch>
);
