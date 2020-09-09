'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _applyLifecycle = require('../applyLifecycle');

var _applyLifecycle2 = _interopRequireDefault(_applyLifecycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (mapStateToProps, mapDispatchToProps, mergeProps) {
	return function (component) {
		var connected = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps), _applyLifecycle2.default);
		return connected(component);
	};
};