/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Illuminance = require('./illuminance.model');

exports.register = function(socket) {
  Illuminance.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Illuminance.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('illuminance:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('illuminance:remove', doc);
}