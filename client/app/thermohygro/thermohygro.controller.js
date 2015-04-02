'use strict';

angular.module('metAppApp')
  .controller('ThermohygroCtrl', function ($scope, thermohygroService) {
    $scope.data = [];

    var thermohygro = thermohygroService.query(function () {
      $scope.data = thermohygro;
    })
  });
