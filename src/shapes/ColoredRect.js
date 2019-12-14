import React, { Component } from "react";
import { Rect } from "react-konva";

class ColoredRect extends Component {
  state = {
    color: "green",
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        {...this.props}
      />
    );
  }
}

export default ColoredRect;
