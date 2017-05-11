'use strict';

var _sqlite = require('sqlite');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = require('events').EventEmitter;


//let db = new sqlite3.Database('../data.db');

var emitter = new EventEmitter();

//var messages = [];
/*db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS messages (message TEXT)");
});*/
//db.close();

module.exports = {

    getMessages: function getMessages() {
        var messages = [];
        /*let db = new sqlite3.Database('../data.db');
        db.serialize(function() {
            db.each("SELECT rowid AS id, message FROM messages", function(err, row) {
                console.log(row.id + ": " + row.message);
                messages.push(row.message)
            });
        });*/
        //db.close();
        return messages.concat();
    },

    subscribe: function subscribe(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function unsubscribe(callback) {
        emitter.removeListener('update', callback);
    },

    newMessage: function newMessage(message) {
        /*let db = new sqlite3.Database('../data.db');
        db.serialize(function() {
            var stmt = db.prepare("INSERT INTO messages VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();
        });*/
        //db.close();
        //messages.push(message);

        //emitter.emit('update');
    }
};