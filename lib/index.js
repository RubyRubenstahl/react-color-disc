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
'use strict';

var _drawColorWheel = require('./drawColorWheel');

describe('indexTo2d', function () {
  test('returns an point object', function () {
    return expect((0, _drawColorWheel.indexTo2d)(0, 100, 100)).toEqual({ x: 0, y: 0 });
  });

  test('returns a correct coordinate', function () {
    return expect((0, _drawColorWheel.indexTo2d)(255, 100, 100)).toEqual({ x: 55, y: 2 });
  });
});
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _konva = require("konva");

var _konva2 = _interopRequireDefault(_konva);

var _reactKonva = require("react-konva");

var _color_wheel = require("../assets/color_wheel.png");

var _color_wheel2 = _interopRequireDefault(_color_wheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wheel = function (_React$Component) {
  _inherits(Wheel, _React$Component);

  function Wheel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Wheel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wheel.__proto__ || Object.getPrototypeOf(Wheel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      image: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Wheel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Dynamically load the image, required by react-konva
      var image = new window.Image();
      console.log(_color_wheel2.default);
      image.src = _color_wheel2.default;
      image.onload = function () {
        // setState will redraw layer
        // because "image" property is changed
        _this2.setState({
          image: image
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          radius = _props.radius,
          rest = _objectWithoutProperties(_props, ["radius"]);

      return _react2.default.createElement(_reactKonva.Image, _extends({
        image: this.state.image,
        width: radius * 2,
        height: radius * 2
      }, rest));
    }
  }]);

  return Wheel;
}(_react2.default.Component);

Wheel.propTypes = {};

exports.default = Wheel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ColorWheel = require("../../ColorWheel");

var _ColorWheel2 = _interopRequireDefault(_ColorWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledColorWheel = function (_React$Component) {
  _inherits(ControlledColorWheel, _React$Component);

  function ControlledColorWheel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ControlledColorWheel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControlledColorWheel.__proto__ || Object.getPrototypeOf(ControlledColorWheel)).call.apply(_ref, [this].concat(args))), _this), _this.state = { color: "#0d5cd2" }, _this.handleColorChange = function (color) {
      _this.setState({ color: color });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ControlledColorWheel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setRadius();
      window.addEventListener("resize", function () {
        _this2.setRadius();
      });
    }
  }, {
    key: "setRadius",
    value: function setRadius() {
      var radius = Math.min(window.innerWidth, window.innerHeight) * 0.18;
      console.log("Radius: " + radius);
      this.setState({ radius: radius });
    }
  }, {
    key: "render",
    value: function render() {
      var bgStyle = {
        backgroundColor: "#444",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };

      var wheelStyle = _extends({}, bgStyle, {
        backgroundColor: "#444",
        width: "50vmin",
        height: "50vmin",
        borderRadius: "50vmin",
        paddingLeft: 4
      });

      var outerRingStyle = _extends({}, bgStyle, {
        backgroundColor: this.state.color,
        boxShadow: "rgba(14, 14, 14, 0.15) 3px 3px 20px 20px inset",
        width: "63vmin",
        height: "63vmin",
        borderRadius: "34vmin"
      });

      return _react2.default.createElement(
        "div",
        { style: bgStyle },
        _react2.default.createElement(
          "div",
          { style: outerRingStyle },
          _react2.default.createElement(
            "div",
            { style: wheelStyle },
            _react2.default.createElement(_ColorWheel2.default, {
              color: this.state.color,
              onChange: this.handleColorChange,
              radius: this.state.radius
            })
          )
        )
      );
    }
  }]);

  return ControlledColorWheel;
}(_react2.default.Component);

exports.default = ControlledColorWheel;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ControlledColorWheel = require('./ControlledColorWheel');

var _ControlledColorWheel2 = _interopRequireDefault(_ControlledColorWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ControlledColorWheel2.default;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColorWheel = require('./ColorWheel');

var _ColorWheel2 = _interopRequireDefault(_ColorWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ColorWheel2.default;
