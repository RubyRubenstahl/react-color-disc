import React from "react";
import propTypes from "prop-types";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import Wheel from "./components/Wheel";
import {
  hexColorToWheelPosition,
  wheelPositionToHexColor
} from "./helpers/coordinateTransforms";
import Marker from "./components/Marker";
class ColorWheel extends React.Component {

  handleMouseEvent = radius => e => {
    const { layerX, layerY} = e.evt;
    const hexColor = wheelPositionToHexColor(
      layerX,
      layerY,
      radius,
      this.props.color
    );
    this.props.onChange && this.props.onChange(hexColor)
  };

  handleMouseMove = radius => e => {
    // debugger
    if(e.evt.buttons && e.evt.button == 0){
      this.handleMouseEvent(radius)(e)
    }
  };

  render() {
    const { radius = 150, color ="white"} = this.props;

    const markerPos = hexColorToWheelPosition(color, radius);
    const diameter = radius * 2;
    return (
      <Stage width={diameter} height={diameter}>
        <Layer>
          <Wheel radius={radius}
                 onClick={this.handleMouseEvent(radius)}
                 onMouseMove={this.handleMouseMove(radius)}
          />
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
  radius: propTypes.number,
  onChange: propTypes.func
};

export default ColorWheel;
