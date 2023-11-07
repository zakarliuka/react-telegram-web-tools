'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useCloudStorage = () => {
  const cloudStorage = useWebApp()?.CloudStorage;

  const getItem = useCallback(
    (key: string) =>
      new Promise<string>((resolve, reject) => {
        cloudStorage?.getItem(key, (error, value) => {
          if (!error) {
            resolve(value);
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );
  const setItem = useCallback(
    (key: string, value: string) =>
      new Promise<void>((resolve, reject) => {
        cloudStorage?.setItem(key, value, (error, state) => {
          if (!error && state) {
            resolve();
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );
  const getItems = useCallback(
    (key: string[]) =>
      new Promise<Record<string, string>>((resolve, reject) => {
        cloudStorage?.getItems(key, (error, value) => {
          if (!error && value) {
            resolve(value);
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );
  const removeItem = useCallback(
    (key: string) =>
      new Promise<void>((resolve, reject) => {
        cloudStorage?.removeItem(key, (error, state) => {
          if (!error && state) {
            resolve();
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );
  const removeItems = useCallback(
    (key: string[]) =>
      new Promise<void>((resolve, reject) => {
        cloudStorage?.removeItems(key, (error, state) => {
          if (!error && state) {
            resolve();
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );
  const getKeys = useCallback(
    () =>
      new Promise<string[]>((resolve, reject) => {
        cloudStorage?.getKeys((error, state) => {
          if (!error && state) {
            resolve(state);
          } else {
            reject(error);
          }
        });
      }),
    [cloudStorage],
  );

  return {
    getItem,
    setItem,
    getItems,
    removeItem,
    removeItems,
    getKeys,
  };
};

export default useCloudStorage;
