import React from "react";
import { render } from "react-dom";
import ColorWheel from "./ColorWheel";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ColorWheel hexColor="#EE6099" />
  </div>
);

render(<App />, document.getElementById("root"));
