(function(angular) {
  'use strict';

  angular
    .module('bc-inAppPurchase', ['bc-inAppPurchase.coreController'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('app.inAppPurchase', {
          url: '/inAppPurchase',
          views: {
            ui: {
              controller: 'inAppPurchaseController as vm',
              templateUrl: 'app/modules/inAppPurchase/inAppPurchase.tpl.html'
            }
          }
        });
    }])
    .run(['$ionicPlatform', function($ionicPlatform){

      $ionicPlatform.ready(function() {

        // Initialize the purchase plugin if available.
        if (!window.store) {
          console.log('Store not available');
          return;
        }

        // Enable maximum logging level.
        store.verbosity = store.DEBUG;

        // Enable remote receipt validation.
        // store.validation = 'https://apiUrl';

        // Inform the store of your products.
        console.log('Registering products...');
        store.register({
          id: 'consumable1', // id without package name!,
          alias: 'consumable 1',
          type: store.CONSUMABLE
        });

        // Log all errors.
        store.error(function(error) {
          console.log('ERROR ' + error.code + ': ' + error.message);
        });

        store.refresh();

      });



    }]);
})(angular);
