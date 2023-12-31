'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useShowAlert = () => {
  const webApp = useWebApp();

  return useCallback(
    (message: string) => {
      return new Promise<void>((resolve, reject) => {
        try {
          webApp?.showAlert(message, resolve);
        } catch (e) {
          reject(e);
        }
      });
    },
    [webApp],
  );
};

export default useShowAlert;
