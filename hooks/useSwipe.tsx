import { RefObject, useRef, useState, useCallback, useMemo } from 'react';

interface UseSwipeGalleryProps {
  slidesLength: number
  containerRef: RefObject<HTMLDivElement | null>
  currentIndex: number
  onChange: (index: number) => void
}

export const useSwipe = ({
  slidesLength,
  containerRef,
  currentIndex,
  onChange,
}: UseSwipeGalleryProps) => {
  const [dragX, setDragX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startX = useRef(0);

  const handleDragStart = useCallback((clientX: number) => {
    startX.current = clientX;
    setIsDragging(true);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    setDragX(delta);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (dragX > 50) {
      const newIndex = currentIndex === 0 ? slidesLength - 1 : currentIndex - 1;
      onChange(newIndex);
    } else if (dragX < -50) {
      const newIndex = currentIndex === slidesLength - 1 ? 0 : currentIndex + 1;
      onChange(newIndex);
    }
    setDragX(0);
  }, [dragX, currentIndex, slidesLength, onChange]);

  // Memoize the transform calculation to prevent unnecessary re-renders
  const transform = useMemo(() => {
    const base = -currentIndex * 100;
    const percentDrag = (dragX / (containerRef.current?.offsetWidth || 1)) * 100;
    return `translateX(${base + percentDrag}%)`;
  }, [currentIndex, dragX, containerRef]);

  // Memoize the style object to prevent unnecessary re-renders
  const style = useMemo(() => ({
    transform,
    transition: isDragging ? 'none' : 'transform 0.3s ease',
  }), [transform, isDragging]);

  const handlers = useMemo(() => ({
    style,
    onTouchStart: (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX),
    onTouchEnd: () => handleDragEnd(),
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    onMouseMove: (e: React.MouseEvent) => handleDragMove(e.clientX),
    onMouseUp: () => handleDragEnd(),
    onMouseLeave: () => {
      if (isDragging) handleDragEnd();
    },
  }), [style, handleDragStart, handleDragMove, handleDragEnd, isDragging]);

  return {
    swipeHandlers: handlers,
  };
};

