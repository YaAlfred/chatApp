'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatBox = _react2.default.createClass({
    displayName: 'ChatBox',


    getInitialState: function getInitialState() {
        return {
            input: ''
        };
    },

    handleChange: function handleChange(event) {
        this.setState({ value: event.target.value });
    },

    handleSubmit: function handleSubmit(event) {
        event.preventDefault();

        this.props.onSend(this.state.input);

        this.setState({
            input: ''
        });
    },

    updateInput: function updateInput(event) {
        this.setState({ input: event.target.value });
    },

    render: function render() {
        return _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { className: 'shout_box', value: this.state.input, onChange: this.updateInput, type: 'text', placeholder: 'Write your message here' })
            ),
            _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
        );
    }

});

var ChatMessage = _react2.default.createClass({
    displayName: 'ChatMessage',

    render: function render() {
        return _react2.default.createElement(
            'p',
            null,
            this.props.message
        );
    }
});

var ChatList = _react2.default.createClass({
    displayName: 'ChatList',

    render: function render() {
        var messages = this.props.messages.map(function (msg) {
            return _react2.default.createElement(ChatMessage, { message: msg });
        });

        return _react2.default.createElement(
            'div',
            null,
            messages
        );
    }
});

module.exports = {
    ChatBox: ChatBox,
    ChatList: ChatList,
    ChatMessage: ChatMessage
};