(function(angular) {
  'use strict';

  angular
    .module('bc-takePictures', ['bc-takePictures.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.takePictures', {
          url: '/takePictures',
          views: {
            ui: {
              controller: 'takePicturesController as vm',
              templateUrl: 'app/modules/takePictures/takePictures.tpl.html'
            }
          }
        });
    }]);
})(angular);
