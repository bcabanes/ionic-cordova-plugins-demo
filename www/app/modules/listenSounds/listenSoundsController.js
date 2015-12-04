(function(angular) {
  'use strict';

  angular
    .module('bc-listenSounds.coreController', [])
    .controller('listenSoundsController', function() {
      this.audioUrl = 'assets/audios/blur-song2.mp3';
      this.playing = false;
      this.audio = new Audio(this.audioUrl);
      this.playSound = function($event) {
        if (this.playing) {
          this.audio.pause();
          this.audio.currentTime = 0;
          this.playing = false;
          return;
        }
        this.audio.play();
        this.playing = true;
      };
    });
})(angular);
