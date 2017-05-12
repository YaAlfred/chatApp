'use strict';

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

module.exports = {
    getMessages: function getMessages() {
        var promice = new Promise(function (resolve, reject) {
            $.ajax({
                url: "/phpCRUID/list.php",
                type: 'POST',
                dataType: 'text',
                async: false
            }).done(function (data) {
                if (data.length > 0) {
                    var messages = $.parseJSON(data);
                    return messages.concat();
                }
            }).fail(function (xhr) {
                console.log('error', xhr);
            });
        });
        promice.then(function (value) {
            return value; // Успех!
        }, function (reason) {
            console.log(reason); // Ошибка!
        });
    },

    subscribe: function subscribe(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function unsubscribe(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function newMessage(message, name) {
        $.ajax({
            type: 'POST',
            url: '/phpCRUID/additem.php',
            data: { "message": message, "author": name }
        }).done(function (data) {
            console.log('success: ' + data);
        }).fail(function (jqXhr) {
            console.log('failed to register');
        });
        emitter.emit('update');
    }
};