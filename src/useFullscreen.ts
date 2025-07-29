import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

const useFullscreen = () => {
  const webApp = useWebApp();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = useCallback(() => {
    (webApp as any)?.requestFullscreen?.();
  }, [webApp]);

  const exitFullscreen = useCallback(() => {
    (webApp as any)?.exitFullscreen?.();
  }, [webApp]);

  useEffect(() => {
    if (!webApp) return;

    const handleFullscreenChanged = () => {
      setIsFullscreen((webApp as any)?.isFullscreen || false);
    };

    webApp?.onEvent('fullscreenChanged', handleFullscreenChanged);

    return () => {
      webApp?.offEvent('fullscreenChanged', handleFullscreenChanged);
    };
  }, [webApp]);

  return {
    isFullscreen,
    requestFullscreen,
    exitFullscreen,
  };
};

export default useFullscreen;
