'use strict';

describe('Controller: RewardsCtrl', function () {

  // load the controller's module
  beforeEach(module('bitwardsApp'));

  var RewardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RewardsCtrl = $controller('RewardsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
