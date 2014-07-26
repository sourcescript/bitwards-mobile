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
    var token = '6Tau0wGGvmPEx9R9iGzqKnDOycmxc9nlVVToFHw3';
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
