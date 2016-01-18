(function(angular) {
  'use strict';

  angular
    .module('bc-googleTagManager.coreController', [])
    .controller('googleTagManagerController', function() {
      var tagManager = cordova.require('com.jareddickson.cordova.tag-manager.TagManager');
      tagManager.init(null, null, 'GTM-M6NNVF', 30);

      tagManager.trackEvent(null, null, 'TestCategory', 'noAction', 'somevalue', -1);

      // Track events.
      this.sendEvent = function(eventName) {
        alert('Send "' + eventName + '" event');
        tagManager.trackEvent(null, null, 'GTM screen', 'Button bar', eventName, 100);
      };
    });
})(angular);
