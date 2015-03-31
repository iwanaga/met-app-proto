/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Thermohygro = require('./thermohygro.model');

exports.register = function(socket) {
  Thermohygro.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Thermohygro.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('thermohygro:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thermohygro:remove', doc);
}
