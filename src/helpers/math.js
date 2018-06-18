// Covnert degress to radians
const deg2Rad = deg => Math.PI / 180 * deg;

const rad2Deg = rad => rad * 180 / Math.PI;

// Convert from polar to cartesian coordinates
const polarToCartesian = ([angle, radius]) => [
  radius * Math.sin(angle),
  radius * Math.cos(angle)
];

const transform2d = (xOffset = 0, yOffset = 0) => ([x, y]) => [
  x + xOffset,
  y + yOffset
];

const scale2d = (xScale = 0, yScale = 0) => ([x, y]) => [
  x * xScale,
  y * yScale
];

const pythag = (a, b) => Math.sqrt(a * a + b * b);

const cartesianToPolar = ([x, y]) => [Math.atan2(y, x), pythag(x, y)];

// Replace any NaNs in an array with 0
const nanToZero = vals => vals.map(val => (isNaN(val) ? 0 : val));

// Convert the hue dgrees to radians and drop the value and we have polar coordinates
const hslToPolar = ([h, s, l]) => [deg2Rad(h), s];

const polarToHsl = (maxRadius, value) => ([angle, radius]) => [
  rad2Deg(angle),
  radius / maxRadius,
  value
];

export {
  nanToZero,
  hslToPolar,
  polarToCartesian,
  scale2d,
  transform2d,
  cartesianToPolar,
  polarToHsl,
  rad2Deg,
  deg2Rad,
  pythag
};
