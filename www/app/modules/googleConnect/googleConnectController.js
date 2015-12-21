(function(angular) {
  'use strict';

  angular
    .module('bc-googleConnect.coreController', [])
    .controller('googleConnectController', function() {
      var self = this;
      this.userDetail = false;

      // window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});

      this.login = function() {
        window.plugins.googleplus.login(
          {
            // 'scopes': 'email,profile', // optional space-separated list of scopes, the default is sufficient for login and basic profile info
            // 'offline': false, // optional, used for Android only - if set to true the plugin will also return the OAuth access token ('oauthToken' param), that can be used to sign in to some third party services that don't accept a Cross-client identity token (ex. Firebase)
            // 'webApiKey': '530735368883-7k9kvs742f7pmsp7q7g6p4pkr8kc1dg3.apps.googleusercontent.com', // optional API key of your Web application from Credentials settings of your project - if you set it the returned idToken will allow sign in to services like Azure Mobile Services
            // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
          },
          function (obj) {
            self.userDetails = JSON.stringify(obj);
          },
          function (msg) {
            alert('error: ' + msg);
          }
      );
      };

      this.logout = function() {
        window.plugins.googleplus.disconnect(
            function (msg) {
              alert(msg); // do something useful instead of alerting
            }
        );
      };

    });
})(angular);
