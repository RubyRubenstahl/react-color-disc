import React from "react";
import propTypes from "prop-types";
import Konva from "konva";
import { Stage, Image, Layer, Circle } from "react-konva";

function Marker({
  pos,
  radius = 15,
  strokeWidth = 2,
  strokeColor = "#AAA",
  shadowOffset = { x: 1, y: 1 },
  shadowOpacity = 0.3,
    ...rest
}) {
  return(
    <Circle
      x={pos.x}
      y={pos.y}
      width={radius}
      height={radius}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      shadowOffset={shadowOffset}
      shadowOpacity={shadowOpacity}
      listening={false}
      {...rest}
    />
  );
}

Marker.propTypes={
  pos: propTypes.number,
  radius: propTypes.number,
  strokeWidth: propTypes.number,
  strokeColor: propTypes.string,
  shadowOffset: propTypes.number,
  shadowOpacity: propTypes.number,
}

export default Marker;
