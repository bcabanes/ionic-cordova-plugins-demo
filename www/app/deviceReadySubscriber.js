(function(angular) {
  'use strict';

  angular
    .module('bc-app')
    .run(['$ionicAnalytics', '$ionicPlatform', function($ionicAnalytics, $ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

        // Initialize Ionic Analytics to gathering data.
        $ionicAnalytics.register();
      });
    }]);
})(angular);
