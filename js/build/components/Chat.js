'use strict';

var _ChatBox = require('./ChatBox');

var _MessageStoreSQL = require('./MessageStoreSQL');

var _MessageStoreSQL2 = _interopRequireDefault(_MessageStoreSQL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var Chat = React.createClass({
    displayName: 'Chat',


    getInitialState: function getInitialState() {
        var enterName = prompt('Please enter your name');
        var getLastMessages = _MessageStoreSQL2.default.getMessages();
        return {
            messages: getLastMessages,
            author: enterName
        };
    },

    componentWillMount: function componentWillMount() {
        _MessageStoreSQL2.default.subscribe(this.updateMessages);
    },

    componentWillUnmount: function componentWillUnmount() {
        _MessageStoreSQL2.default.unsubscribe(this.updateMessages);
    },

    updateMessages: function updateMessages() {
        this.setState({
            messages: _MessageStoreSQL2.default.getMessages()
        });
    },

    onSend: function onSend(newMessage) {
        _MessageStoreSQL2.default.newMessage(newMessage, this.state.author);
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