'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import mapboxgl, { FlyToOptions, LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import cn from '@/lib/utils';

export interface IPosition {
  center: LngLatLike;
  zoom: number;
}

export interface MapboxMapProps {
  initialPosition?: IPosition;
  flyToOptions?: FlyToOptions;
  className?: string;
  markers?: IPosition[];
}

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE;

function MapboxMap({
  className,
  initialPosition = {
    center: [74.7387, 41.2228],
    zoom: 4,
  },
  flyToOptions,
  markers = [],
}: MapboxMapProps) {
  const mapNode = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === 'undefined' || node === null || initialPosition === null) return;

    const mapboxMap = new mapboxgl.Map({
      accessToken,
      container: node,
      style: mapStyle,
      attributionControl: false,
      trackResize: true,
      ...initialPosition,
    });

    setMap(mapboxMap);

    if (markers?.length !== 0) {
      markers.forEach((position) => {
        const marker = new mapboxgl.Marker({
          color: '#000',
        });

        marker
          .setLngLat(position.center)
          .addTo(mapboxMap);
      });
    }

    return () => {
      mapboxMap.remove();
    };
  }, []);

  useEffect(() => {
    if (flyToOptions) {
      map?.flyTo(flyToOptions);
    }
  }, [flyToOptions]);

  return (
    <div ref={mapNode} className={cn('w-full, h-full', className)} />

  );
}

export default MapboxMap;
