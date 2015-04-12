/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Thermohygro = require('../api/thermohygro/thermohygro.model');
var Pressure = require('../api/pressure/pressure.model');

Thermohygro.find({}).remove(function () {
  Thermohygro.create({
      temperature: Math.random() * (30 - 5) + 5,
      humidity: Math.random() * (80 - 20) + 20,
      heatIndex: Math.random() * (80 - 20) + 20
    }, {
      temperature: Math.random() * (30 - 5) + 5,
      humidity: Math.random() * (80 - 20) + 20,
      heatIndex: Math.random() * (80 - 20) + 20
    }, {
      temperature: Math.random() * (30 - 5) + 5,
      humidity: Math.random() * (80 - 20) + 20,
      heatIndex: Math.random() * (80 - 20) + 20
    }, {
      temperature: Math.random() * (30 - 5) + 5,
      humidity: Math.random() * (80 - 20) + 20,
      heatIndex: Math.random() * (80 - 20) + 20
    }, {
      temperature: Math.random() * (30 - 5) + 5,
      humidity: Math.random() * (80 - 20) + 20,
      heatIndex: Math.random() * (80 - 20) + 20
    }
  );
});

Pressure.find({}).remove(function() {
  Pressure.create({
    pressure: Math.random() * (1030 - 990) + 990
  }, {
    pressure: Math.random() * (1030 - 990) + 990
  }, {
    pressure: Math.random() * (1030 - 990) + 990
  },  {
    pressure: Math.random() * (1030 - 990) + 990
  },  {
    pressure: Math.random() * (1030 - 990) + 990
  },{
    pressure: Math.random() * (1030 - 990) + 990
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
