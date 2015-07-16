'use strict';

describe('Service: illuminanceService', function () {

  // load the service's module
  beforeEach(module('metAppApp'));

  // instantiate service
  var illuminanceService;
  beforeEach(inject(function (_illuminanceService_) {
    illuminanceService = _illuminanceService_;
  }));

  it('should do something', function () {
    expect(!!illuminanceService).toBe(true);
  });

});
