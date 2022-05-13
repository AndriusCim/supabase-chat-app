import { AxiosError } from 'axios';
import { RootStateOrAny } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import {
  AuthActionTypes,
  SET_ERROR,
  SET_IS_AUTHENTICATED,
  SET_LOADING,
  SET_SUCCESS,
  SET_USER,
  SignInData,
  SignUpData,
  SIGN_OUT,
} from 'store/types';
import {
  callApi,
  METHODS,
  removeLocalStorageItem,
  setLocalStorageItem,
  STORAGE_ITEM,
} from 'utils';

interface ILoginResponseData {
  refreshToken: string;
  idToken: string;
  email: string;
}

export const login =
  (
    data: SignInData
  ): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> =>
  async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_ERROR, payload: '' });
    callApi({
      method: METHODS.POST,
      url: '',
      data,
    })
      .then((response: { data: ILoginResponseData }) => {
        setLocalStorageItem(
          STORAGE_ITEM.REFRESH_TOKEN,
          response.data.refreshToken
        );
        dispatch({
          type: SET_USER,
          payload: { email: response.data.email, id: response.data.idToken },
        });
      })
      .catch((e: AxiosError) => {
        dispatch({ type: SET_ERROR, payload: `${e.response?.status}` });
      })
      .finally(() => {
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

export const register =
  (
    data: SignUpData
  ): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> =>
  async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_ERROR, payload: '' });
    callApi({
      method: METHODS.POST,
      url: '',
      data,
    })
      .then((response: { data: ILoginResponseData }) => {
        setLocalStorageItem(
          STORAGE_ITEM.REFRESH_TOKEN,
          response.data.refreshToken
        );
        dispatch({
          type: SET_USER,
          payload: { email: response.data.email, id: response.data.idToken },
        });
      })
      .catch((e: AxiosError) => {
        dispatch({ type: SET_ERROR, payload: `${e.response?.status}` });
      })
      .finally(() => {
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

interface IPasswordResetData {
  email: string;
}

export const getPasswordReset =
  (
    data: IPasswordResetData
  ): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> =>
  async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    callApi({
      method: METHODS.POST,
      url: '',
      data: { ...data, requestType: 'PASSWORD_RESET' },
    }).finally(() => {
      dispatch({ type: SET_LOADING, payload: false });
    });
  };

export const setLoading = (
  value: boolean
): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

export const signout = (): ThunkAction<
  void,
  RootStateOrAny,
  null,
  AuthActionTypes
> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      removeLocalStorageItem(STORAGE_ITEM.REFRESH_TOKEN);
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      dispatch(setLoading(false));
    }
  };
};

export const setError = (
  msg: string
): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

export const setIsAuthenticated = (
  isAuthenticated: boolean
): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_AUTHENTICATED,
      payload: isAuthenticated,
    });
  };
};

export const setSuccess = (
  msg: string
): ThunkAction<void, RootStateOrAny, null, AuthActionTypes> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};
