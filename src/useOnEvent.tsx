'use client';
import { WebApp } from '@twa-dev/types';
import { useEffect } from 'react';
import useWebApp from './useWebApp';

const useOnEvent: WebApp['onEvent'] = (event, cb) => {
  const webApp = useWebApp();

  useEffect(() => {
    webApp?.onEvent(event, cb);

    return () => {
      webApp?.offEvent(event, cb);
    };
  }, [webApp, event, cb]);
};

export default useOnEvent;
