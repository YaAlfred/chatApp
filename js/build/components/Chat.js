'use strict';

var _ChatBox = require('./ChatBox');

var _MessageStore = require('./MessageStore');

var _MessageStore2 = _interopRequireDefault(_MessageStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var Chat = React.createClass({
    displayName: 'Chat',

    getInitialState: function getInitialState() {
        return {
            messages: _MessageStore2.default.getMessages()
        };
    },

    componentWillMount: function componentWillMount() {
        _MessageStore2.default.subscribe(this.updateMessages);
    },

    componentWillUnmount: function componentWillUnmount() {
        _MessageStore2.default.unsubscribe(this.updateMessages);
    },

    updateMessages: function updateMessages() {
        this.setState({
            messages: _MessageStore2.default.getMessages()
        });
    },

    onSend: function onSend(newMessage) {
        _MessageStore2.default.newMessage(newMessage);
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(_ChatBox.ChatList, { messages: this.state.messages }),
            React.createElement(_ChatBox.ChatBox, { onSend: this.onSend })
        );
    }
});

module.exports = Chat;