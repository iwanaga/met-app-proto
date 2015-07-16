'use strict';

angular.module('metAppApp')
  .controller('IlluminanceCtrl', function ($scope, illuminanceService) {
    illuminanceService.query(function (data) {
      $scope.illuminances = data;
    });
  });
