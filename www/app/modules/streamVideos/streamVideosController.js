(function(angular) {
  'use strict';

  angular
    .module('bc-streamVideos.coreController', [])
    .controller('streamVideosController', ['$cordovaFile', '$sce', '$window', function($cordovaFile, $sce, $window) {
      var self = this;
      this.fileUrl = 'http://benjamincabanes.com/medias/tests/wanderers.mp4';
      this.streamOptions = {
        successCallback: function() {
          console.log("Video was closed without error.");
        },
        errorCallback: function(errMsg) {
          console.log("Error! " + errMsg);
        }
      };

      this.startStream = function() {
        $window.plugins.streamingMedia.playVideo(this.fileUrl, this.streamOptions);
      };

    }]);
})(angular);
