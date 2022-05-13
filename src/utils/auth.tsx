import React from 'react';
import { Redirect } from 'react-router';
import { STORAGE_ITEM, getLocalStorageItem } from 'utils';
import { LOGIN } from 'config/routes';

export const sessionExists = (): boolean =>
  !!getLocalStorageItem(STORAGE_ITEM.REFRESH_TOKEN);

export default (Component: React.ElementType): React.FC => {
  const AuthComponent: React.FC = ({ ...props }) => {
    if (sessionExists()) {
      return <Component {...props} />;
    }
    return <Redirect to={LOGIN} />;
  };

  return AuthComponent;
};
