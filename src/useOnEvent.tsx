'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { useEffect } from 'react';
import useWebApp from './useWebApp';

type EventDataMap = {
  themeChanged: void;
  viewportChanged: { isStateStable: boolean };
  mainButtonClicked: void;
  backButtonClicked: void;
  settingsButtonClicked: void;
  invoiceClosed: TelegramWebApp.PaymentStatus;
  popupClosed: { button_id: string | null };
  qrTextReceived: { data: string };
  clipboardTextReceived: { data: string | null };
  writeAccessRequested: { status: 'allowed' | 'cancelled' };
  contactRequested: { status: 'sent' | 'cancelled' };
};

const useOnEvent = <EventType extends keyof EventDataMap>(
  event: EventType,
  cb: (val: EventDataMap[EventType]) => void,
) => {
  const webApp = useWebApp();

  useEffect(() => {
    webApp?.onEvent(event, cb);

    return () => {
      webApp?.offEvent(event, cb);
    };
  }, [webApp, event, cb]);
};

export default useOnEvent;
