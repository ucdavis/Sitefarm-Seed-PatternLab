# Getting Started

## Prerequisites 

You'll need [node.js](http://nodejs.org).


## Install and setup
    
After cloning and changing into that directory, run this to install dependencies:

    $ npm install

You may have to run that again for updates; so it may be wise to save this: `$ npm install`. **If you have any problems; this is the first thing to run.**

Finally, to do an initial build of the site and start watching for changes run `gulp`. You should use the gulp version specific to your project by prefixing all your gulp commands with `npx`.

    $ npx gulp


## Windows Users

If you are on Windows you may run into a few issues.

It is recommended you use [Git for Windows](http://git-for-windows.github.io/).

If you get an alert saying that Google Chrome can't run, try passing in a different browser string into your `gulp-config.local.yml` file.

```yaml
browserSync:
  browser: ['chrome']
```
