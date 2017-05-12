'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = require('events').EventEmitter;
//var Realm = require('realm');
//import Realm from 'react-native';

/*var realm = new Realm({
    schema: [{name: 'messages', properties: {name: 'string'}}]
});*/

var emitter = new EventEmitter();

module.exports = {
    getMessages: function getMessages() {
        var messages = [];
        /*let data = realm.objects('messages');
        data.forEach(function(item, i, arr) {
            messages.push(item);
        });*/
        return messages.concat();
    },

    subscribe: function subscribe(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function unsubscribe(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function newMessage(message) {
        /*realm.write(() => {
            realm.create('messages', {name: message});
        });*/
        //messages.push(message);
        emitter.emit('update');
    }
};