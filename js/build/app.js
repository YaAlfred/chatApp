'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Chat = require('./components/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contact = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(_Logo2.default, null),
        ' Welcome to The Chat App!'
    ),
    _react2.default.createElement(_Chat2.default, null)
);

_reactDom2.default.render(contact, document.getElementById('app'));