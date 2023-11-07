'use client';

import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

const useClosingConfirmation = () => {
  const webApp = useWebApp();
  const [isClosingEnabled, setIsClosingEnabled] = useState(false);

  useEffect(() => {
    if (!webApp) return;
    setIsClosingEnabled(webApp.isClosingConfirmationEnabled);
  }, [webApp, setIsClosingEnabled]);

  const enableClosingConfirmation = useCallback(() => {
    webApp?.enableClosingConfirmation();
    setIsClosingEnabled(true);
  }, [webApp]);

  const disableClosingConfirmation = useCallback(() => {
    webApp?.disableClosingConfirmation();
    setIsClosingEnabled(false);
  }, [webApp]);

  return {
    isClosingConfirmationEnabled: isClosingEnabled,
    enableClosingConfirmation,
    disableClosingConfirmation,
  };
};

export default useClosingConfirmation;
