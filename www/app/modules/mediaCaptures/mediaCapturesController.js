(function(angular) {
  'use strict';

  angular
    .module('bc-mediaCaptures.coreController', [])
    .controller('mediaCapturesController', ['$cordovaCapture', '$sce', function($cordovaCapture, $sce) {
      var self = this;
      this.videoUrl = false;

      this.captureVideo = function() {
        var options = { limit: 1, duration: 15 };

        $cordovaCapture.captureVideo(options).then(function(videoData) {
console.log(videoData);
          self.videoUrl = $sce.trustAsResourceUrl(videoData[0].fullPath);
        }, function(err) {
          // An error occurred. Show a message to the user
        });
      };


      /**
       * Don't forget to have the right permission in the AndroidManifest.xml:
       * <uses-permission android:name="android.permission.CAMERA" />
       */
      var video = document.querySelector('video');
      navigator.webkitGetUserMedia({video: true}, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream;
      }, function(error) {
console.log(error);
      });

    }]);
})(angular);
