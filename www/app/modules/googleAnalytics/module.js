(function(angular) {
  'use strict';

  angular
    .module('bc-googleAnalytics', ['bc-googleAnalytics.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.googleAnalytics', {
          url: '/googleAnalytics',
          views: {
            ui: {
              controller: 'googleAnalyticsController as vm',
              templateUrl: 'app/modules/googleAnalytics/googleAnalytics.tpl.html'
            }
          }
        });
    }]);
})(angular);
