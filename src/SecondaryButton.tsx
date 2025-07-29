'use client';

import { useEffect } from 'react';
import useWebApp from './useWebApp';

const SecondaryButton: React.FC<{
  text: string;
  color?: string;
  textColor?: string;
  isActive?: boolean;
  isProgressVisible?: boolean;
  onClick?: () => void;
}> = ({ text, color, textColor, isActive, isProgressVisible, onClick }) => {
  const secondaryButton = (useWebApp() as any)?.SecondaryButton;

  useEffect(() => {
    secondaryButton?.setParams({
      text,
      color,
      text_color: textColor,
      is_active: isActive,
      is_visible: true,
    });

    return () => {
      secondaryButton?.hide();
    };
  }, [secondaryButton, color, isActive, text, textColor]);

  useEffect(() => {
    if (isProgressVisible) {
      secondaryButton?.showProgress();
      secondaryButton?.disable();
    } else {
      secondaryButton?.hideProgress();
    }
  }, [secondaryButton, isProgressVisible]);

  useEffect(() => {
    if (!onClick) {
      return;
    }
    secondaryButton?.onClick(onClick);

    return () => {
      secondaryButton?.offClick(onClick);
    };
  }, [secondaryButton, onClick]);

  return null;
};

export default SecondaryButton;
