import { useState, useEffect, useRef } from 'react';

interface UseVisibilityControlProps {
  autoplayInterval?: number;
  threshold?: number;
}

export const useVisibilityControl = ({ 
  autoplayInterval = 6000,
  threshold = 0.3 
}: UseVisibilityControlProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  useEffect(() => {
    if (isVisible && !isPaused) {
      intervalRef.current = setInterval(() => {
        if (elementRef.current) {
          const event = new CustomEvent('nextSlide');
          elementRef.current.dispatchEvent(event);
        }
      }, autoplayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isPaused, autoplayInterval]);

  return {
    elementRef,
    isVisible,
    isPaused,
    setIsPaused
  };
};