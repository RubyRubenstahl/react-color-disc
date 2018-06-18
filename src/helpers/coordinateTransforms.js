import chroma from "chroma-js";
import pipe from "lodash/fp/pipe";
import {
  nanToZero,
  hslToPolar,
  polarToCartesian,
  scale2d,
  transform2d,
  cartesianToPolar,
  polarToHsl
} from "./math";

// Take a hex color and convert it to HSV arrary
const colorToHsl = color => chroma(color).hsv();

// Take a hex color and convert it to HSV arrary
const hsvToHex = ([h, s, v]) => chroma.hsv(h, s, v).hex();

// Scale the saturation value in an HSL array
const scaleSat = scale => ([h, s, l]) => [h, s * scale, l];

const wrapAngle = angle => angle % 360;

// Add to the hue angle
const rotateHue = angle => ([h, s, l]) => [wrapAngle(h + angle), s, l];

// convert from [x,y] to {x,y}
const toPointObject = ([x, y]) => ({ x, y });

const hexColorToWheelPosition = (color, radius) =>
  pipe(
    colorToHsl,
    rotateHue(90),
    nanToZero,
    hslToPolar,
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
    polarToHsl(radius, getHsvValue(originalColor)),
    scaleSat(radius / 1),
    rotateHue(0),
    hsvToHex
  )({ x, y });
  return color;
};

const toPointArray = ({ x, y }) => [x, y];

export { hexColorToWheelPosition, wheelPositionToHexColor };
