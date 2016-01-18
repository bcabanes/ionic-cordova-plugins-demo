(function(angular) {
  'use strict';

  angular
    .module('bc-dialogs.coreController', [])
    .controller('dialogsController', ['$cordovaDialogs', '$ionicPopup', function($cordovaDialogs, $ionicPopup) {
      var self = this;

      this.showAlert = function() {
        $cordovaDialogs.alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum', 'Okay')
          .then(function() {
            // callback success
          });
      };

      this.showConfirm = function() {
        $cordovaDialogs.confirm('Are you sure?', 'Small test', ['Yes','No'])
          .then(function(buttonIndex) {
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = buttonIndex;
          });
      };

      this.showPrompt = function() {
        $cordovaDialogs.prompt('What is your wifi key?', 'Wifi network', ['Ok','Cancel'], 'passphrase')
          .then(function(result) {
            var input = result.input1;
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = result.buttonIndex;
          });
      };

      this.beep = function() {
        // beep 3 times
        $cordovaDialogs.beep(3);
      };

      // Ionic popup.
      this.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'New Friend!',
          template: 'Your friend, Obi wan Kenobi, just accepted your friend request!'
        });
      };

    }]);
})(angular);
