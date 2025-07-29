import { useCallback } from 'react';
import useWebApp from './useWebApp';

const useHeaderColor = () => {
  const webApp = useWebApp();

  const setHeaderColor = useCallback(
    (color: 'bg_color' | 'secondary_bg_color' | `#${string}`) => {
      webApp?.setHeaderColor(color);
    },
    [webApp],
  );

  return { setHeaderColor };
};

export default useHeaderColor;
