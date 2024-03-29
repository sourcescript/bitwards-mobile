'use strict';

describe('Controller: ChallengeCtrl', function () {

  // load the controller's module
  beforeEach(module('bitwardsApp'));

  var ChallengeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChallengeCtrl = $controller('ChallengeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
