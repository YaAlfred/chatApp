var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

module.exports = {
    getMessages: function() {
        let messages = [];
        $.ajax({
            url: "/phpCRUID/list.php",
            type: 'POST',
            dataType:'text',
            success: function(data) {
                //console.log('get list' + data);
                if(data.length > 0){
                    messages = $.parseJSON(data);
                    return messages.concat();
                }
           },
           async: false,
        });
        return messages.concat();
    },

    subscribe: function(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function(message, name) {
        $.ajax({
            type: 'POST',
            url: '/phpCRUID/additem.php',
            data: {"message": message, "author": name}
        })
        .done(function(data) {
            console.log('success: ' + data);
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });
        emitter.emit('update');
    }
};
