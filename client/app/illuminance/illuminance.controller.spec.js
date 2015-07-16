'use strict';

describe('Controller: IlluminanceCtrl', function () {

  // load the controller's module
  beforeEach(module('metAppApp'));

  var IlluminanceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IlluminanceCtrl = $controller('IlluminanceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
