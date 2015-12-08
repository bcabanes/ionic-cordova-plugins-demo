(function(angular) {
  'use strict';

  angular
    .module('bc-socialShares.coreController', [])
    .controller('socialSharesController', ['$cordovaSocialSharing', '$sce', function($cordovaSocialSharing, $sce) {
      var self = this;
      this.shareUrl = 'https://www.portablenorthpole.com/en/player/564b9822c58cd-564b9822c5985';

      this.share = function() {
        $cordovaSocialSharing
          .share(null, null, null, this.shareUrl) // Share via native share sheet
          .then(function(result) {
console.log(result);
          }, function(error) {
console.error(error);
          });
      };

    }]);
})(angular);
