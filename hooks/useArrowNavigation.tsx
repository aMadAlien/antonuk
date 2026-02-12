'use client'

import { useEffect } from 'react';

const useArrowNavigation = (onLeft: () => void, onRight: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onLeft();
      } else if (e.key === 'ArrowRight') {
        onRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onLeft, onRight]);
};

export default useArrowNavigation