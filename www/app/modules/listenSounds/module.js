(function(angular) {
  'use strict';

  angular
    .module('bc-listenSounds', ['bc-listenSounds.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.listenSounds', {
          url: '/listenSounds',
          views: {
            ui: {
              controller: 'listenSoundsController as vm',
              templateUrl: 'app/modules/listenSounds/listenSounds.tpl.html'
            }
          }
        });
    }]);
})(angular);
