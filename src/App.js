import React from 'react';
import { Stage, Layer, Text } from 'react-konva';

import ColoredRect from './shapes/ColoredRect';
import Triangle from './shapes/Triangle';
import Line from './shapes/Line';

const PX_TO_METERS_RATIO = 50;
const METER = 1;

function App() {
  return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer    
        x={300}
        y={300}
      >
        <Text text="Try click on rect" />
        <ColoredRect />
        <Line x1={200} y1={20} x2={600} y2={20} />
        <Triangle x={400} y={100} />
      </Layer>
  </Stage>
  );
}

export default App;
