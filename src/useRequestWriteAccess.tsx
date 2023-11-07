'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useRequestWriteAccess = () => {
  const webApp = useWebApp();

  return useCallback(
    () => new Promise(resolve => webApp?.requestWriteAccess?.(resolve)),
    [webApp],
  );
};

export default useRequestWriteAccess;
