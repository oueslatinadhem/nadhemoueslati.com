import { useEffect, useState, useRef } from 'react';

interface UseGoogleMapsProps {
  apiKey: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

let isScriptLoading = false;
let loadedCallbacks: (() => void)[] = [];

export const useGoogleMaps = ({ apiKey }: UseGoogleMapsProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const callbackRef = useRef<() => void>();

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    callbackRef.current = () => setIsLoaded(true);
    loadedCallbacks.push(callbackRef.current);

    if (!isScriptLoading) {
      isScriptLoading = true;
      
      window.initMap = () => {
        loadedCallbacks.forEach(callback => callback());
        loadedCallbacks = [];
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (callbackRef.current) {
        loadedCallbacks = loadedCallbacks.filter(cb => cb !== callbackRef.current);
      }
    };
  }, [apiKey]);

  return { isLoaded };
};