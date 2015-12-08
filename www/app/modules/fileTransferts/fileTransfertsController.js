(function(angular) {
  'use strict';

  angular
    .module('bc-fileTransferts.coreController', [])
    .controller('fileTransfertsController', ['$cordovaFile', '$cordovaFileTransfer', '$sce', '$timeout', function($cordovaFile, $cordovaFileTransfer, $sce, $timeout) {
      var self = this;
      this.downloadProgress = false;
      this.videoUrl = false;
      this.fileUrl = 'http://benjamincabanes.com/medias/tests/wanderers.mp4';
      // Using cordova File plugin to get the path we want to on the device.
      this.filePath = cordova.file.externalRootDirectory+'/Downloads/';
      this.fileName = 'myVideo.mp4';
      $cordovaFile.getFreeDiskSpace().then(function(result) {
        self.freeSpace = result;
      });

      this.checkFile = function() {
        $cordovaFile.checkFile(self.filePath, self.fileName)
        .then(function (result) {
          self.videoUrl = $sce.trustAsResourceUrl(result.toURL());
        }, function (error) {
          self.videoUrl = false;
          self.downloadProgress = 0;
        });
      };
      this.checkFile();

      this.deleteFile = function() {
        $cordovaFile.removeFile(this.filePath, this.fileName)
          .then(this.checkFile);
      };

      this.startDownload = function(event, customPath) {
        $cordovaFileTransfer
          .download(this.fileUrl, this.filePath + this.fileName, {}, true)
          .then(this.downloadSuccessListener, this.downloadErrorListener, this.downloadProgressListener);
      };

      this.downloadSuccessListener = function(result) {
          self.videoUrl = $sce.trustAsResourceUrl(result.toURL());
      };
      this.downloadErrorListener = function(error) {
console.error(error);
        self.downloadError = error;
      };
      this.downloadProgressListener = function(progress) {
        self.downloadProgress = (progress.loaded / progress.total) * 100;
      };
    }]);
})(angular);
