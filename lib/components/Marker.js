"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactKonva = require("react-konva");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Marker(_ref) {
  var pos = _ref.pos,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 15 : _ref$radius,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeColor = _ref.strokeColor,
      strokeColor = _ref$strokeColor === undefined ? "#AAA" : _ref$strokeColor,
      _ref$shadowOffset = _ref.shadowOffset,
      shadowOffset = _ref$shadowOffset === undefined ? { x: 1, y: 1 } : _ref$shadowOffset,
      _ref$shadowOpacity = _ref.shadowOpacity,
      shadowOpacity = _ref$shadowOpacity === undefined ? 0.3 : _ref$shadowOpacity,
      rest = _objectWithoutProperties(_ref, ["pos", "radius", "strokeWidth", "strokeColor", "shadowOffset", "shadowOpacity"]);

  return _react2.default.createElement(_reactKonva.Circle, _extends({
    x: pos.x,
    y: pos.y,
    width: radius,
    height: radius,
    strokeWidth: strokeWidth,
    stroke: strokeColor,
    shadowOffset: shadowOffset,
    shadowOpacity: shadowOpacity,
    listening: false
  }, rest));
}

Marker.propTypes = {
  pos: _propTypes2.default.object,
  radius: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  strokeColor: _propTypes2.default.string,
  shadowOffset: _propTypes2.default.number,
  shadowOpacity: _propTypes2.default.number
};

exports.default = Marker;