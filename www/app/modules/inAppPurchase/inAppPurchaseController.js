(function(angular) {
  'use strict';

  angular
    .module('bc-inAppPurchase.coreController', [])
    .controller('inAppPurchaseController', ['$scope', function($scope) {
      var self = this;
      this.product = store.get('consumable1');

      this.purchase = function(productId) {
        alert('Purchase of ' + productId);
        store.order(productId);
      };


      // Monitor changes on a particular product.
      store.when('consumable1').updated(function(product) {
        alert('Consumable1 updated');
        self.product = product;
        $scope.$apply();
      });

      // Monitor changes on any products.
      store.when('product').updated(function() {
        // Refresh product list.
      });

      // When purchase of consumable 1.
      store.when('consumable1').approved(function (order) {
        alert('You got a consumable 1!');
        order.finish();
      });

    }]);
})(angular);
