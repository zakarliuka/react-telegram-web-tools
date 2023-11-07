'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useClose = () => {
  const webApp = useWebApp();

  return useCallback(() => webApp?.close?.(), [webApp]);
};

export default useClose;
