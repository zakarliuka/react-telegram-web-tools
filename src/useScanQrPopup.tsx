'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useScanQrPopup = () => {
  const webApp = useWebApp();

  const showScanQrPopup = useCallback(
    (
      params: TelegramWebApp.ScanQrPopupParams = {},
      callback?: (text: string) => void,
    ) => webApp?.showScanQrPopup?.(params, callback),
    [webApp],
  );

  const closeScanQrPopup = useCallback(
    () => webApp?.closeScanQrPopup?.(),
    [webApp],
  );

  return [showScanQrPopup, closeScanQrPopup] as const;
};

export default useScanQrPopup;
