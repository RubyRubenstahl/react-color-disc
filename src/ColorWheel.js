import React from "react";
import propTypes from "prop-types";

const ColorWheel = props => {
  const {} = props;

  return (<div>ColorWheel</div>);

}

ColorWheel.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorWheel;
