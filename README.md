# ionic-cordova-plugins-demo
Some demos of multiple cordova/ionic plugins.

## Set up
### Install ionic
First, install [Node.js](http://nodejs.org/). Then, install the latest [Cordova](https://cordova.apache.org/) and [Ionic command-line tools](https://npmjs.org/package/ionic). Follow the [Android](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/android/index.html) and [iOS](http://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html) platform guides to install required platform dependencies.
> Note: iOS development requires Mac OS X. iOS simulator through the Ionic CLI requires the ios-sim npm package, which can be installed with the command sudo npm -g install ios-sim.

### Start an Ionic App
The basic app start for Ionic is well documented [here](http://ionicframework.com/docs/cli/start.html) and by read the Ionic CLI help with `ionic --help`. But this is a good start for me:

```bash
$ ionic start -sass ionicPluginsDemo sidemenu
```

### Update Ionic lib
Update Ionic library files, which are found in the `www/lib/ionic` directory. If bower is being used
by the project, this command will automatically run `bower update ionic`, otherwise this command updates
the local static files from Ionic’s CDN.

```bash
$ ionic lib update
```
