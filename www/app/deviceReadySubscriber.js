(function(angular) {
  'use strict';

  angular
    .module('bc-app')
    .run(['$ionicAnalytics', '$ionicPlatform', '$ionicPush', function($ionicAnalytics, $ionicPlatform, $ionicPush) {
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

        // Register for Push notification.
        $ionicPush.init({
          debug: true, // More logging.
          // If 'onNotification' doesn't exist it should call alert(pushMessage)
          // onNotification: function(notification) {
          //   var payload = notification.payload;
          //   console.log(notification, payload);
          // },
          onRegister: function(data) {
            console.log(data.token);
          },
          pluginConfig: {
            ios: {
              badge: true,
              sound: true
             },
             android: {
               iconColor: '#343434'
             }
          }
        });

        $ionicPush.register();
      });
    }]);
})(angular);
