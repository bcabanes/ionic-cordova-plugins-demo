(function(angular) {
  'use strict';

  angular
    .module('bc-mediaCaptures', ['bc-mediaCaptures.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.mediaCaptures', {
          url: '/mediaCaptures',
          views: {
            ui: {
              controller: 'mediaCapturesController as vm',
              templateUrl: 'app/modules/mediaCaptures/mediaCaptures.tpl.html'
            }
          }
        });
    }]);
})(angular);
