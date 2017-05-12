import React from 'react';

var ChatBox = React.createClass({

    getInitialState: function() {
        return {
          input: ''
        };
    },

    handleChange:function (event) {
        this.setState({value: event.target.value});
    },

    handleSubmit:function (event) {
        event.preventDefault();

        this.props.onSend(this.state.input);

        this.setState({
            input: ''
        });
    },

    updateInput: function(event) {
        this.setState({ input: event.target.value });
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input className="shout_box" value={this.state.input} onChange={this.updateInput} type="text" placeholder="Write your message here" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

});

var ChatMessage = React.createClass({
    render: function() {
        return <p>{this.props.message}</p>;
    }
});

var ChatList = React.createClass({
    render: function() {
        var messages = this.props.messages.map(function(msg) {
            return <ChatMessage message={msg} />;
        });

        return <div>{messages}</div>;
    }
});

module.exports = {
    ChatBox,
    ChatList,
    ChatMessage
}
