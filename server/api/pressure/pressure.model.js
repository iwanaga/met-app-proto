'use strict';

var mongoose  = require('mongoose'),
    timestamp = require('mongoose-timestamp'),
    Schema    = mongoose.Schema;

var PressureSchema = new Schema({
  pressure: Number
});

PressureSchema.plugin(timestamp);
PressureSchema.index({createdAt: 1});
module.exports = mongoose.model('Pressure', PressureSchema);
