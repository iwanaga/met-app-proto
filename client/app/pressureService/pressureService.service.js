'use strict';

angular.module('metAppApp')
  .service('pressureService', function ($resource) {
    return $resource('/api/pressures/:id', {id: '@_id'});
  });
