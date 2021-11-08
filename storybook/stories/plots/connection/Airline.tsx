import React, { useRef, useEffect } from 'react';
import { Connection } from '@antv/l7plot';

export default function Airline() {
  const map = useRef<Connection>();
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/AUom1g4loR/openflight_airline_1.json')
      .then((response) => response.json())
      .then((data) => {
        const connectionMap = new Connection('container', {
          theme: 'dark',
          map: {
            type: 'mapbox',
            center: [116.3956, 39.9392],
            pitch: 45,
            zoom: 10,
          },
          source: {
            data: data,
            parser: {
              type: 'json',
              x: 'fromLng',
              y: 'fromLat',
              x1: 'toLng',
              y1: 'toLat',
            },
          },
          shape: 'arc3d',
          size: 2,
          color: '#07d2e8',
          style: {
            opacity: 0.8,
          },
          animate: {
            interval: 0.6, // 间隔
            trailLength: 2, // 流线长度
            duration: 2, // 持续时间，延时
          },
          autoFit: true,
          zoom: {
            position: 'bottomright',
          },
          scale: {
            position: 'bottomright',
          },
          layerMenu: {
            position: 'topright',
          },
        });

        map.current = connectionMap;
      });

    return () => map.current?.destroy();
  }, []);

  return (
    <div
      id="container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></div>
  );
}
