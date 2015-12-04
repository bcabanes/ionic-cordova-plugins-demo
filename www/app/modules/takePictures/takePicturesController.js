(function(angular) {
  'use strict';

  angular
    .module('bc-takePictures.coreController', [])
    .controller('takePicturesController', ['$cordovaCamera', function($cordovaCamera) {
        var _cameraSettings = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 500,
          targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: false
        };

      this.takePicture = function() {
        $cordovaCamera
          .getPicture(_cameraSettings)
          .then(function(imageData) {
            var image = document.getElementById('myPicture');
            image.src = "data:image/jpeg;base64," + imageData;
          })
          .catch(function(error) {
            // Handling the error...
            console.error(error);
          });
      };
    }]);
})(angular);
