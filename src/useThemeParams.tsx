'use client';

import { WebApp } from '@twa-dev/types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useThemeParams = () => {
  const webApp = useWebApp();

  const setHeaderColor = useCallback<WebApp['setHeaderColor']>(
    color => webApp?.setHeaderColor(color),
    [webApp],
  );
  const setBackgroundColor = useCallback<WebApp['setBackgroundColor']>(
    color => webApp?.setBackgroundColor(color),
    [webApp],
  );

  return {
    theme: webApp?.themeParams || null,
    colorScheme: webApp?.colorScheme || null,
    setHeaderColor,
    setBackgroundColor,
  };
};

export default useThemeParams;
