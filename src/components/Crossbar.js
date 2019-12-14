import React from "react";
import Line from "../shapes/Line.js";

export const Crossbar = ({ x, y, radius, angle }) => {
  const diffX = radius * Math.cos(angle);
  const diffY = radius * Math.sin(angle);
  const x2 = x + diffX;
  const y2 = y - diffY;
  return (
    <>
      <Line x1={x} y1={y} x2={x2} y2={y2} />
      <Line x1={x} y1={y} x2={x - diffX} y2={y + diffY} />
    </>
  );
};

export default Crossbar;
