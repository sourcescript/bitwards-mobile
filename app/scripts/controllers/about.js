'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
