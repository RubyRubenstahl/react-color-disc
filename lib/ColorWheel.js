"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _konva = require("konva");

var _konva2 = _interopRequireDefault(_konva);

var _reactKonva = require("react-konva");

var _Wheel = require("./components/Wheel");

var _Wheel2 = _interopRequireDefault(_Wheel);

var _coordinateTransforms = require("./helpers/coordinateTransforms");

var _Marker = require("./components/Marker");

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWheel = function (_React$Component) {
  _inherits(ColorWheel, _React$Component);

  function ColorWheel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorWheel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorWheel.__proto__ || Object.getPrototypeOf(ColorWheel)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseEvent = function (radius) {
      return function (e) {
        var _e$evt = e.evt,
            layerX = _e$evt.layerX,
            layerY = _e$evt.layerY;

        var hexColor = (0, _coordinateTransforms.wheelPositionToHexColor)(layerX, layerY, radius, _this.props.color);
        _this.props.onChange && _this.props.onChange(hexColor);
      };
    }, _this.handleMouseMove = function (radius) {
      return function (e) {
        // debugger
        if (e.evt.buttons && e.evt.button == 0) {
          _this.handleMouseEvent(radius)(e);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorWheel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.radius !== nextProps.radius || this.props.color !== nextProps.color;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$radius = _props.radius,
          radius = _props$radius === undefined ? 150 : _props$radius,
          _props$color = _props.color,
          color = _props$color === undefined ? "white" : _props$color,
          _props$markerRadius = _props.markerRadius,
          markerRadius = _props$markerRadius === undefined ? 15 : _props$markerRadius;

      var r = radius;
      var markerPos = (0, _coordinateTransforms.hexColorToWheelPosition)(color, radius);
      var diameter = radius * 2;
      return _react2.default.createElement(
        _reactKonva.Stage,
        { width: diameter, height: diameter },
        _react2.default.createElement(
          _reactKonva.Layer,
          null,
          _react2.default.createElement(_Wheel2.default, {
            radius: r,
            onClick: this.handleMouseEvent(r),
            onMouseMove: this.handleMouseMove(r)
          })
        ),
        _react2.default.createElement(
          _reactKonva.Layer,
          null,
          _react2.default.createElement(_Marker2.default, { pos: markerPos, radius: markerRadius })
        )
      );
    }
  }]);

  return ColorWheel;
}(_react2.default.Component);

ColorWheel.propTypes = {
  color: _propTypes2.default.string,
  radius: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  markerRadius: _propTypes2.default.number
};

exports.default = ColorWheel;