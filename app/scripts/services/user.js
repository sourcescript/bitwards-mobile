'use strict';

/**
 * @ngdoc service
 * @name bitwardsApp.User
 * @description
 * # User
 * Factory in the bitwardsApp.
 */
angular.module('bitwardsApp')
  .factory('User', function ($resource) {
    // Service logic
    // ...
    var token = "P8E9CCRKTAQkcGecfgZ53SPMMa1uoTltUKmR0lcE";

    return $resource("http://api.bitwards.sourcescript.ph/api/v1/users/profile", {}, {
      get: {
        method: "GET",
        headers: {
          'Authorization': token
        }
      },
      query: {
        method: "GET",
        headers: {
          'Authorization': token
        }
      }
    });
   
  });
