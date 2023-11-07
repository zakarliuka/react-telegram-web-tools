# React Telegram WebApp Tools

This React library provides a set of tools to create Telegram WebApps with ease.  For more information on Telegram Web Apps, please visit the [official documentation](https://core.telegram.org/bots/webapps).

## Installation

Install the library using npm:

```bash
npm install @zakarliuka/react-telegram-web-tools --save
```

## Usage

**Initialization Step:**

Before you can start using the library, it's crucial to set up the Telegram Web App context.
 [official documentation](https://core.telegram.org/bots/webapps)

```javascript
import { WebAppProvider } from '@zakarliuka/react-telegram-web-tools';

<WebAppProvider>
    {/* Your Next.js Telegram web app components and functionality */}
</WebAppProvider>
```

**For Next.js:**

If you are building your Telegram web app using Next.js, you should create and use next provider:

```javascript
"use client";

import { getWebApp, webAppContext } from "@zakarliuka/react-telegram-web-tools";
import Script from "next/script";
import React, { useState } from "react";

const WebAppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [webApp, setWebApp] = useState(getWebApp());
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onLoad={() => {
          const webapp = getWebApp();
          webapp?.ready();
          setWebApp(webapp);
        }}
      />
      <webAppContext.Provider value={webApp}>{children}</webAppContext.Provider>
    </>
  );
};

export default WebAppProvider;
```

```js

export const SomeComponent: React.FC<{}> = () => {
  const showConfirm = useShowConfirm()
  const showPopup = useShowPopup();
  
  const handleSubmit = () => {
    showPopup({
      title: "hi there!",
      message: "hello wrold",
      buttons: [
        { text: "ok", type: "ok" },
      ],
    }).then()
  };

  const handleBack = () => {
    showConfirm({
      message: "your changes will be lost"
    }).then((status) => {
      if(status) {
        // ... ok button was clicked
      } else {
        // ... cancel button was clicked
      }
    })
  }

  return (
    <>
      {back && (
        <BackButton
          onClick={handleBack}
        />
      )}
      <MainButton
        text="Submit"
        onClick={handleSubmit}
        textColor="#FFFFFF"
        color="#111111"
      />
    </>
  );
};

```

## Documentation

For a complete list of available functions and components and their usage, refer to the [documentation](https://github.com/zakarliuka/react-telegram-web-tools/blob/master/docs/README.md#mainbutton).

## License

This library is provided under the MIT License. See the [LICENSE](https://github.com/zakarliuka/react-telegram-web-tools/blob/master/LICENSE) file for details.
