'use strict';

/**
 * @ngdoc service
 * @name bitwardsApp.ChallengeEvent
 * @description
 * # ChallengeEvent
 * Factory in the bitwardsApp.
 */
angular.module('bitwardsApp')
  .factory('ChallengeEvent', function ($http) {
    // Service logic
    // ...
    var url = "http://api.bitwards.sourcescript.ph/api/v1/challenges/";
     var token = 'P8E9CCRKTAQkcGecfgZ53SPMMa1uoTltUKmR0lcE';
    // Public API here
    return {
      accept: function (challenge_id, callback) {
        $http({
          method: "post",
          url: url+""+challenge_id+"/accept",
          headers: {
            'Authorization': token
          }
        }).then(function(data) {
          callback(data);
        });
      },
      complete: function(challenge_id, callback) {
        $http({
          method: "post",
          url: url+challenge_id+"/done",
          headers: {
            'Authorization': token
          }
        }).then(function(data) {
          callback(data);
        });
      }
    };
  });
