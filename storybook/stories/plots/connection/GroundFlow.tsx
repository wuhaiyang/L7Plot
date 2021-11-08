import React, { useRef, useEffect } from 'react';
import { Connection } from '@antv/l7plot';

export default function GroundFlow() {
  const map = useRef<Connection>();
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/SIybYh6xr1/arc.json')
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
              x: 'x',
              y: 'y',
              x1: 'x1',
              y1: 'y1',
            },
          },
          shape: 'arc',
          size: 2,
          color: '#1CD5FF',
          style: {
            opacity: 0.8,
            sourceColor: '#8ce1f5',
            targetColor: '#1CD5FF',
          },
          autoFit: true,
          animate: {
            interval: 0.6, // 间隔
            trailLength: 2, // 流线长度
            duration: 2, // 持续时间，延时
          },
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
