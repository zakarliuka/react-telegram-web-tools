'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useOpenInvoice = () => {
  const webApp = useWebApp();

  return useCallback(
    (url: string) => {
      return new Promise((resolve, reject) => {
        try {
          webApp?.openInvoice(url, resolve);
        } catch (e) {
          reject(e);
        }
      });
    },
    [webApp],
  );
};

export default useOpenInvoice;
