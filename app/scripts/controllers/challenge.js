'use strict';

/**
 * @ngdoc function
 * @name bitwardsApp.controller:ChallengeCtrl
 * @description
 * # ChallengeCtrl
 * Controller of the bitwardsApp
 */
angular.module('bitwardsApp')
  .controller('ChallengeCtrl', function ($scope, $routeParams, Challenge, ChallengeEvent, User) {
  	var challenge_id = $routeParams.id;
  	angular.element('.main-footer').removeClass('hidden');
  	$scope.challenge = null;
  	$scope.completed = false;
    $scope.points    = 0;

  	Challenge.get({id: challenge_id}, function(data) {
  		console.log(data);
  		$scope.challenge = data.data;
  	});

    User.query(function(data) {
      $scope.points = data.data.current_points;
    });

  	$scope.challengeAccepted = function() {
  		var challenge = $scope.challenge;
  		var elementBtn = angular.element("[data-role='accept-challenge']"); 
  		angular.element("[data-role='accept-challenge']").addClass('disabled').attr('disabled', 'disabled').html("loading..");

  		ChallengeEvent.accept(challenge.id, function(data) {

  			if(data.data.status == "success") {
  				elementBtn.addClass('disabled').attr('disabled', 'disabled').html("On Going..");
          $scope.challenge.status = 'pending';
  				// $scope.completed  = true;
  				return;
  			}else {
  				elementBtn.removeClass('disabled').removeAttr('disabled').html("Challenge Accepted");
  			}
  		});
  	}


	$scope.challengeCompleted = function() {
	  var challenge = $scope.challenge;
    ChallengeEvent.complete(challenge.id, function(data) {
      console.log(data);
      if(data.data.status == "success") {
        $scope.challenge.status = 'completed';
        $scope.completed = true;

        $scope.points += $scope.challenge.point;
      }
    });
	}

  });
