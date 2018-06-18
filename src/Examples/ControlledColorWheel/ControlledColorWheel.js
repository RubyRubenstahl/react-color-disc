import React from "react";
import ColorWheel from "../../ColorWheel";

class ControlledColorWheel extends React.Component {
  state = { color: "#5080d2" };

  handleColorChange = color => {
    this.setState({ color });
  };

  render() {
    const bgStyle = {
      backgroundColor:'#444',
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    const wheelStyle = {
      ...bgStyle,
      backgroundColor: "#444",
      width: 400,
      height: 400,
      borderRadius: 200,
      paddingLeft: 4
    };

    const outerRingStyle = {
        ...bgStyle,
      backgroundColor: this.state.color,
      width: 500,
      height: 500,
      borderRadius: 250
    };

    return (
      <div style={bgStyle}>
        <div style={outerRingStyle}>
          <div style={wheelStyle}>
            <ColorWheel
              color={this.state.color}
              onChange={this.handleColorChange}
            />;
          </div>
        </div>
      </div>
    );
  }
}

export default ControlledColorWheel;
