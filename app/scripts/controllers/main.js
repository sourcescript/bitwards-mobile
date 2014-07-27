'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('MainCtrl', function ($scope, $location, $timeout) {
  	angular.element("body").attr('class','main');
    angular.element('.main-footer').addClass('hidden');
  	$timeout(function() {
  		angular.element(".main .logo img").attr("class","animated fadeOut");
  	}, 2500);

  	$timeout(function() {
  			$location.path('login');
  		}, 3000);

  	$scope.$on('$viewContentLoaded',function() {
  		
  	});

  });
