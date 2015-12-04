(function(angular) {
  'use strict';

  angular
    .module('bc-fileTransferts', ['bc-fileTransferts.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.fileTransferts', {
          url: '/fileTransferts',
          views: {
            ui: {
              controller: 'fileTransfertsController as vm',
              templateUrl: 'app/modules/fileTransferts/fileTransferts.tpl.html'
            }
          }
        });
    }]);
})(angular);
