'use client';

import WebApp from '@twa-dev/sdk';
import { WebApp as WebAppTypes } from '@twa-dev/types';
import { createContext } from 'react';

export const webAppContext = createContext<WebAppTypes | null>(WebApp);
