"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wheelPositionToHexColor = exports.hexColorToWheelPosition = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chromaJs = require("chroma-js");

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _pipe = require("lodash/fp/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

var _math = require("./math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Take a hex color and convert it to HSV arrary
var colorToHsv = function colorToHsv(color) {
  return (0, _chromaJs2.default)(color).hsv();
};

// Take a hex color and convert it to HSV arrary
var hsvToHex = function hsvToHex(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      h = _ref2[0],
      s = _ref2[1],
      v = _ref2[2];

  return _chromaJs2.default.hsv(h, s, v).hex();
};

// Scale the saturation value in an HSV array
var scaleSat = function scaleSat(scale) {
  return function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        h = _ref4[0],
        s = _ref4[1],
        v = _ref4[2];

    return [h, s * scale, v];
  };
};

var wrapAngle = function wrapAngle(angle) {
  return angle % 360;
};

// Add to the hue angle
var rotateHue = function rotateHue(angle) {
  return function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 3),
        h = _ref6[0],
        s = _ref6[1],
        v = _ref6[2];

    return [wrapAngle(h + angle), s, v];
  };
};

// convert from [x,y] to {x,y}
var toPointObject = function toPointObject(_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];

  return { x: x, y: y };
};

var hexColorToWheelPosition = function hexColorToWheelPosition(color, radius) {
  return (0, _pipe2.default)(colorToHsv, rotateHue(90), _math.nanToZero, _math.hsvToPolar, _math.polarToCartesian, (0, _math.scale2d)(radius, radius), (0, _math.transform2d)(radius, radius), toPointObject)(color);
};

var getHsvValue = function getHsvValue(color) {
  return (0, _chromaJs2.default)(color).hsv()[2];
};

var wheelPositionToHexColor = function wheelPositionToHexColor(x, y, radius, originalColor) {
  var color = (0, _pipe2.default)(toPointArray, (0, _math.transform2d)(-radius, -radius), (0, _math.scale2d)(1 / radius, -1 / radius), _math.cartesianToPolar, (0, _math.polarToHsv)(radius, getHsvValue(originalColor)), scaleSat(radius / 1), rotateHue(0), hsvToHex)({ x: x, y: y });
  return color;
};

var toPointArray = function toPointArray(_ref9) {
  var x = _ref9.x,
      y = _ref9.y;
  return [x, y];
};

exports.hexColorToWheelPosition = hexColorToWheelPosition;
exports.wheelPositionToHexColor = wheelPositionToHexColor;