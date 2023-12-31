'use client';

import { WebApp } from '@twa-dev/types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useSwitchInlineQuery = () => {
  const webApp = useWebApp();

  return useCallback<WebApp['switchInlineQuery']>(
    (...args) => webApp?.switchInlineQuery?.(...args),
    [webApp],
  );
};

export default useSwitchInlineQuery;
