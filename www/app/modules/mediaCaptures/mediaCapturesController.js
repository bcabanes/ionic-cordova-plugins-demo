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
      this.videoElement = document.getElementById('videoRecord');
      this.streamRecorder = null;
      this.webcamStream = null;
      navigator.getUserMedia({video: true, audio: true}, function(stream) {
        self.videoElement.src = window.URL.createObjectURL(stream);
        recorder = new RecordRTC(stream, {
           type: 'video',
           video: {
             width: 320,
             height: 240
           }
        });
      }, function(error) {
console.log(error);
      });

      this.startRecording = function() {
        recorder.startRecording();
        this.isRecordActive = true;
      };

      this.stopRecording = function() {
        this.isRecordActive = false;
        recorder.stopRecording(function(videoUrl) {
// console.log(recorder.blob, recorder.buffer);
          var video = document.getElementById('videoResult');
          // video.src = window.URL.createObjectURL(recorder.blob);
          video.src = videoUrl;
        });
        // recorder.writeToDisk();
      };

//       RecordRTC.getFromDisk('video', function(dataURL) {
// console.log(dataURL);
//         self.videoElement.src = dataURL;
//       });

    }]);
})(angular);
