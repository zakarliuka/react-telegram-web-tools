'use client';

import useWebApp from './useWebApp';

const useInitData = () => {
  const webApp = useWebApp();

  return {
    initData: webApp?.initData,
    initDataUnsafe: webApp?.initDataUnsafe,
  };
};

export default useInitData;
