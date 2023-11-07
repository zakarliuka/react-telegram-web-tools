'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useRequestContact = () => {
  const webApp = useWebApp();

  return useCallback(
    () => new Promise(resolve => webApp?.requestContact?.(resolve)),
    [webApp],
  );
};

export default useRequestContact;
