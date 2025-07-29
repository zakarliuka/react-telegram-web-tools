import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

interface GyroscopeData {
  x: number;
  y: number;
  z: number;
}

const useGyroscope = () => {
  const webApp = useWebApp();
  const [data, setData] = useState<GyroscopeData | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = useCallback(
    (refreshRate?: number) => {
      const gyroscope = (webApp as any)?.Gyroscope;
      if (!gyroscope) return false;

      try {
        gyroscope.start({ refresh_rate: refreshRate });
        setIsTracking(true);
        return true;
      } catch (error) {
        console.error('Failed to start gyroscope:', error);
        return false;
      }
    },
    [webApp],
  );

  const stopTracking = useCallback(() => {
    const gyroscope = (webApp as any)?.Gyroscope;
    if (!gyroscope) return;

    gyroscope.stop();
    setIsTracking(false);
    setData(null);
  }, [webApp]);

  useEffect(() => {
    const gyroscope = (webApp as any)?.Gyroscope;
    if (!gyroscope) return;

    const handleGyroscopeChanged = () => {
      // The event data should be accessed via webApp.Gyroscope properties
      if (gyroscope) {
        setData({
          x: gyroscope.x || 0,
          y: gyroscope.y || 0,
          z: gyroscope.z || 0,
        });
      }
    };

    webApp?.onEvent('gyroscopeChanged', handleGyroscopeChanged);

    return () => {
      webApp?.offEvent('gyroscopeChanged', handleGyroscopeChanged);
      stopTracking();
    };
  }, [webApp, stopTracking]);

  return {
    data,
    isTracking,
    startTracking,
    stopTracking,
    isAvailable: !!(webApp as any)?.Gyroscope,
  };
};

export default useGyroscope;
