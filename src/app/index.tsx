/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { getLocalStorageItem, STORAGE_ITEM } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from 'store/actions/authActions';
import { AppState } from 'store';

export const sessionExists = (): boolean =>
  !!getLocalStorageItem(STORAGE_ITEM.REFRESH_TOKEN);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: AppState) => state.auth.authenticated
  );
  useEffect(() => {
    if (sessionExists()) {
      dispatch(setIsAuthenticated(true));
    }
  }, [isAuthenticated]);

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
