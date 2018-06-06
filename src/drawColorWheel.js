const radToDegrees = rad => rad * 180 / Math.PI;

const getPolarDist = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

const getPolarAngle = (x, y) => {
  const rad = Math.atan2(x, y);
  const deg = radToDegrees(rad);
  return deg;
};

const indexTo2d = (index, width, height) => ({
  x: index % width,
  y: Math.floor(index / height)
});

const translate = (translateX, transelateY) => ({ x, y }) => ({
  x: x + translateX,
  y: y + transelateY
});

const cartesianToPolar = ({ x, y }) => ({
  x,
  y,
  dist: getPolarDist(x, y),
  angle: getPolarAngle(x, y)
});

const toHsv = r => ({ dist, angle }) => {
  return dist <= r
    ? {
        h: angle,
        s: dist / r,
        v: 1
      }
    : null;
};

const appendTransparentPixel = arr => [...arr, 0, 0, 0, 0];

export {
  appendTransparentPixel,
  toHsv,
  translate,
  indexTo2d,
  getPolarAngle,
  radToDegrees
};
