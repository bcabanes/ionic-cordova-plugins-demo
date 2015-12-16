(function(angular) {
  'use strict';

  angular
    .module('bc-mediaCaptures.coreController', [])
    .controller('mediaCapturesController', ['$cordovaCapture', '$sce', function($cordovaCapture, $sce) {
      var self = this;
      var recorder;

      this.videoUrl = false;
      this.isRecordActive = false;

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
      this.videoElement = document.getElementById('videoResult');
      this.streamRecorder = null;
      this.webcamStream = null;

      RecordRTC.getFromDisk('video', function(dataURL) {
        if (dataURL) {
          self.videoElement.src = dataURL;
        }
      });

      this.startRecording = function() {
        navigator.getUserMedia({video: true, audio: true}, function(stream) {
          self.videoElement.src = window.URL.createObjectURL(stream);
          recorder = new RecordRTC(stream, {
             type: 'video',
             video: {
               width: 320,
               height: 240
             },
             frameInterval: 20,
             autoWriteToDisk: true,
             bitsPerSecond: 128000
          });

          recorder.startRecording();
        }, function(error) {
  console.log(error);
        });

        this.isRecordActive = true;
      };

      this.stopRecording = function() {
        this.isRecordActive = false;
        recorder.stopRecording(function(videoUrl) {
          self.videoElement.src = videoUrl;
        });
      };

    }]);
})(angular);
