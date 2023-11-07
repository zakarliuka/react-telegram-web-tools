'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useWaInfo = () => {
  const webApp = useWebApp();

  const isVersionAtLeast = useCallback(
    (version: string) => webApp?.isVersionAtLeast(version),
    [webApp],
  );

  return {
    isVersionAtLeast,
    version: webApp?.version || null,
    platform: webApp?.platform || null,
  };
};

export default useWaInfo;
