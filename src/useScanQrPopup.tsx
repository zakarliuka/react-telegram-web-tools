'use client';

import { WebApp } from '@twa-dev/types';

import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useScanQrPopup = () => {
  const webApp = useWebApp();

  const showScanQrPopup = useCallback<WebApp['showScanQrPopup']>(
    (params = {}, callback) => webApp?.showScanQrPopup?.(params, callback),
    [webApp],
  );

  const closeScanQrPopup = useCallback(
    () => webApp?.closeScanQrPopup?.(),
    [webApp],
  );

  return [showScanQrPopup, closeScanQrPopup] as const;
};

export default useScanQrPopup;
