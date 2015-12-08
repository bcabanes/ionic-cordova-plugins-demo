(function(angular) {
  'use strict';

  angular
    .module('bc-socialShares', ['bc-socialShares.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.socialShares', {
          url: '/socialShares',
          views: {
            ui: {
              controller: 'socialSharesController as vm',
              templateUrl: 'app/modules/socialShares/socialShares.tpl.html'
            }
          }
        });
    }]);
})(angular);
