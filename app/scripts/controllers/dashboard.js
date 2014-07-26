'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('DashboardCtrl', function ($scope, Challenge) {
  	$scope.challenges = [];
  	Challenge.query(function(data) {
  		$scope.challenges = data.data;
  	});

  });
