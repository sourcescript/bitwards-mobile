'use strict';

describe('Service: challenge', function () {

  // load the service's module
  beforeEach(module('bitwardsApp'));

  // instantiate service
  var challenge;
  beforeEach(inject(function (_challenge_) {
    challenge = _challenge_;
  }));

  it('should do something', function () {
    expect(!!challenge).toBe(true);
  });

});
