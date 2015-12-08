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

      this.config = {
        playsInline: false,
        nativeFullscreen: true,
        nativeControls: false,
				sources: [
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
