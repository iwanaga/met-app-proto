'use strict';

var _ = require('lodash');
var Pressure = require('./pressure.model');

// Get list of pressures
exports.index = function(req, res) {
  Pressure.find(function (err, pressures) {
    if(err) { return handleError(res, err); }
    return res.json(200, pressures);
  });
};

// Get a single pressure
exports.show = function(req, res) {
  Pressure.findById(req.params.id, function (err, pressure) {
    if(err) { return handleError(res, err); }
    if(!pressure) { return res.send(404); }
    return res.json(pressure);
  });
};

// Creates a new pressure in the DB.
exports.create = function(req, res) {
  Pressure.create(req.body, function(err, pressure) {
    if(err) { return handleError(res, err); }
    return res.json(201, pressure);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
