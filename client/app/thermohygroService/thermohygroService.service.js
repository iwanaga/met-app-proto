'use strict';

angular.module('metAppApp')
  .service('thermohygroService', function ($resource) {
    return $resource('/api/thermohygros/:id', {id: '@_id'});
  });
