'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageStoreSQL = require('./MessageStoreSQL');

var _MessageStoreSQL2 = _interopRequireDefault(_MessageStoreSQL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = _react2.default.createClass({
    displayName: 'Logo',


    clearChat: function clearChat(event) {
        event.preventDefault();
        _MessageStoreSQL2.default.clearChat();
    },

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'header' },
            _react2.default.createElement('div', { className: 'Logo' }),
            _react2.default.createElement('input', { type: 'button', value: 'clearAll', onClick: this.clearChat })
        );
    }
});

module.exports = Logo;