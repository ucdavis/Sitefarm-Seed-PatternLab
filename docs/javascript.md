# Using Javascript

## Folder Structure

Each file in the **/source/js** directory will be concatenated into a single **/public/js/scripts.js** file.

Please use multiple files rather than stuffing all javascript into a single file.

### Vendor directory

The `vendor` directory can be used to add third party libraries that have not already been added via NPM. It is preferable to use NPM if at all possible.

`modernizr-custom.js` is added in this directory because it is a custom build from the [Modernizr website](https://modernizr.com/). You can make your own build specific to your site.


## Dependencies

See the [Assets (CSS & JS)](assets-css-js.md) documentation for how to add javascript via NPM.

### Requiring packages

The JS in package.json `dependencies` *will not* automatically be compiled and added to production javascript.

[Webpack](https://webpack.js.org/) is used to compile all Javascript. Adding a Javascript package into your code is as easy as using a `require()` or `import`.

```js
// ES5
var jQuery = require('jquery');
```

```js
// ES6
import jQuery from 'jquery';
```

If for some reason a file needs a package loaded to the `window` object in order to function, it is best to use `require()` so that Webpack doesn't move it before other code.

```js
import jQuery from 'jquery';
window.jQuery = jQuery;
require('superfish');
```

### Externally loaded Javascript Dependencies

If a Javascript package will be loaded externally (perhaps by a CDN) then you can specify this in `gulp-config.yml` so that Webpack will not add the package into the compiled Javascript file.

```yaml
js:
  externals:
    jquery: 'jQuery'
```


## Compiling of ES6 to ES5 Javascript

By default, all Javascript code will be compiled to ES5 with [Babel](https://babeljs.io/) so that it is safe for Browsers. This means that you can write modern Javascript and take advantage of modern practices.


## Validation

[ESLint](http://eslint.org/) is being used to validate javascript.

The gulp task `gulp validate:js` can be used to easily validate all javascript.

By default, any javascript files in the `vendor` directory will not be validated since they will come from third parties.


## Useful Articles and Links

* [Drual JS Coding Standards](https://www.drupal.org/node/172169)
* [jQuery Coding Standards](https://www.drupal.org/node/1720586)
