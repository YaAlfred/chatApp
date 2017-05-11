'use strict';

var EventEmitter = require('events').EventEmitter;
var sqlite = require('sqlite3').verbose();

var db = new sqlite3.Database('../data.db');

var emitter = new EventEmitter();

//var messages = [];
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS messages (message TEXT)");
});
db.close();

var MessageStore = React.createClass({

    getMessages: function() {
        let messages = []
        let db = new sqlite3.Database('../data.db');
        db.serialize(function() {
            db.each("SELECT rowid AS id, message FROM messages", function(err, row) {
                console.log(row.id + ": " + row.message);
                messages.push(row.message)
            });
        });
        db.close();
        return messages.concat();
    },

    subscribe: function(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function(message) {
        let db = new sqlite3.Database('../data.db');
        db.serialize(function() {
            var stmt = db.prepare("INSERT INTO messages VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();
        });
        db.close();
        messages.push(message);

        emitter.emit('update');
    }
});

module.exports = MessageStore;
