import React from 'react';
import MessageStore from './MessageStoreSQL';

var Logo = React.createClass({

    clearChat:function (event) {
        event.preventDefault();
        MessageStore.clearChat();
    },

    render: function() {
        return (
            <div className="header">
                <div className="Logo" />
                <input type="button" value="clearAll" onClick={this.clearChat} />
            </div>
        );
    }
});

module.exports = Logo;
