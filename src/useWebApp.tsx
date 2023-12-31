'use client';

import { useContext } from 'react';
import { webAppContext } from './context';

const useWebApp = () => {
  const context = useContext(webAppContext);
  return context;
};

export default useWebApp;
