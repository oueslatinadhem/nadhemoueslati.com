import { useState, useEffect, useCallback } from 'react';

interface UseAutoSlideProps {
  totalSlides: number;
  interval?: number;
  isPaused?: boolean;
}

export const useAutoSlide = ({ totalSlides, interval = 6000, isPaused = false }: UseAutoSlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!isPaused && !isHovered) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [goToNext, interval, isPaused, isHovered]);

  return {
    currentIndex,
    direction,
    setIsHovered,
    goToNext,
    goToPrevious,
    goToSlide
  };
};