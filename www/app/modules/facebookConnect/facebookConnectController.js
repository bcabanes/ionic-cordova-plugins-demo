(function(angular) {
  'use strict';

  angular
    .module('bc-facebookConnect.coreController', [])
    .controller('facebookConnectController', ['$cordovaFacebook', function($cordovaFacebook) {
      var self = this;
      this.userDetail = false;

      this.login = function() {
        $cordovaFacebook.login(["public_profile", "email", "user_friends"])
          .then(function(success) {
            self.userDetails = success;
          }, function (error) {
            // error
            console.error(error);
          });
      };

      this.logout = function() {
        $cordovaFacebook.logout()
          .then(function(success) {
            self.userDetails = false;
          }, function (error) {
            // error
          });
      };

      this.showDialog = function() {
        $cordovaFacebook.showDialog({
            method: "feed",
            link: "https://suicidegirls.com",
            caption: "Such caption, very feed."
          })
          .then(function(success) {
            // success
          }, function (error) {
            // error
          });
      };

    }]);
})(angular);
