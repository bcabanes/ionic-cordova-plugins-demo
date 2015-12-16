(function(angular) {
  'use strict';

  angular
    .module('bc-mediaCaptures', [
      'bc-mediaCaptures.coreController',
      'bc-mediaCapturesSilent.coreController'
    ])
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
        })
        .state('app.mediaCapturesSilent', {
          url: '/mediaCapturesSilent',
          views: {
            ui: {
              controller: 'mediaCapturesSilentController as vm',
              templateUrl: 'app/modules/mediaCaptures/mediaCapturesSilent.tpl.html'
            }
          }
        });
    }]);
})(angular);
