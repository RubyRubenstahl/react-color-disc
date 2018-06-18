import React from "react";
import ColorWheel from "../../ColorWheel";

class ControlledColorWheel extends React.Component {
  state = { color: "#0d5cd2" };

  handleColorChange = color => {
    this.setState({ color });
  };


  render() {
    const bgStyle = {
      backgroundColor: "#444",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    const wheelStyle = {
      ...bgStyle,
      backgroundColor: "#444",
      width: "50vmin",
      height: "50vmin",
      borderRadius: "50vmin",
      paddingLeft: 4
    };

    const outerRingStyle = {
      ...bgStyle,
      backgroundColor: this.state.color,
      boxShadow: "rgba(14, 14, 14, 0.15) 3px 3px 20px 20px inset",
      width: "63vmin",
      height: "63vmin",
      borderRadius: "34vmin"
    };

    return (
      <div style={bgStyle}>
        <div style={outerRingStyle}>
          <div style={wheelStyle}>
            <ColorWheel
              color={this.state.color}
              onChange={this.handleColorChange}
              radius={Math.min(window.innerWidth,window.innerHeight)*.18}
            />;
          </div>
        </div>
      </div>
    );
  }
}

export default ControlledColorWheel;
