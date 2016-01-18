(function(angular) {
  'use strict';

  angular
    .module('bc-googleTagManager', ['bc-googleTagManager.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.googleTagManager', {
          url: '/googleTagManager',
          views: {
            ui: {
              controller: 'googleTagManagerController as vm',
              templateUrl: 'app/modules/googleTagManager/googleTagManager.tpl.html'
            }
          }
        });
    }]);
})(angular);
