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