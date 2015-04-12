'use strict';

describe('Service: pressureService', function () {

  // load the service's module
  beforeEach(module('metAppApp'));

  // instantiate service
  var pressureService;
  beforeEach(inject(function (_pressureService_) {
    pressureService = _pressureService_;
  }));

  it('should do something', function () {
    expect(!!pressureService).toBe(true);
  });

});
