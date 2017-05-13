'use strict';

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var messages = [];

module.exports = {
    getMessages: function getMessages() {
        $.ajax({
            url: "/phpCRUID/list.php",
            type: 'POST',
            dataType: 'text',
            async: false
        }).done(function (data) {
            if (data.length > 0) {
                messages = $.parseJSON(data);
            }
        }).fail(function () {
            console.log("error 1");
        });
        return messages.concat();
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
    },

    clearChat: function clearChat() {
        $.ajax({
            type: 'POST',
            url: '/phpCRUID/deleteAll.php'
        }).done(function (data) {
            alert(data);
        }).fail(function (jqXhr) {
            console.log('failed to delete messages!');
        });
        emitter.emit('update');
    }
};