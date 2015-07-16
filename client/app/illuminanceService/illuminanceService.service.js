'use strict';

angular.module('metAppApp')
  .service('illuminanceService', function ($resource) {
    return $resource('/api/illuminances/:id', {id: '@_id'});
  });
