'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import mapboxgl, {
  FlyToOptions,
  LngLatLike,
} from 'mapbox-gl';

import cn from '@/lib/utils';
import 'mapbox-gl/dist/mapbox-gl.css';

export interface IPosition {
  center: LngLatLike;
  zoom: number;
  text?: string;
}

export interface MapboxMapProps {
  initialPosition: IPosition;
  flyToOptions: FlyToOptions | null;
  markers: IPosition[];
  className?: string;
}

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE;

function MapboxMap({
  className,
  initialPosition = {
    center: [74.7387, 41.2228],
    zoom: 4,
  },
  flyToOptions = null,
  markers,
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

    if (markers !== undefined && markers?.length !== 0) {
      markers?.forEach((marker) => {
        const { text } = marker;

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        }).setText(`${text}`);

        if (markers) {
          popup
            .setLngLat(marker?.center)
            .addTo(mapboxMap);
        }
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
