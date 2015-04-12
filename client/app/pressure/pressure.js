'use strict';

angular.module('metAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pressure', {
        url: '/pressure',
        templateUrl: 'app/pressure/pressure.html',
        controller: 'PressureCtrl'
      });
  });