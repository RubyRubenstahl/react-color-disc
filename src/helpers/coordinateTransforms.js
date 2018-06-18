import chroma from "chroma-js";
import pipe from "lodash/fp/pipe";
import isNumber from "lodash/isNumber";

// Take a hex color and convert it to HSV arrary
const colorToHsl = color => chroma(color).hsv();

// Replace any NaNs in an array with 0
const nanToZero = vals => vals.map(val => (isNaN(val) ? 0 : val));

// Scale the saturation value in an HSL array
const scaleSat = scale => ([h, s, l]) => [h, s * scale, l];

// Covnert degress to radians
const deg2Rad = deg => Math.PI / 180 * deg;


// Convert from polar to cartesian coordinates
const polarToCartesian = ([angle, radius]) => [
  radius * Math.sin(angle),
  radius * Math.cos(angle)
];

// Convert the hue dgrees to radians and drop the value and we have polar coordinates
const hslToPolar = ([h, s, l]) => [deg2Rad(h), s];

// Add to the hue angle
const rotateHue = angle => ([h, s, l]) => [h + angle, s, l];

// convert from [x,y] to {x,y}
const toPointObject = ([x, y]) => ({ x, y });

const transform2d = (xOffset = 0, yOffset = 0) => ([x, y]) => [
  x + xOffset,
  y + yOffset
];

const scale2d = (xScale = 0, yScale = 0) => ([x, y]) => [
  x * xScale,
  y * yScale
];

const coordinateTransforms = (color, radius) => {
  const toCartesian = pipe(
    colorToHsl,
    rotateHue(90),
    nanToZero,
    hslToPolar,
    polarToCartesian,
    scale2d(radius, radius),
    transform2d(radius, radius),
    toPointObject
  );
  const point = toCartesian(color);

  console.log(point);
  return point;
};

export default coordinateTransforms;
