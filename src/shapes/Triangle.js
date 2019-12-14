import React from 'react'
import { RegularPolygon } from 'react-konva'; 

import ShapeTemplate from './ShapeTemplate';

const Triangle = ({ x, y, ...rest }) => {
  return (<ShapeTemplate 
    component={RegularPolygon}
    x={x}
    y={y}
    sides={3}
    radius={70}
    fill='red'
    stroke='black'
    strokeWidth={4}
    {...rest}
  />);
};

export default Triangle;
