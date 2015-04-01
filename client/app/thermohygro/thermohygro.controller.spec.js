'use strict';

describe('Controller: ThermohygroCtrl', function () {

  // load the controller's module
  beforeEach(module('metAppApp'));

  var ThermohygroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThermohygroCtrl = $controller('ThermohygroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
