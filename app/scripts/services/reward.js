'use strict';

/**
 * @ngdoc service
 * @name bitwardsApp.Reward
 * @description
 * # Reward
 * Factory in the bitwardsApp.
 */
angular.module('bitwardsApp')
  .factory('Reward', function ($resource, User) {
    // Service logic
    // ...
    
    var token = "P8E9CCRKTAQkcGecfgZ53SPMMa1uoTltUKmR0lcE";
    return $resource("http://api.bitwards.sourcescript.ph/api/v1/rewards/:id", {}, {
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
