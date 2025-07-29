import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useSecureStorage = () => {
  const webApp = useWebApp();
  const secureStorage = (webApp as any)?.SecureStorage;

  const setItem = useCallback(
    (key: string, value: string) =>
      new Promise<void>((resolve, reject) => {
        if (!secureStorage) {
          reject(new Error('SecureStorage not available'));
          return;
        }
        secureStorage.setItem(key, value, (error: any, success: any) => {
          if (error) {
            reject(new Error(error));
          } else if (success) {
            resolve();
          } else {
            reject(new Error('Failed to set item'));
          }
        });
      }),
    [secureStorage],
  );

  const getItem = useCallback(
    (key: string) =>
      new Promise<string | null>((resolve, reject) => {
        if (!secureStorage) {
          reject(new Error('SecureStorage not available'));
          return;
        }
        secureStorage.getItem(key, (error: any, value: any) => {
          if (error) {
            reject(new Error(error));
          } else {
            resolve(value || null);
          }
        });
      }),
    [secureStorage],
  );

  const removeItem = useCallback(
    (key: string) =>
      new Promise<void>((resolve, reject) => {
        if (!secureStorage) {
          reject(new Error('SecureStorage not available'));
          return;
        }
        secureStorage.removeItem(key, (error: any, success: any) => {
          if (error) {
            reject(new Error(error));
          } else if (success) {
            resolve();
          } else {
            reject(new Error('Failed to remove item'));
          }
        });
      }),
    [secureStorage],
  );

  return {
    setItem,
    getItem,
    removeItem,
    isAvailable: !!secureStorage,
  };
};

export default useSecureStorage;
