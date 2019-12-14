import React, { useEffect, useState } from "react";
import { Stage, Layer, Group, Text } from "react-konva";

import ColoredRect from "./shapes/ColoredRect";
import Triangle from "./shapes/Triangle";
import Crossbar from "./components/Crossbar";

const center = {
  x: 200,
  y: 200,
};

function App() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (Math.abs(angle) > 0.74) {
      setAngle(0);
    }
  }, [angle]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer x={300} y={300}>
        <Group x={0} y={100}>
          <Text x={120} y={30} text="10 Kg" />
          <ColoredRect x={120} y={40} />
        </Group>
        <Group x={100} y={100}>
          <Text x={120} y={30} text="20 Kg" />
          <ColoredRect x={120} y={40} />
        </Group>
        <Crossbar x={center.x} y={center.y} radius={200} angle={-angle} />
        <Triangle x={center.x} y={center.y + 70} radius={70} />
      </Layer>
    </Stage>
  );
}

export default App;
