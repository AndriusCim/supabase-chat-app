import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { MAIN } from 'config/routes';
import { useSelector } from 'react-redux';
import { AppState } from 'store';

interface IPublicRoute {
  component: React.ElementType;
  exact?: boolean;
  path: string;
}

const PublicRoute: React.FC<IPublicRoute> = ({
  component: Component,
  ...rest
}) => {
  const { authenticated } = useSelector((state: AppState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Redirect to={MAIN} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
