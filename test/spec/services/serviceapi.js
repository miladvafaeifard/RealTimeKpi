'use strict';

describe('Service: serviceApi', function () {

  // load the service's module
  beforeEach(module('realTimeKpiApp'));

  // instantiate service
  var serviceApi;
  beforeEach(inject(function (_serviceApi_) {
    serviceApi = _serviceApi_;
  }));

  it('should do something', function () {
    expect(!!serviceApi).toBe(true);
  });

});
