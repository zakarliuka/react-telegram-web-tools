'use client';

import { TelegramWebApp } from '@zakarliuka/tg-webapp-types';
import { createContext } from 'react';

export const getWebApp = () =>
  typeof window !== 'undefined' && 'Telegram' in window
    ? Telegram.WebApp
    : null;

export const webAppContext = createContext<TelegramWebApp.WebApp | null>(null);
