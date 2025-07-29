import { useCallback, useEffect, useState } from 'react';
import useWebApp from './useWebApp';

interface AccelerometerData {
  x: number;
  y: number;
  z: number;
}

const useAccelerometer = () => {
  const webApp = useWebApp();
  const [data, setData] = useState<AccelerometerData | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = useCallback(
    (refreshRate?: number) => {
      const accelerometer = (webApp as any)?.Accelerometer;
      if (!accelerometer) return false;

      try {
        accelerometer.start({ refresh_rate: refreshRate });
        setIsTracking(true);
        return true;
      } catch (error) {
        console.error('Failed to start accelerometer:', error);
        return false;
      }
    },
    [webApp],
  );

  const stopTracking = useCallback(() => {
    const accelerometer = (webApp as any)?.Accelerometer;
    if (!accelerometer) return;

    accelerometer.stop();
    setIsTracking(false);
    setData(null);
  }, [webApp]);

  useEffect(() => {
    const accelerometer = (webApp as any)?.Accelerometer;
    if (!accelerometer) return;

    const handleAccelerometerChanged = () => {
      // The event data should be accessed via webApp.Accelerometer properties
      if (accelerometer) {
        setData({
          x: accelerometer.x || 0,
          y: accelerometer.y || 0,
          z: accelerometer.z || 0,
        });
      }
    };

    webApp?.onEvent('accelerometerChanged', handleAccelerometerChanged);

    return () => {
      webApp?.offEvent('accelerometerChanged', handleAccelerometerChanged);
      stopTracking();
    };
  }, [webApp, stopTracking]);

  return {
    data,
    isTracking,
    startTracking,
    stopTracking,
    isAvailable: !!(webApp as any)?.Accelerometer,
  };
};

export default useAccelerometer;
