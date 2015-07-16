'use strict';

var _ = require('lodash');
var Illuminance = require('./illuminance.model');

// Get list of illuminances
exports.index = function(req, res) {
  Illuminance.find().limit(290).exec(function (err, illuminances) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(illuminances);
  });
};

// Get a single illuminance
exports.show = function(req, res) {
  Illuminance.findById(req.params.id, function (err, illuminance) {
    if(err) { return handleError(res, err); }
    if(!illuminance) { return res.status(404).send('Not Found'); }
    return res.json(illuminance);
  });
};

// Creates a new illuminance in the DB.
exports.create = function(req, res) {
  Illuminance.create(req.body, function(err, illuminance) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(illuminance);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
