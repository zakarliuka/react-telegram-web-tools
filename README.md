# React Telegram WebApp Tools

A comprehensive React library providing components and hooks for building Telegram Mini Apps with ease. Built with TypeScript and fully compatible with the latest [@twa-dev/sdk](https://github.com/twa-dev/SDK) v8.0.2+.

## Features

✨ **Complete Telegram WebApp API Coverage** - All modern Telegram WebApp features supported  
🎯 **TypeScript First** - Full type safety and excellent developer experience  
⚡ **Zero Configuration** - Works out of the box with sensible defaults  
🎨 **Modern React Patterns** - Hooks-based API with React 18+ support  
📱 **Next.js Ready** - SSR-compatible with 'use client' directives  
🔐 **Secure Storage** - Built-in encrypted storage for sensitive data  
📊 **Motion Sensors** - Accelerometer, gyroscope, and device orientation support  
🎭 **Theme Integration** - Automatic Telegram theme synchronization  

## Installation

```bash
npm install @zakarliuka/react-telegram-web-tools
```

**Peer Dependencies:**
- React 18.3.1+
- @twa-dev/sdk 8.0.2+

## Quick Start

### 1. Setup WebApp Provider

```tsx
import { WebAppProvider } from '@zakarliuka/react-telegram-web-tools';

function App() {
  return (
    <WebAppProvider>
      {/* Your Telegram Mini App components */}
    </WebAppProvider>
  );
}
```

### 2. Next.js Setup

```tsx
'use client';

import dynamic from 'next/dynamic';

export const WebAppProvider = dynamic(
  () => import('@zakarliuka/react-telegram-web-tools').then(v => v.WebAppProvider),
  { ssr: false }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WebAppProvider>
      {children}
    </WebAppProvider>
  );
}
```

### 3. Using Components and Hooks

```tsx
import {
  MainButton,
  SecondaryButton,
  BackButton,
  useShowPopup,
  useShowConfirm,
  useHapticFeedback,
  useThemeParams
} from '@zakarliuka/react-telegram-web-tools';

export function MyComponent() {
  const showPopup = useShowPopup();
  const showConfirm = useShowConfirm();
  const [impactOccurred] = useHapticFeedback();
  const { theme } = useThemeParams();

  const handleSubmit = async () => {
    impactOccurred('medium');
    
    const result = await showPopup({
      title: "Success!",
      message: "Your action was completed",
      buttons: [{ text: "OK", type: "ok" }]
    });
  };

  const handleBack = async () => {
    const confirmed = await showConfirm({
      message: "Are you sure you want to go back?"
    });
    
    if (confirmed) {
      // Handle back navigation
    }
  };

  return (
    <div style={{ backgroundColor: theme?.bg_color }}>
      <BackButton onClick={handleBack} />
      
      <MainButton
        text="Submit"
        onClick={handleSubmit}
        color={theme?.button_color}
        textColor={theme?.button_text_color}
      />
      
      <SecondaryButton
        text="Cancel"
        onClick={handleBack}
      />
    </div>
  );
}
```

## Components

### UI Components
- **`WebAppProvider`** - Root provider for Telegram WebApp context
- **`MainButton`** - Primary bottom button with progress states
- **`SecondaryButton`** - Secondary bottom button (new in v8.0+)
- **`BackButton`** - Navigation back button

## Hooks

### Core Hooks
- **`useWebApp`** - Access raw Telegram WebApp instance
- **`useInitData`** - Get initial data and user information
- **`useThemeParams`** - Current theme colors and appearance
- **`useViewport`** - Screen dimensions and expansion state

### UI Control Hooks
- **`useShowPopup`** - Display native popups with custom buttons
- **`useShowAlert`** - Simple alert dialogs
- **`useShowConfirm`** - Confirmation dialogs
- **`useClose`** - Close the Mini App
- **`useExpand`** - Expand to full screen height

### Advanced Features (v8.0+)
- **`useFullscreen`** - Fullscreen mode control
- **`useHeaderColor`** - Customize header color
- **`useBackgroundColor`** - Set app background color
- **`useSecureStorage`** - Encrypted local storage
- **`useShareToStory`** - Share content to Telegram Stories

### Device Sensors
- **`useAccelerometer`** - Device acceleration data
- **`useGyroscope`** - Device rotation data  
- **`useOrientation`** - Device orientation angles

### Cloud & Storage
- **`useCloudStorage`** - Telegram Cloud Storage API
- **`useCloudItem`** - Individual cloud storage items with loading states

### Interaction Hooks
- **`useHapticFeedback`** - Haptic feedback (vibration)
- **`useScanQrPopup`** - QR code scanner
- **`useRequestContact`** - Request user's contact
- **`useRequestWriteAccess`** - Request write access
- **`useReadTextFromClipboard`** - Read clipboard content

### Communication
- **`useSendData`** - Send data to bot
- **`useOpenLink`** - Open external links
- **`useOpenInvoice`** - Open payment invoices
- **`useSwitchInlineQuery`** - Switch to inline query

### Events & Utils
- **`useOnEvent`** - Listen to WebApp events
- **`useClosingConfirmation`** - Handle app closing confirmation
- **`useWaInfo`** - WebApp version and platform info

## Examples

### Motion Sensing
```tsx
import { useAccelerometer, useGyroscope } from '@zakarliuka/react-telegram-web-tools';

function MotionDemo() {
  const { data: accel, startTracking, stopTracking, isTracking } = useAccelerometer();
  const { data: gyro } = useGyroscope();

  return (
    <div>
      <button onClick={() => isTracking ? stopTracking() : startTracking()}>
        {isTracking ? 'Stop' : 'Start'} Motion Tracking
      </button>
      
      {accel && (
        <div>
          Acceleration: X: {accel.x}, Y: {accel.y}, Z: {accel.z}
        </div>
      )}
      
      {gyro && (
        <div>
          Rotation: X: {gyro.x}, Y: {gyro.y}, Z: {gyro.z}
        </div>
      )}
    </div>
  );
}
```

### Secure Storage
```tsx
import { useSecureStorage } from '@zakarliuka/react-telegram-web-tools';

function SecureDataDemo() {
  const { setItem, getItem, removeItem, isAvailable } = useSecureStorage();

  const saveSecret = async () => {
    if (isAvailable) {
      await setItem('user_token', 'secret_value');
    }
  };

  const loadSecret = async () => {
    if (isAvailable) {
      const token = await getItem('user_token');
      console.log('Retrieved:', token);
    }
  };

  return (
    <div>
      <button onClick={saveSecret}>Save Secret</button>
      <button onClick={loadSecret}>Load Secret</button>
    </div>
  );
}
```

### Theme Integration
```tsx
import { useThemeParams } from '@zakarliuka/react-telegram-web-tools';

function ThemedComponent() {
  const { theme, colorScheme, setHeaderColor, setBackgroundColor } = useThemeParams();

  useEffect(() => {
    // Auto-sync with Telegram theme
    if (theme) {
      setHeaderColor(theme.secondary_bg_color);
      setBackgroundColor(theme.bg_color);
    }
  }, [theme]);

  return (
    <div 
      style={{
        backgroundColor: theme?.bg_color,
        color: theme?.text_color,
        borderColor: theme?.hint_color
      }}
    >
      <h1>Current theme: {colorScheme}</h1>
    </div>
  );
}
```

## TypeScript Support

This library is built with TypeScript and provides comprehensive type definitions:

```tsx
import type { 
  WebApp, 
  ThemeParams, 
  InitData,
  PopupParams,
  PopupButton 
} from '@zakarliuka/react-telegram-web-tools';

// All hooks and components are fully typed
const popup: PopupParams = {
  title: "Typed Popup",
  message: "TypeScript ensures type safety",
  buttons: [
    { text: "OK", type: "ok" },
    { text: "Cancel", type: "cancel" }
  ]
};
```

## API Compatibility

- **Telegram Bot API**: 8.0+
- **@twa-dev/sdk**: 8.0.2+
- **React**: 18.3.1+  
- **TypeScript**: 4.7+
- **Next.js**: 13+ (with app router)

## Documentation

For detailed API documentation and examples, visit:
- [API Reference](https://github.com/zakarliuka/react-telegram-web-tools/blob/master/docs/README.md)
- [Telegram WebApp Documentation](https://core.telegram.org/bots/webapps)

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see the [LICENSE](https://github.com/zakarliuka/react-telegram-web-tools/blob/master/LICENSE) file for details.

## Changelog

### Latest Updates
- ✅ Updated to @twa-dev/sdk v8.0.2
- ✅ Added SecondaryButton component
- ✅ New fullscreen mode support
- ✅ Motion sensor hooks (accelerometer, gyroscope, orientation)
- ✅ Secure storage for sensitive data
- ✅ Stories sharing capabilities
- ✅ Enhanced theme integration
- ✅ Improved TypeScript definitions