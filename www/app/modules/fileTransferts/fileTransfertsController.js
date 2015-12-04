(function(angular) {
  'use strict';

  angular
    .module('bc-fileTransferts.coreController', [])
    .controller('fileTransfertsController', ['$cordovaFileTransfer', '$sce', '$timeout', function($cordovaFileTransfer, $sce, $timeout) {
      var self = this;
      this.downloadProgress = false;
      this.fileUrl = 'http://www.html5videoplayer.net/videos/toystory.mp4';
      // Using cordova File plugin to get the path we want to on the device.
      this.filePath = cordova.file.dataDirectory + 'myVideo.mp4';

      this.startDownload = function() {
        $cordovaFileTransfer
          .download(this.fileUrl, this.filePath, {}, true)
          .then(this.downloadSuccessListener, this.downloadErrorListener, this.downloadProgressListener);
      };

      this.downloadSuccessListener = function(result) {
console.log(result, result.toURL());
        self.downloadResult = $sce.trustAsResourceUrl(result.toURL());
      };
      this.downloadErrorListener = function(error) {
console.log(error);
        self.downloadError = error;
      };
      this.downloadProgressListener = function(progress) {
        self.downloadProgress = (progress.loaded / progress.total) * 100;
      };
    }]);
})(angular);
