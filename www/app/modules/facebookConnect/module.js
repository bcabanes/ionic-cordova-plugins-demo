(function(angular) {
  'use strict';

  angular
    .module('bc-facebookConnect', ['bc-facebookConnect.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.facebookConnect', {
          url: '/facebookConnect',
          views: {
            ui: {
              controller: 'facebookConnectController as vm',
              templateUrl: 'app/modules/facebookConnect/facebookConnect.tpl.html'
            }
          }
        });
    }]);
})(angular);
