'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useShowConfirm = () => {
  const webApp = useWebApp();

  return useCallback(
    (message: string) => {
      return new Promise((resolve, reject) => {
        try {
          webApp?.showConfirm(message, resolve);
        } catch (e) {
          reject(e);
        }
      });
    },
    [webApp],
  );
};

export default useShowConfirm;
