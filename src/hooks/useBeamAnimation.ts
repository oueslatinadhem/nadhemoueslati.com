import { useState, useEffect, useCallback } from 'react';

interface UseBeamAnimationProps {
  totalLines: number;
  delay?: number;
}

export const useBeamAnimation = ({ totalLines, delay = 3000 }: UseBeamAnimationProps) => {
  const [currentLine, setCurrentLine] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [beamPosition, setBeamPosition] = useState(-1);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setCurrentLine(0);
    setBeamPosition(0);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (currentLine >= 0) {
      timeoutId = setTimeout(() => {
        if (currentLine < totalLines - 1) {
          setCurrentLine(currentLine + 1);
          setBeamPosition(0);
        } else {
          setCurrentLine(-1);
          setIsAnimating(false);
          setBeamPosition(-1);
          timeoutId = setTimeout(startAnimation, delay);
        }
      }, 2000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentLine, totalLines, delay, startAnimation]);

  useEffect(() => {
    const timeoutId = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timeoutId);
  }, [startAnimation]);

  return {
    currentLine,
    isAnimating,
    beamPosition,
  };
};