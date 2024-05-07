'use client';

import {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import mapboxgl, { FlyToOptions } from 'mapbox-gl';

import cn from '@/lib/utils';
import { IPosition } from '@/types/types';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  initialPosition: IPosition;
  flyToOptions: FlyToOptions;
  markers: IPosition[];
  className?: string;
}

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE;

const MapboxMap = memo(({
  className,
  initialPosition = {
    center: [74.7387, 41.2228],
    zoom: 4,
  },
  flyToOptions,
  markers,
}: MapboxMapProps) => {
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

  return <div ref={mapNode} className={cn('w-full h-full', className)} />;
});

export default MapboxMap;
