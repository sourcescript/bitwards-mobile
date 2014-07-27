'use strict';

describe('Service: ChallengeEvent', function () {

  // load the service's module
  beforeEach(module('bitwardsApp'));

  // instantiate service
  var ChallengeEvent;
  beforeEach(inject(function (_ChallengeEvent_) {
    ChallengeEvent = _ChallengeEvent_;
  }));

  it('should do something', function () {
    expect(!!ChallengeEvent).toBe(true);
  });

});
