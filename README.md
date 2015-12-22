# ionic-cordova-plugins-demo
Some demos of multiple cordova/ionic plugins.

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

## Troubleshooting

### Facebook SDK & Google SDK
You may encounter some error if you use the `cordova-plugin-googleplus` ([github](https://github.com/EddyVerbruggen/cordova-plugin-googleplus)) and `phonegap-facebook-plugin` ([github](https://github.com/Wizcorp/phonegap-facebook-plugin)) at the same time. You can have an error like this:

```
FAILURE: Build failed with an exception.
* What went wrong:
Execution failed for task ':dexDebug'...
[...]
UNEXPECTED TOP-LEVEL EXCEPTION:
  	com.android.dex.DexException: Multiple dex files define ...
```

To solve this issue you can add the following lines to the `build.gradle` file located in `platforms/android`:
```java
configurations {
   all*.exclude group: 'com.android.support', module: 'support-v4'
}
```

 After the line:
 ```java
 apply plugin: 'android'
 ```
