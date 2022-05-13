import {
  AuthActionTypes,
  AuthState,
  SET_ERROR,
  SET_LOADING,
  NEED_VERIFICATION,
  SET_SUCCESS,
  SET_USER,
  SIGN_OUT,
  SET_IS_AUTHENTICATED,
} from '../types';

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
  authenticated: false,
  needVerification: false,
  success: false,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case NEED_VERIFICATION:
      return {
        ...state,
        needVerification: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
};
