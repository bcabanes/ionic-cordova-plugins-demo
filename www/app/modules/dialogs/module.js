(function(angular) {
  'use strict';

  angular
    .module('bc-dialogs', ['bc-dialogs.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.dialogs', {
          url: '/dialogs',
          views: {
            ui: {
              controller: 'dialogsController as vm',
              templateUrl: 'app/modules/dialogs/dialogs.tpl.html'
            }
          }
        });
    }]);
})(angular);
