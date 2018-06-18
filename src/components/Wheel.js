import React from "react";
import propTypes from "prop-types";
import Konva from "konva";
import { Rect, Image } from "react-konva";
import colorWheelImg from "../assets/color_wheel.png";

class Wheel extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    // Dynamically load the image, required by react-konva
    const image = new window.Image();
    console.log(colorWheelImg);
    image.src = colorWheelImg;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  }

  render() {
    const { radius, ...rest } = this.props;
    return (
      <Image
        image={this.state.image}
        width={radius * 2}
        height={radius * 2}
        {...rest}
      />
    );
  }
}

Wheel.propTypes = {};

export default Wheel;
