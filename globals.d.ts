import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp.WebApp;
    };
  }
}
