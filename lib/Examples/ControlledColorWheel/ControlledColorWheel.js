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