(function(angular) {
  'use strict';

  angular
    .module('bc-oAuths.coreController', [])
    .controller('oAuthsController', ['$cordovaOauth', function($cordovaOauth) {
      var self = this;
      this.userDetail = false;

      this.login = function() {
        $cordovaOauth.google('95661636250-h2o9cr4vnm7no92fvtu6opncapbi9qgg.apps.googleusercontent.com', ["email"])
          .then(function(success) {
            self.userDetails = success;
          })
          .catch(function(error) {
            console.error(error);
          });
      };
    }]);
})(angular);
