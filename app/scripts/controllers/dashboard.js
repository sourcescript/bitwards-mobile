'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('DashboardCtrl', function ($scope, Challenge, $location, User) {
  	$scope.challenges = [];
    $scope.points     = 0;
  	angular.element('.main-footer').removeClass('hidden');

  	Challenge.query(function(data) {
  		$scope.challenges = data.data;
  	});

    User.query(function(data) {
      $scope.points = data.data.current_points;
    });



  	$scope.viewChallenge = function(challenge_id) {
  		$location.path("challenge/"+challenge_id);
  	}
  });
