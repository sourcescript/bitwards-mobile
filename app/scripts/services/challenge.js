'use strict';

/**
 * @ngdoc service
 * @name bitwardsApp.challenge
 * @description
 * # challenge
 * Factory in the bitwardsApp.
 */
angular.module('bitwardsApp')
  .factory('Challenge', function ($resource) {
    var token = 'P8E9CCRKTAQkcGecfgZ53SPMMa1uoTltUKmR0lcE';
    return $resource("http://api.bitwards.sourcescript.ph/api/v1/challenges/:id", {}, {
        get: {
          method: 'GET',
          headers: {
            'Authorization': token
          }
        },
        query: {
          method: 'GET',
          headers: {
            'Authorization': token
          }
        }
    });
  });
