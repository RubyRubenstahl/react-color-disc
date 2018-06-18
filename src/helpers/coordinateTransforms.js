import chroma from "chroma-js";
import pipe from "lodash/fp/pipe";
import {
  nanToZero,
  hsvToPolar,
  polarToCartesian,
  scale2d,
  transform2d,
  cartesianToPolar,
  polarToHsv
} from "./math";

// Take a hex color and convert it to HSV arrary
const colorToHsv = color => chroma(color).hsv();

// Take a hex color and convert it to HSV arrary
const hsvToHex = ([h, s, v]) => chroma.hsv(h, s, v).hex();

// Scale the saturation value in an HSV array
const scaleSat = scale => ([h, s, v]) => [h, s * scale, v];

const wrapAngle = angle => angle % 360;

// Add to the hue angle
const rotateHue = angle => ([h, s, v]) => [wrapAngle(h + angle), s, v];

// convert from [x,y] to {x,y}
const toPointObject = ([x, y]) => ({ x, y });

const hexColorToWheelPosition = (color, radius) =>
  pipe(
    colorToHsv,
    rotateHue(90),
    nanToZero,
    hsvToPolar,
    polarToCartesian,
    scale2d(radius, radius),
    transform2d(radius, radius),
    toPointObject
  )(color);

const getHsvValue = color => chroma(color).hsv()[2];

const wheelPositionToHexColor = (x, y, radius, originalColor) => {
  const color = pipe(
    toPointArray,
    transform2d(-radius, -radius),
    scale2d(1 / radius, -1 / radius),
    cartesianToPolar,
    polarToHsv(radius, getHsvValue(originalColor)),
    scaleSat(radius / 1),
    rotateHue(0),
    hsvToHex
  )({ x, y });
  return color;
};

const toPointArray = ({ x, y }) => [x, y];

export { hexColorToWheelPosition, wheelPositionToHexColor };
