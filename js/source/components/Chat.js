var React = require('react');

import { ChatList, ChatBox } from './ChatBox';
import MessageStore from './MessageStore';

var Chat = React.createClass({
    getInitialState: function() {
        return {
            messages: MessageStore.getMessages()
        };
    },

    componentWillMount: function() {
        MessageStore.subscribe(this.updateMessages);
    },

    componentWillUnmount: function() {
        MessageStore.unsubscribe(this.updateMessages);
    },

    updateMessages: function() {
        this.setState({
            messages: MessageStore.getMessages()
        });
    },

    onSend: function(newMessage) {
        MessageStore.newMessage(newMessage);
    },

    render: function() {
        return (
            <div>
                <ChatList messages={this.state.messages} />
                <ChatBox onSend={this.onSend} />
            </div>
        );
    }
});

module.exports = Chat;
