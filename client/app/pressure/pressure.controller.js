'use strict';

angular.module('metAppApp')
  .controller('PressureCtrl', function ($scope, pressureService) {
    var pressures = pressureService.query(function () {
      $scope.data = pressures;
    })
  });
