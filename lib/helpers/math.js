"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Covnert degress to radians
var deg2Rad = function deg2Rad(deg) {
  return Math.PI / 180 * deg;
};

var rad2Deg = function rad2Deg(rad) {
  return rad * 180 / Math.PI;
};

// Convert from polar to cartesian coordinates
var polarToCartesian = function polarToCartesian(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      angle = _ref2[0],
      radius = _ref2[1];

  return [radius * Math.sin(angle), radius * Math.cos(angle)];
};

var transform2d = function transform2d() {
  var xOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return [x + xOffset, y + yOffset];
  };
};

var scale2d = function scale2d() {
  var xScale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var yScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];

    return [x * xScale, y * yScale];
  };
};

var pythag = function pythag(a, b) {
  return Math.sqrt(a * a + b * b);
};

var cartesianToPolar = function cartesianToPolar(_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];

  return [Math.atan2(y, x), pythag(x, y)];
};

// Replace any NaNs in an array with 0
var nanToZero = function nanToZero(vals) {
  return vals.map(function (val) {
    return isNaN(val) ? 0 : val;
  });
};

// Convert the hue dgrees to radians and drop the value and we have polar coordinates
var hsvToPolar = function hsvToPolar(_ref9) {
  var _ref10 = _slicedToArray(_ref9, 3),
      h = _ref10[0],
      s = _ref10[1],
      l = _ref10[2];

  return [deg2Rad(h), s];
};

var polarToHsv = function polarToHsv(maxRadius, value) {
  return function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        angle = _ref12[0],
        radius = _ref12[1];

    return [rad2Deg(angle), radius / maxRadius, value];
  };
};

exports.nanToZero = nanToZero;
exports.hsvToPolar = hsvToPolar;
exports.polarToCartesian = polarToCartesian;
exports.scale2d = scale2d;
exports.transform2d = transform2d;
exports.cartesianToPolar = cartesianToPolar;
exports.polarToHsv = polarToHsv;
exports.rad2Deg = rad2Deg;
exports.deg2Rad = deg2Rad;
exports.pythag = pythag;