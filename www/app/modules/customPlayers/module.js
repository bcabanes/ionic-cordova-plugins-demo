(function(angular) {
  'use strict';

  angular
    .module('bc-customPlayers', ['bc-customPlayers.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.customPlayers', {
          url: '/customPlayers',
          views: {
            ui: {
              controller: 'customPlayersController as vm',
              templateUrl: 'app/modules/customPlayers/customPlayers.tpl.html'
            }
          }
        });
    }]);
})(angular);
