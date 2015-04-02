'use strict';

describe('Service: thermohygroService', function () {

  // load the service's module
  beforeEach(module('metAppApp'));

  // instantiate service
  var thermohygroService;
  beforeEach(inject(function (_thermohygroService_) {
    thermohygroService = _thermohygroService_;
  }));

  it('should do something', function () {
    expect(!!thermohygroService).toBe(true);
  });

});
