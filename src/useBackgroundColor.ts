import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useBackgroundColor = () => {
  const webApp = useWebApp();

  const setBackgroundColor = useCallback(
    (color: 'bg_color' | 'secondary_bg_color' | `#${string}`) => {
      webApp?.setBackgroundColor(color);
    },
    [webApp],
  );

  return { setBackgroundColor };
};

export default useBackgroundColor;
