(function(angular) {
  'use strict';

  angular
    .module('bc-toasts', ['bc-toasts.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.toasts', {
          url: '/toasts',
          views: {
            ui: {
              controller: 'toastsController as vm',
              templateUrl: 'app/modules/toasts/toasts.tpl.html'
            }
          }
        });
    }]);
})(angular);
