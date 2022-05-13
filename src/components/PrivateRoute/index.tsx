import { LOGIN, MAIN } from 'config/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { AppState } from '../../store';

const PrivateRoute: React.FC = () => {
  const { authenticated } = useSelector((state: AppState) => state.auth);

  return (
    <Route
      path="/"
      render={() =>
        authenticated ? <Redirect to={MAIN} /> : <Redirect to={LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
