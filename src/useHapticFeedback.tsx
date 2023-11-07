'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useHapticFeedback = () => {
  const webApp = useWebApp();
  const HapticFeedback = webApp?.HapticFeedback;

  const impactOccurred = useCallback(
    (...args: Parameters<TelegramWebApp.HapticFeedback['impactOccurred']>) =>
      HapticFeedback?.impactOccurred(...args),
    [HapticFeedback],
  );
  const notificationOccurred = useCallback(
    (
      ...args: Parameters<TelegramWebApp.HapticFeedback['notificationOccurred']>
    ) => HapticFeedback?.notificationOccurred(...args),
    [HapticFeedback],
  );
  const selectionChanged = useCallback(
    () => HapticFeedback?.selectionChanged(),
    [HapticFeedback],
  );

  return [impactOccurred, notificationOccurred, selectionChanged] as const;
};

export default useHapticFeedback;
