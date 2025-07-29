import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

interface OrientationData {
  alpha: number;
  beta: number;
  gamma: number;
}

const useOrientation = () => {
  const webApp = useWebApp();
  const [data, setData] = useState<OrientationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = useCallback(
    (refreshRate?: number) => {
      const deviceOrientation = (webApp as any)?.DeviceOrientation;
      if (!deviceOrientation) return false;

      try {
        deviceOrientation.start({ refresh_rate: refreshRate });
        setIsTracking(true);
        return true;
      } catch (error) {
        console.error('Failed to start device orientation:', error);
        return false;
      }
    },
    [webApp],
  );

  const stopTracking = useCallback(() => {
    const deviceOrientation = (webApp as any)?.DeviceOrientation;
    if (!deviceOrientation) return;

    deviceOrientation.stop();
    setIsTracking(false);
    setData(null);
  }, [webApp]);

  useEffect(() => {
    const deviceOrientation = (webApp as any)?.DeviceOrientation;
    if (!deviceOrientation) return;

    const handleOrientationChanged = () => {
      // The event data should be accessed via webApp.DeviceOrientation properties
      if (deviceOrientation) {
        setData({
          alpha: deviceOrientation.alpha || 0,
          beta: deviceOrientation.beta || 0,
          gamma: deviceOrientation.gamma || 0,
        });
      }
    };

    webApp?.onEvent('deviceOrientationChanged', handleOrientationChanged);

    return () => {
      webApp?.offEvent('deviceOrientationChanged', handleOrientationChanged);
      stopTracking();
    };
  }, [webApp, stopTracking]);

  return {
    data,
    isTracking,
    startTracking,
    stopTracking,
    isAvailable: !!(webApp as any)?.DeviceOrientation,
  };
};

export default useOrientation;
