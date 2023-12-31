'use client';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

import { WebApp } from '@twa-dev/types';
const useOpenLink = () => {
  const webApp = useWebApp();

  const openLink = useCallback<WebApp['openLink']>(
    (...args) => webApp?.openLink?.(...args),
    [webApp],
  );
  const openTelegramLink = useCallback(
    (url: string) => webApp?.openTelegramLink?.(url),
    [webApp],
  );

  return {
    openLink,
    openTelegramLink,
  };
};

export default useOpenLink;
