import React from "react";
import propTypes from "prop-types";
import Konva from "konva";
import { Stage, Image, Layer, Circle } from "react-konva";
import Wheel from "./components/Wheel";
import colorToCartesian from "./helpers/colorToCartesian";
import Marker from "./components/Marker";
class ColorWheel extends React.Component {
  state = { color: "white" };

  handleClick = e => {
    debugger
    return e;
  };


  render() {
    const { radius = 150, color = "yellow" } = this.props;

    const markerPos = colorToCartesian(color, radius);
    return (
      <Stage width={radius * 2} height={radius * 2}>
        <Layer>
          <Wheel radius={radius} onClick={this.handleClick} />
        </Layer>
        <Layer>
          <Marker pos={markerPos} />
        </Layer>
      </Stage>
    );
  }
}

ColorWheel.propTypes = {
  color: propTypes.string,
  radius: propTypes.number
};

export default ColorWheel;
