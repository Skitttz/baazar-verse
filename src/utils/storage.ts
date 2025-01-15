/* eslint-disable @typescript-eslint/no-explicit-any */
import { decoded, encoded } from "./base64";

interface StorageManager {
  set: (key: string, data: any) => void;
  get: (key: string) => any;
  delete: (key: string) => void;
  clear: () => void;
}

const createStorageManager = (storage: Storage): StorageManager => ({
  set: (key, data) => {
    storage.setItem(key, encoded(JSON.stringify(data)));
  },
  get: (key) => {
    const item = storage.getItem(key);
    return item ? decoded(item) : null;
  },
  delete: (key) => {
    storage.removeItem(key);
  },
  clear: () => {
    storage.clear();
  },
});

export const LocalStorageManager: StorageManager = createStorageManager(localStorage);
export const SessionStorageManager: StorageManager = createStorageManager(sessionStorage);
