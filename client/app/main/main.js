'use strict';

angular.module('metAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          thermohygro: {
            templateUrl: 'app/thermohygro/thermohygro.html',
            controller: 'ThermohygroCtrl'
          },
          pressure: {
            templateUrl: 'app/pressure/pressure.html',
            controller: 'PressureCtrl'
          },
          illuminance: {
            templateUrl: 'app/illuminance/illuminance.html',
            controller: 'IlluminanceCtrl'
          }
        }
      }
    )

  });
