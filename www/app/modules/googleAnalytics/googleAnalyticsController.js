(function(angular) {
  'use strict';

  angular
    .module('bc-googleAnalytics.coreController', [])
    .controller('googleAnalyticsController', ['$cordovaGoogleAnalytics', function($cordovaGoogleAnalytics) {
      // Turn on debug mode.
      // https://github.com/danwilson/google-analytics-plugin#javascript-usage
      $cordovaGoogleAnalytics.debugMode();

      // Start tracker.
      $cordovaGoogleAnalytics.startTrackerWithId('UA-11729347-32');

      // Set user ID (fake).
      $cordovaGoogleAnalytics.setUserId('test-user');

      // Track a view.
      $cordovaGoogleAnalytics.trackView('Analytics screen');

      // Track custom dimension.
      $cordovaGoogleAnalytics.addCustomDimension('dimension1', 'Level 1');

      // Track events.
      this.sendEvent = function(eventName) {
        alert('Send "' + eventName + '" event');
        $cordovaGoogleAnalytics.trackEvent('Analytics screen', 'Button bar', eventName, 100);
      };
    }]);
})(angular);
