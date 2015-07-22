'use strict';

angular.module('metAppApp')
  .controller('ThermohygroCtrl', function ($scope, thermohygroService) {
    thermohygroService.query(function (data) {
      $scope.temp_data = [
        {
          key: ' 温度 ',
          values: data.map(function (item) {
            return {
              createdAt: item.createdAt,
              value: item.temperature
            };
          }),
          color: '#2196f3'
        },
        {
          key: '体感温度',
          values: data.map(function (item) {
            return {
              createdAt: item.createdAt,
              value: item.heatIndex
            };
          }),
          color: '#CCC'
        }
      ];
    });

    $scope.temp_options = {
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
        y: function(d) { return d.value; },
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
          axisLabel: '温度',
          axisLabelDistance: 30,
          showMaxMin: false
        },
        forceY: [null, null],
        transitionDuration: 250,
        callback: angular.noop
      },
      title: {
        enable: true,
        text: '温度'
      },
      caption: {
        enable: false
      }
    };
  });
