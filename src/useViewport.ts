import { useEffect, useState } from 'react';
import useWebApp from './useWebApp';

const useViewport = () => {
  const webApp = useWebApp();
  const [viewport, setViewport] = useState({
    height: webApp?.viewportHeight || 0,
    stableHeight: (webApp as any)?.viewportStableHeight || 0,
    isExpanded: webApp?.isExpanded || false,
  });

  useEffect(() => {
    if (!webApp) return;

    const handleViewportChanged = () => {
      setViewport({
        height: webApp.viewportHeight || 0,
        stableHeight: (webApp as any)?.viewportStableHeight || 0,
        isExpanded: webApp.isExpanded || false,
      });
    };

    webApp?.onEvent('viewportChanged', handleViewportChanged);

    // Initial update
    handleViewportChanged();

    return () => {
      webApp?.offEvent('viewportChanged', handleViewportChanged);
    };
  }, [webApp]);

  return viewport;
};

export default useViewport;
