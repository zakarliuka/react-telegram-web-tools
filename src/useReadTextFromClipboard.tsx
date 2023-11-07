'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useReadTextFromClipboard = () => {
  const webApp = useWebApp();

  return useCallback(
    () => new Promise(resolve => webApp?.readTextFromClipboard?.(resolve)),
    [webApp],
  );
};

export default useReadTextFromClipboard;
