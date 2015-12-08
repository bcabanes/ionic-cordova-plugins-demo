(function(angular) {
  'use strict';

  angular
    .module('bc-streamVideos', ['bc-streamVideos.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.streamVideos', {
          url: '/streamVideos',
          views: {
            ui: {
              controller: 'streamVideosController as vm',
              templateUrl: 'app/modules/streamVideos/streamVideos.tpl.html'
            }
          }
        });
    }]);
})(angular);
