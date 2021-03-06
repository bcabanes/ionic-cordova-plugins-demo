# ionic-cordova-plugins-demo
Some demos of multiple cordova/ionic plugins using the [Crosswlak project](https://crosswalk-project.org/) as default WebView.

## Useful links
Ionic provide great documentation for each side of the project:
* [SDK](http://ionicframework.com/docs/)
* [ng-cordova](http://ngcordova.com/)
* [Platform Documentation](http://docs.ionic.io/)

## Set up
### Install ionic
First, install [Node.js](http://nodejs.org/). Then, install the latest [Cordova](https://cordova.apache.org/) and [Ionic command-line tools](https://npmjs.org/package/ionic). Follow the [Android](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html) and [iOS](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html) platform guides to install required platform dependencies.
> Note: iOS development requires Mac OS X. iOS simulator through the Ionic CLI requires the ios-sim npm package, which can be installed with the command `npm -g install ios-sim`. If you want to deploy your app on a real iOS device install ios-deploy with the command `npm -g install ios-deploy`.

### Start an Ionic App
The basic app start for Ionic is well documented [here](http://ionicframework.com/docs/cli/start.html) and by read the Ionic CLI help with `ionic --help`. But this is a good start for me:

```bash
$ ionic start -sass ionicCordovaPluginsDemo sidemenu
```

### Update Ionic lib
Update Ionic library files, which are found in the `www/lib/ionic` directory. If bower is being used
by the project, this command will automatically run `bower update ionic`, otherwise this command updates
the local static files from Ionic’s CDN.

```bash
$ ionic lib update
```

### Setup Ionic with device

#### Android
To run & debug your application easily on Android devices, you have to install the Android SDK. The `android-sdk` package could be easily installed with brew, but not `android-platform-tools` (which is the tricky part).

First make sure you have your brew list updated, then install the `android-sdk` package.

```bash
$ brew update
```

```bash
$ brew install android-sdk
```

If you run `ionic run android --device` it will make an error like:

```
ERROR: Error: Please install Android target: "android-22".

Hint: Open the SDK manager by running: /usr/local/Cellar/android-sdk/24.2/bin/android
You will require:
1. "SDK Platform" for android-22
2. "Android SDK Platform-tools (latest)
3. "Android SDK Build-tools" (latest)
```

To solve this you have to install required SDK by selecting them using:

```bash
$ android
```

If you have planed to use Google services (G+/Oauth/Google Play), you have to install these packages:
* Android Support Repository
* Android Support Library
* Google Play services
* Google Repository
* Google Play APK Expansion Library

Enable the liveReload and the log on the device ([Ionic CLI options](https://github.com/driftyco/ionic-cli#live-reload-app-during-development-beta)):

```bash
ionic run android --device -l -c
```

### Plugins list

This is the list of all plugins used in the project:
* cordova-plugin-device [[github](https://github.com/apache/cordova-plugin-device)]
* cordova-plugin-console [[github](https://github.com/apache/cordova-plugin-console)]
* cordova-plugin-whitelist [[github](https://github.com/apache/cordova-plugin-whitelist)]
* cordova-plugin-splashscreen [[github](https://github.com/apache/cordova-plugin-splashscreen)]
* cordova-plugin-statusbar [[github](https://github.com/apache/cordova-plugin-statusbar)]
* ionic-plugin-keyboard [[github](https://github.com/driftyco/ionic-plugin-keyboard)]
* cordova-plugin-camera [[github](https://github.com/apache/cordova-plugin-camera)]
* cordova-plugin-file-transfer [[github](https://github.com/apache/cordova-plugin-file-transfer)]
* cordova-plugin-file [[github](https://github.com/apache/cordova-plugin-file)]
* com.hutchind.cordova.plugins.streamingmedia [[github](https://github.com/nchutchind/Streaming-Media-Cordova-Plugin)]
* cordova-plugin-x-socialsharing [[github](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)]
* cordova-plugin-dialogs [[github](https://github.com/apache/cordova-plugin-dialogs)]
* cordova-plugin-x-toast [[github](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin)]
* cordova-plugin-inappbrowser [[github](https://github.com/apache/cordova-plugin-inappbrowser)]
* cordova-plugin-media-capture [[github](https://github.com/apache/cordova-plugin-media-capture)]
* cordova-plugin-crosswalk-webview [[github](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview)]
* cordova-plugin-googleplus [[github](https://github.com/EddyVerbruggen/cordova-plugin-googleplus)]
* cordova-plugin-network-information [[github](https://github.com/apache/cordova-plugin-network-information)]
* phonegap-plugin-push [[github](https://github.com/phonegap/phonegap-plugin-push)]
* cordova-plugin-facebook4 [[github](https://github.com/jeduan/cordova-plugin-facebook4)]
* com.jareddickson.cordova.tag-manager [[github](https://github.com/kraihn/cordova-plugin-tag-manager)]
* cc.fovea.cordova.purchase [[github](https://github.com/j3k0/cordova-plugin-purchase)]

## Publishing App

### Android

To generate a release build for Android, we can use the following cordova cli command:

```bash
$ cordova build --release android
```

This will generate a release build based on the settings in your `config.xml`. Your Ionic app will have preset default values in this file, but if you need to customize how your app is built, you can edit this file to fit your preferences. Check out the `config.xml` file documentation for more information.

Next, we can find our unsigned APK file in `platforms/android/build/outputs/apk`. Now, we need to sign the unsigned APK and run an alignment utility on it to optimize it and prepare it for the app store. If you already have a signing key, skip these steps and use that one instead.

Let’s generate our private key using the keytool command that comes with the JDK. If this tool isn’t found, refer to the installation guide:

```bash
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

You’ll first be prompted to create a password for the keystore. Then, answer the rest of the nice tools’s questions and when it’s all done, you should have a file called `my-release-key.keystore` created in the current directory.

**Note**: Make sure to save this file somewhere safe, if you lose it you won’t be able to submit updates to your app!

To sign the unsigned APK, run the `jarsigner` tool which is also included in the JDK:

```bash
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in `/path/to/Android/sdk/build-tools/VERSION/zipalign`:

```bash
$ zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

Now we have our final release binary called HelloWorld.apk and we can release this on the Google Play Store for all the world to enjoy!

## Automation Tests

There is multiple ways of doing automation tests:

* unit testing
* integration tests
* e2e tests

### Appium

> [Appium](http://appium.io/) is an open source test automation framework for use with native, hybrid and mobile web apps. 
It drives iOS and Android apps using the WebDriver protocol.

We use [Protractor](https://angular.github.io/protractor/#/) to lunch and config Appium for testing purpose, so make sure you have these installed:

```bash
$ npm install -g protractor appium
```

To be sure Appium is ready, run this command (and fix what needs to be fixed):

```bash
$ appium-doctor
```

You can start Appium by running:

```bash
$ appium
```

Then you can start the Protactor file with:

```bash
$ protractor protractor-config.js
```

## Troubleshooting

### Facebook SDK
To avoid some problems using the Facebook SDK, try to always verify the SDK version, in sort of always use the last version. The `phonegap-facebook-plugin` from Wizcorp don't use (currently) the last Facebook SDK version.
Instead, `cordova-plugin-facebook4` from [Jeduan](https://github.com/jeduan/cordova-plugin-facebook4) is a fork of the Wizcorp plugin with the latest SDK version.
