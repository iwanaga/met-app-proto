'use strict';

angular.module('metAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thermohygro', {
        url: '/',
        templateUrl: 'app/thermohygro/thermohygro.html',
        controller: 'ThermohygroCtrl'
      });
  });
