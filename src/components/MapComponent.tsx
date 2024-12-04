import React, { useEffect, useRef } from 'react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const circlesRef = useRef<google.maps.Circle[]>([]);
  const animationFrameRef = useRef<number>();

  const { isLoaded } = useGoogleMaps({
    apiKey: 'AIzaSyAeC_xguF1ViCR3dA4YKAAheDGqedzDV3Y'
  });

  const center = {
    lat: 48.83535669050386,
    lng: 2.3954962490161087
  };

  const mapStyles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
  ];

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    // Cleanup previous instances
    if (mapInstanceRef.current) {
      markerRef.current?.setMap(null);
      circlesRef.current.forEach(circle => circle.setMap(null));
      circlesRef.current = [];
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 12,
      styles: mapStyles,
      disableDefaultUI: true,
      gestureHandling: 'cooperative'
    });

    mapInstanceRef.current = map;

    // Create marker
    const marker = new window.google.maps.Marker({
      position: center,
      map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: '#4ade80',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
        scale: 8,
      },
    });

    markerRef.current = marker;

    // Create circles for pulse effect
    const createCircle = (radius: number, opacity: number) => {
      return new window.google.maps.Circle({
        map,
        center,
        radius,
        strokeColor: '#4ade80',
        strokeOpacity: opacity,
        strokeWeight: 2,
        fillColor: '#4ade80',
        fillOpacity: opacity * 0.3,
      });
    };

    // Create multiple circles for a more pronounced pulse effect
    const circle1 = createCircle(100, 0.8);
    const circle2 = createCircle(200, 0.6);
    const circle3 = createCircle(300, 0.4);
    circlesRef.current = [circle1, circle2, circle3];

    let phase = 0;
    const animate = () => {
      phase += 0.02;

      circlesRef.current.forEach((circle, index) => {
        const baseRadius = (index + 1) * 100;
        const pulseScale = 1 + Math.sin(phase + index * (Math.PI / 3)) * 0.5;
        const currentRadius = baseRadius * pulseScale;
        
        circle.setRadius(currentRadius);
        
        // Animate opacity for enhanced pulse effect
        const opacity = 0.4 + Math.sin(phase + index * (Math.PI / 3)) * 0.2;
        circle.setOptions({
          strokeOpacity: opacity,
          fillOpacity: opacity * 0.3
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      markerRef.current?.setMap(null);
      circlesRef.current.forEach(circle => circle.setMap(null));
      circlesRef.current = [];
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-full h-[300px] rounded-xl overflow-hidden bg-white/5 animate-pulse" />
    );
  }

  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;