'use strict';

var _ = require('lodash');
var Thermohygro = require('./thermohygro.model');

// Get list of thermohygros
exports.index = function(req, res) {
  Thermohygro.find({createdAt: {$gt: new Date(new Date() - 24 * 60 * 60 * 1000)}}).limit(290).exec(function (err, thermohygros) {
    if(err) { return handleError(res, err); }
    return res.json(200, thermohygros);
  });
};

// Get a single thermohygro
exports.show = function(req, res) {
  Thermohygro.findById(req.params.id, function (err, thermohygro) {
    if(err) { return handleError(res, err); }
    if(!thermohygro) { return res.send(404); }
    return res.json(thermohygro);
  });
};

// Creates a new thermohygro in the DB.
exports.create = function(req, res) {
  Thermohygro.create(req.body, function(err, thermohygro) {
    if(err) { return handleError(res, err); }
    return res.json(201, thermohygro);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
