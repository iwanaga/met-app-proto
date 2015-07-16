'use strict';

angular.module('metAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('illuminance', {
        url: '/illuminance',
        templateUrl: 'app/illuminance/illuminance.html',
        controller: 'IlluminanceCtrl'
      });
  });