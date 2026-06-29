"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export interface MapViewerProps {
  center: { lat: number, lng: number };
  zoom?: number;
  markers?: Array<{ lat: number, lng: number, popup?: string }>;
  className?: string;
}

const MapViewerComponent = dynamic<MapViewerProps>(
  () => import('./MapViewerComponent') as any,
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">Loading map...</div> }
);

export function MapViewer(props: MapViewerProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={`bg-gray-100 animate-pulse ${props.className || 'w-full h-64'}`} />;

  return <MapViewerComponent {...props} />;
}
