import React from 'react'
import { Line as KonvaLine } from 'react-konva';
import ShapeTemplate from './ShapeTemplate';

const Line = ({ x1, y1, x2, y2 }) => {
  return (
     <ShapeTemplate
      component={KonvaLine}
      points={[x1, y1, x2, y2]}
      stroke='red'
      strokeWidth={15}
      lineCap='round'
      lineJoin='round'
    />
  );
};

export default Line;
