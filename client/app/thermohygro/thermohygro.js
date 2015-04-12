'use strict';

angular.module('metAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thermohygro', {
        url: '/thermohygro',
        templateUrl: 'app/thermohygro/thermohygro.html',
        controller: 'ThermohygroCtrl'
      });
  });
