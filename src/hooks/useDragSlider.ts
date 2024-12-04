import { useState, useRef } from 'react';

interface UseDragSliderProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const useDragSlider = ({ onNext, onPrevious }: UseDragSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);

  const handleDragStart = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) return; // Disable on mobile
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    dragCurrentX.current = e.clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const difference = dragStartX.current - dragCurrentX.current;
    const threshold = 50;

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        onNext();
      } else {
        onPrevious();
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  return {
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleMouseLeave
  };
};