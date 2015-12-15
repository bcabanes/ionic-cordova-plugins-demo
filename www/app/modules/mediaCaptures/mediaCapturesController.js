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
      this.videoElement = document.querySelector('video');
      this.streamRecorder = null;
      this.webcamStream = null;
      navigator.webkitGetUserMedia({video: true}, function(stream) {
        self.videoElement.src = window.URL.createObjectURL(stream);
        self.webcamStream = stream;
      }, function(error) {
console.log(error);
      });

      this.startRecording = function() {
        if (this.streamRecorder) {
          return this.stopRecording();
        }
console.log(this.webcamStream);
        this.streamRecorder = this.webcamStream.start();
      };

      this.stopRecording = function() {
        this.streamRecorder.getRecordedData(function(videoBlob) {
          console.log(videoBlob);
        });
      };

    }]);
})(angular);
