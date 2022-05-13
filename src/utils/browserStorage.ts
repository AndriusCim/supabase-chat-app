type TStorageGetter = (itemName: STORAGE_ITEM) => string | null;
type TStorageRemover = (itemName: STORAGE_ITEM) => void;
type TStorageSetter = (itemName: STORAGE_ITEM, itemValue: string) => void;

export const getSessionStorageItem: TStorageGetter = (itemName) =>
  sessionStorage.getItem(itemName) ?? '';

export const removeSessionStorageItem: TStorageRemover = (itemName) =>
  sessionStorage.removeItem(itemName);

export const setSessionStorageItem: TStorageSetter = (itemName, itemValue) =>
  sessionStorage.setItem(itemName, itemValue);

export const getLocalStorageItem: TStorageGetter = (itemName) =>
  localStorage.getItem(itemName) ?? '';

export const removeLocalStorageItem: TStorageRemover = (itemName) =>
  localStorage.removeItem(itemName);

export const setLocalStorageItem: TStorageSetter = (itemName, itemValue) =>
  localStorage.setItem(itemName, itemValue);

export enum STORAGE_ITEM {
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh-token',
}
