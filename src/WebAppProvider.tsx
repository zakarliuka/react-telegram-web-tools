'use client';

import { Telegram, WebApp as WebAppType } from '@twa-dev/types';
import React, { useEffect, useState } from 'react';
import { webAppContext } from './context';

const WebAppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [twa, setTwa] = useState<WebAppType | null>(null);
  useEffect(() => {
    const webapp = (window as unknown as Window & { Telegram: Telegram })
      .Telegram.WebApp;
    setTwa(webapp);
  }, []);

  return (
    <webAppContext.Provider value={twa}>{children}</webAppContext.Provider>
  );
};

export default WebAppProvider;
