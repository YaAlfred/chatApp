var React = require('react');

import { ChatList, ChatBox } from './ChatBox';
import MessageStore from './MessageStoreSQL';

var Chat = React.createClass({

    getInitialState: function() {
        let enterName =  prompt('Please enter your name');
        let getLastMessages = MessageStore.getMessages();
        return {
            messages: getLastMessages,
            author: enterName
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
        MessageStore.newMessage(newMessage, this.state.author);
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
