'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

type SwitchInlineQuery = Parameters<TelegramWebApp.WebApp['switchInlineQuery']>;

const useSwitchInlineQuery = () => {
  const webApp = useWebApp();

  return useCallback(
    (...args: SwitchInlineQuery) => webApp?.switchInlineQuery?.(...args),
    [webApp],
  );
};

export default useSwitchInlineQuery;
