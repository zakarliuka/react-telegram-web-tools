'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

type OpenLinkArgs = Parameters<TelegramWebApp.WebApp['openLink']>;

const useOpenLink = () => {
  const webApp = useWebApp();

  const openLink = useCallback(
    (...args: OpenLinkArgs) => webApp?.openLink?.(...args),
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
