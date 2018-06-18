import React from "react";
import propTypes from "prop-types";
import Konva from "konva";
import { Stage, Image, Layer, Circle } from "react-konva";
import Wheel from "./components/Wheel";
import colorToCartesian from './helpers/colorToCartesian';

class ColorWheel extends React.Component{
  state={color: "white"}
  render(){
  const { radius = 150, color = "yellow" } = this.props;
  const markerPos = colorToCartesian(color, radius);
  return (
    <Stage width={radius * 2} height={radius * 2}>
      <Layer>
        <Wheel radius={radius} />
      </Layer>
      <Layer>
        <Circle
          x={markerPos.x}
          y={markerPos.y}
          width={15}
          height={15}
          strokeWidth={2}
          stroke={"#AAA"}
          shadowOffset={{x:1, y:1}}
          shadowOpacity={.3}
        />
      </Layer>
    </Stage>
  )
  }
};

ColorWheel.propTypes = {
  color: propTypes.string,
  radius: propTypes.number
};

export default ColorWheel;
