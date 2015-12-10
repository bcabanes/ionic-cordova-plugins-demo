(function(angular) {
  'use strict';

  angular
    .module('bc-customPlayers.coreController', [
      'ngSanitize',
			'com.2fdevs.videogular',
      'com.2fdevs.videogular.plugins.buffering',
			'com.2fdevs.videogular.plugins.controls',
      'com.2fdevs.videogular.plugins.overlayplay'
    ])
    .controller('customPlayersController', ['$cordovaFile', '$sce', '$timeout', function($cordovaFile, $sce, $timeout) {
      var self = this;
      this.playerApi = null;
      this.fileUrl = 'http://benjamincabanes.com/medias/tests/wanderers.mp4';
      // this.filePath = cordova.file.externalRootDirectory+'Downloads/';
      this.fileName = 'myVideo.mp4';

      this.config = {
        clearMediaOnNavigate: true,
        playsInline: false,
        nativeFullscreen: true,
        nativeControls: false,
        isLive: true,
				sources: [
					// {src: $sce.trustAsResourceUrl(self.filePath+self.fileName), type: 'video/mp4'}
					{src: $sce.trustAsResourceUrl(self.fileUrl), type: 'video/mp4'}
				],
        theme: 'vendors/videogular-themes-default/videogular.css'
      };

      this.onPlayerReady = function(api) {
        this.playerApi = api;
      };

      this.toggleFullscreen = function(event) {
        this.playerApi.toggleFullScreen();
      };

    }]);
})(angular);
