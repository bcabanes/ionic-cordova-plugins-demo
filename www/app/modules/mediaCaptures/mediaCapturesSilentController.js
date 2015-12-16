(function(angular) {
  'use strict';

  angular
    .module('bc-mediaCapturesSilent.coreController', [
      'ngSanitize',
			'com.2fdevs.videogular',
      'com.2fdevs.videogular.plugins.buffering',
			'com.2fdevs.videogular.plugins.controls',
      'com.2fdevs.videogular.plugins.overlayplay'
    ])
    .controller('mediaCapturesSilentController', ['$sce', function($sce) {
      var self = this;
      var recorder;

      this.videoUrl = false;
      this.isRecordActive = false;

      this.playerApi = null;
      this.fileUrl = 'http://benjamincabanes.com/medias/tests/wanderers.mp4';
      this.config = {
        clearMediaOnNavigate: true,
        playsInline: false,
        nativeFullscreen: true,
        nativeControls: true,
				sources: [
					{src: $sce.trustAsResourceUrl(self.fileUrl), type: 'video/mp4'}
				],
        theme: 'vendors/videogular-themes-default/videogular.css'
      };

      this.updateState = function() {
console.log('test');
        if (!self.videoElement.src) {
          return self.startRecording();
        }
        self.stopRecording();
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

          // Start Recording right away.
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

      this.clearRecordings = function() {
        var request = indexedDB.webkitGetDatabaseNames();
        request.onsuccess = function(event) {
          for (var i = 0; i < Object.keys(event.target.result).length; i++) {
            indexedDB.deleteDatabase(event.target.result[i]);
          }
        };
      };

    }]);
})(angular);
