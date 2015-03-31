'use strict';

var mongoose  = require('mongoose'),
    timestamp = require('mongoose-timestamp'),
    Schema    = mongoose.Schema;

var ThermohygroSchema = new Schema({
  temperature: Number,
  humidity:    Number,
  heatIndex:   Number
});

ThermohygroSchema.plugin(timestamp);
ThermohygroSchema.index({createdAt: 1});
module.exports = mongoose.model('Thermohygro', ThermohygroSchema);
