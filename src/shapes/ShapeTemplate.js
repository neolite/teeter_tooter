import React from "react";
import { Text, Group } from "react-konva";

const ShapeTemplate = ({ children, component, text, ...rest }) => {
  return (
    <Group>
      <Text text={text} />
      {React.createElement(component, rest, children)}
    </Group>
  );
};

export default ShapeTemplate;
