exports.config = {
  /**
   * Normally Protractor runs tests on localhost:4444, but we want protractor to connect to Appium which runs on localhost:4723.
   */
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['./protractor/*_spec.js'],

  /**
   * Some capabilities must be set to make sure appium can connect to your device.
   * platformVersion: this is the version of android
   * deviceName: your actual device name
   * browserName: leave this empty, we want protractor to use the embedded webview
   * autoWebView: set this to true for hybrid applications
   * app: the location of the apk (must be absolute)
   */
  capabilities: {
    platformName: 'android',
    platformVersion: '5.0',
    deviceName: 'device',
    browserName: '',
    autoWebview: true,
    app: '/Users/ben/Documents/projects/ionicCordovaPluginsDemo/ionic.apk'
  },

  /**
   * Configuring wd in onPrepare
   * wdBridge helps to bridge wd driver with other selenium clients.
   * See https://github.com/sebv/wd-bridge/blob/master/README.md
   */
  onPrepare: function() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);

    wdBridge.initFromProtractor(exports.config);
  }
};
