'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _geminiScrollbar = require('gemini-scrollbar');

var _geminiScrollbar2 = _interopRequireDefault(_geminiScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeminiScrollbar = function (_Component) {
  _inherits(GeminiScrollbar, _Component);

  function GeminiScrollbar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, GeminiScrollbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(GeminiScrollbar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.scrollbar = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GeminiScrollbar, [{
    key: 'getDefaultProps',
    value: function getDefaultProps() {
      return {
        autoshow: false,
        forceGemini: false
      };
    }

    /**
     * Holds the reference to the GeminiScrollbar instance.
     * @property scrollbar <public> [Object]
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.refs.container);
      this.scrollbar = new _geminiScrollbar2.default({
        element: this.refs.container,
        autoshow: this.props.autoshow,
        forceGemini: this.props.forceGemini,
        createElements: false
      }).create();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollbar.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollbar) {
        this.scrollbar.destroy();
      }
      this.scrollbar = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var autoshow = _props.autoshow;
      var forceGemini = _props.forceGemini;

      var other = _objectWithoutProperties(_props, ['className', 'children', 'autoshow', 'forceGemini']);

      var classes = '';

      if (className) {
        classes += ' ' + className;
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: classes, ref: 'container' }, other),
        _react2.default.createElement(
          'div',
          { className: 'gm-scrollbar -vertical' },
          _react2.default.createElement('div', { className: 'thumb' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'gm-scrollbar -horizontal' },
          _react2.default.createElement('div', { className: 'thumb' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'gm-scroll-view', ref: 'scroll-view' },
          children
        )
      );
    }
  }]);

  return GeminiScrollbar;
}(_react.Component);

GeminiScrollbar.propTypes = {
  autoshow: _react2.default.PropTypes.bool,
  forceGemini: _react2.default.PropTypes.bool
};
exports.default = GeminiScrollbar;
