import React from "react";
import { range } from "range";
import hsv2rgb from "hsv2rgb";

function rect(props) {
  const { ctx, x, y, width, height } = props;
  ctx.fillRect(x, y, width, height);
}

const toRgbArray = (acc, hsvCol) => {
  if (!hsvCol) {
    return appendTransparentPixel(acc);
  }

  const { h, s, v } = hsvCol;
  const rgbArray = hsv2rgb(h, s, v);
};

const createRgbWheelPixelArray = r => {
  const d = r * 2;
  console.log(d);
  const indicies = range(0, d * d);
  const arr = indicies.map(i => indexTo2d(i, d, d));
  //.map(translate(-r, -r));
  // .map(cartesianToPolar) // .map(({ x, y }) => ({ x: x - r, y: y - r }))
  // .map(toHsv(r))
  // .reduce(toRgbArray, [])

  arr.filter(val => val < 500).map(val => console.log(val));
};

const drawWheel = ctx => {
  const { width, height } = ctx.canvas;
  const r = Math.min(width, height) / 2;
  const wheelImage = createWheelImageData(r);
  //  ctx.putImageData(wheelImage, r, r);
};

const createWheelImageData = r => {
  const pixelArr = createRgbWheelPixelArray(r);
  // const imageData = new Uint8ClampedArray(pixelArr);
  //new ImageData(imageData, r, r);
};

class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    drawWheel(ctx);
    ctx.clearRect(0, 0, 300, 300);
    // draw children “components”
    rect({ ctx, x: 10, y: 10, width: 50, height: 50 });
    rect({ ctx, x: 110, y: 110, width: 50, height: 50 });
  }
  render() {
    return <canvas ref="canvas" width={300} height={300} />;
  }
}

export default CanvasComponent;
