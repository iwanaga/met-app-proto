'use strict';

angular.module('metAppApp')
  .controller('IlluminanceCtrl', function ($scope, illuminanceService) {
    illuminanceService.query(function (data) {
      $scope.data = [
        {
          key: ' 照度 ',
          values: data,
          color: '#2196f3'
        }
      ];
    });

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 400,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d) { return Date.parse(d.createdAt); },
        y: function(d) { return d.illuminance; },
        useInteractiveGuideline: false,
        dispatch: {},
        xAxis: {
          axisLabel: '時刻',
          tickFormat: function (d) {
            return d3.time.format('%H:%M')(new Date(d))
          },
          showMaxMin: false
        },
        yAxis: {
          axisLabel: '照度',
          axisLabelDistance: 30,
          showMaxMin: false
        },
        forceY: [null, null],
        transitionDuration: 250,
        callback: angular.noop
      },
      title: {
        enable: true,
        text: 'illuminace (CdS)'
      },
      caption: {
        enable: false
      }
    };
  });
