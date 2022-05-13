/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosPromise, Method } from 'axios';
import { getLocalStorageItem, STORAGE_ITEM } from 'utils';

export enum METHODS {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum API {
  SUB = 'subscription-api',
  CLIENT = 'client',
}

interface ICallApi<T> {
  method: Method;
  url: string;
  data?: T;
  api?: API;
  headers?: { [key in string]?: string };
  baseURL?: string;
  privateCall?: boolean;
}

export const callApi: <T>(props: ICallApi<T>) => AxiosPromise = ({
  method,
  url,
  headers,
  baseURL,
  data,
  privateCall,
}) => {
  const token = getLocalStorageItem(STORAGE_ITEM.TOKEN);

  return axios({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: privateCall ? `Bearer ${token}` : '',
      ...headers,
    },
    data,
    baseURL,
  });
};
