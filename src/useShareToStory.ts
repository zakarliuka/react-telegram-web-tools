import { useCallback } from 'react';
import useWebApp from './useWebApp';

interface ShareToStoryParams {
  mediaUrl: string;
  text?: string;
  widgetLink?: {
    url: string;
    name?: string;
  };
}

const useShareToStory = () => {
  const webApp = useWebApp();

  const shareToStory = useCallback(
    (params: ShareToStoryParams) =>
      new Promise<void>((resolve, reject) => {
        const shareToStory = (webApp as any)?.shareToStory;
        if (!shareToStory) {
          reject(new Error('shareToStory not available'));
          return;
        }

        try {
          shareToStory(params.mediaUrl, {
            text: params.text,
            widget_link: params.widgetLink,
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      }),
    [webApp],
  );

  return {
    shareToStory,
    isAvailable: !!(webApp as any)?.shareToStory,
  };
};

export default useShareToStory;
