'use strict';

var mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp'),
    Schema = mongoose.Schema;

var IlluminanceSchema = new Schema({
    illuminance: Number
});

IlluminanceSchema.plugin(timestamp);
IlluminanceSchema.index({createdAt: 1});
module.exports = mongoose.model('Illuminance', IlluminanceSchema);
