'use strict';

import React from 'react';
var EventEmitter = require('events').EventEmitter;
//var Realm = require('realm');
//import Realm from 'react-native';

/*var realm = new Realm({
    schema: [{name: 'messages', properties: {name: 'string'}}]
});*/

var emitter = new EventEmitter();


module.exports = {
    getMessages: function() {
        let messages = []
        /*let data = realm.objects('messages');
        data.forEach(function(item, i, arr) {
            messages.push(item);
        });*/
        return messages.concat();
    },

    subscribe: function(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function(message) {
        /*realm.write(() => {
            realm.create('messages', {name: message});
        });*/
        //messages.push(message);
        emitter.emit('update');
    }
};
