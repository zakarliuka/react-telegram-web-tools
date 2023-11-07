'use client';

import React from 'react';
import { getWebApp, webAppContext } from './context';

const WebAppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const webApp = getWebApp();
  return (
    <webAppContext.Provider value={webApp}>{children}</webAppContext.Provider>
  );
};

export default WebAppProvider;
