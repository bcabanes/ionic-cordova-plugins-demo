(function(angular) {
  'use strict';

  angular
    .module('bc-fileTransferts.coreController', [])
    .controller('fileTransfertsController', ['$cordovaFile', '$cordovaFileTransfer', '$cordovaNetwork', '$sce', '$timeout', function($cordovaFile, $cordovaFileTransfer, $cordovaNetwork, $sce, $timeout) {
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
        if ($cordovaNetwork.getNetwork() !== 'wifi') {
          alert("It is recommanded to be in wifi to donwload such file.");
          return false;
        }
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
