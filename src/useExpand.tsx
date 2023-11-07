'use client';

import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

const useExpand = () => {
  const webApp = useWebApp();
  const [isExpanded, setIsExpanded] = useState(webApp?.isExpanded);

  useEffect(() => {
    if (!webApp) return;
    const handleEvent = (payload: { isStateStable: boolean }) => {
      if (payload.isStateStable) {
        setIsExpanded(webApp.isExpanded);
      }
    };

    webApp.onEvent('viewportChanged', handleEvent);
    return () => webApp.offEvent('viewportChanged', handleEvent);
  }, [webApp]);

  const handleExpand = useCallback(() => webApp?.expand?.(), [webApp]);

  return [isExpanded, handleExpand] as const;
};

export default useExpand;
