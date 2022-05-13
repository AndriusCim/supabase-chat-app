export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  authenticated: boolean;
  error: string | null;
  loading: boolean;
  needVerification: boolean;
  success: boolean;
}

export interface UserDataPayload {
  idToken: string;
}

export interface UserDataResponse {
  users: User[];
}

export interface SignInData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface SignUpData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

interface NeedVerificationAction {
  type: typeof NEED_VERIFICATION;
}

interface SetSuccessAction {
  type: typeof SET_SUCCESS;
}

interface SetIsAuthenticatedAction {
  type: typeof SET_IS_AUTHENTICATED;
  payload: boolean;
}

export type AuthActionTypes =
  | SetUserAction
  | SetLoadingAction
  | SetErrorAction
  | SignOutAction
  | NeedVerificationAction
  | SetIsAuthenticatedAction
  | SetSuccessAction;
