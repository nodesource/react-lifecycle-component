'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIs = require('react-is');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable no-unused-vars*/


var Lifecycle = function (_Component) {
	_inherits(Lifecycle, _Component);

	function Lifecycle() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Lifecycle);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lifecycle.__proto__ || Object.getPrototypeOf(Lifecycle)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Lifecycle', _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Lifecycle, [{
		key: 'execute',
		value: function execute(fn) {
			var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			var defaultValue = arguments[2];

			return fn ? fn.call.apply(fn, [this].concat(_toConsumableArray(args))) : defaultValue;
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.execute(this.props.componentWillMount);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.execute(this.props.componentDidMount);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			this.execute(this.props.componentWillReceiveProps, args);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			this.execute(this.props.componentWillUpdate, args);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			this.execute(this.props.componentDidUpdate, args);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.execute(this.props.componentWillUnmount);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			return this.execute(this.props.shouldComponentUpdate, args, true);
		}
	}, {
		key: 'componentDidCatch',
		value: function componentDidCatch(error, info) {
			this.execute(this.props.componentDidCatch, [error, info]);
		}
	}, {
		key: 'render',
		value: function render() {
			var Comp = this.props.component;

			var _props = this.props,
			    componentWillMount = _props.componentWillMount,
			    componentDidMount = _props.componentDidMount,
			    componentWillReceiveProps = _props.componentWillReceiveProps,
			    componentWillUpdate = _props.componentWillUpdate,
			    componentDidUpdate = _props.componentDidUpdate,
			    componentWillUnmount = _props.componentWillUnmount,
			    shouldComponentUpdate = _props.shouldComponentUpdate,
			    componentDidCatch = _props.componentDidCatch,
			    realProps = _objectWithoutProperties(_props, ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'shouldComponentUpdate', 'componentDidCatch']);

			return _react2.default.createElement(Comp, realProps);
		}
	}]);

	return Lifecycle;
}(_react.Component);

Lifecycle.propTypes = {
	component: function component(props, propName) {
		if ((0, _reactIs.isValidElementType)(props[propName])) {
			return null;
		} else {
			return new Error('Invalid prop `' + propName + '` of type `' + _typeof(props[propName]) + '` supplied to `Lifecycle`, expected `elementType`.');
		}
	},
	componentDidMount: _propTypes2.default.func,
	componentDidUpdate: _propTypes2.default.func,
	componentWillMount: _propTypes2.default.func,
	componentWillReceiveProps: _propTypes2.default.func,
	componentWillUnmount: _propTypes2.default.func,
	componentWillUpdate: _propTypes2.default.func,
	shouldComponentUpdate: _propTypes2.default.func,
	componentDidCatch: _propTypes2.default.func
};
exports.default = Lifecycle;