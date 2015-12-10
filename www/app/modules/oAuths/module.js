(function(angular) {
  'use strict';

  angular
    .module('bc-oAuths', ['bc-oAuths.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.oAuths', {
          url: '/oAuths',
          views: {
            ui: {
              controller: 'oAuthsController as vm',
              templateUrl: 'app/modules/oAuths/oAuths.tpl.html'
            }
          }
        });
    }]);
})(angular);
