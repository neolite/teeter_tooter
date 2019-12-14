import React from "react";
import { Text } from "react-konva";

const ShapeTemplate = ({ children, component, text, ...rest }) => {
  return (
    <>
      <Text text={text} />
      {React.createElement(component, rest, children)}
    </>
  );
};

export default ShapeTemplate;
