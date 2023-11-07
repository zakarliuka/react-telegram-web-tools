'use client';

import React, { useEffect } from 'react';
import useWebApp from './useWebApp';

const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const backButton = useWebApp()?.BackButton;

  useEffect(() => {
    backButton?.show();
    return () => {
      backButton?.hide();
    };
  }, [backButton]);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    backButton?.onClick(onClick);

    return () => {
      backButton?.offClick(onClick);
    };
  }, [backButton, onClick]);

  return null;
};

export default BackButton;
