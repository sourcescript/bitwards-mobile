'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:RewardsCtrl
 * @description
 * # RewardsCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('RewardsCtrl', function ($scope, Reward, User) {
  	angular.element('.main-footer').removeClass('hidden');
   	$scope.rewards = [];
   	$scope.points  = [];

   	Reward.query(function(data) {
   		$scope.rewards = data.data;
   	});

   	User.query(function(data) {
      $scope.points = data.data.current_points;
    });

   	
  });
