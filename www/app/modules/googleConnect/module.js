(function(angular) {
  'use strict';

  angular
    .module('bc-googleConnect', ['bc-googleConnect.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.googleConnect', {
          url: '/googleConnect',
          views: {
            ui: {
              controller: 'googleConnectController as vm',
              templateUrl: 'app/modules/googleConnect/googleConnect.tpl.html'
            }
          }
        });
    }]);
})(angular);
