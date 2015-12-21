(function(angular) {
  angular
    .module('bc-app', [
      // Global dependencies.
      'ionic',
      'ngCordova',

      // App's module.
      'bc-app.coreController',
      'bc-customPlayers',
      'bc-dialogs',
      'bc-facebookConnect',
      'bc-fileTransferts',
      'bc-googleConnect',
      'bc-listenSounds',
      'bc-mediaCaptures',
      'bc-oAuths',
      'bc-socialShares',
      'bc-streamVideos',
      'bc-toasts',
      'bc-takePictures',
      'bc-ui'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/modules/ui/mainMenu/mainMenu.tpl.html',
          controller: 'uiMainMenuController as vm'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/takePictures');
    }]);
})(angular);
