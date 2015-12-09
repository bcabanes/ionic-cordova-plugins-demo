(function(angular) {
  'use strict';

  angular
    .module('bc-toasts.coreController', [])
    .controller('toastsController', ['$cordovaToast', function($cordovaToast) {
      var self = this;

      this.showToast = function(event, duration, position) {
        $cordovaToast
          .show('Here is a message', duration, position)
          .then(function(success) {
            // success
          }, function (error) {
            // error
          });
      };
    }]);
})(angular);
