(function(angular) {
  'use strict';

  angular
    .module('bc-takePictures.coreController', [])
    .controller('takePicturesController', function() {
      this.takePicture = function() {
console.log('takingPicture');
      };
    });
})(angular);
