# Assets (CSS & JS)

To add either CSS or JS to Pattern Lab, use one of these methods:

## NPM Dependencies

NPM is a Node package manager for the web. It is useful for adding third party libraries for both development and site inclusion.

Install any [NPM](https://www.npmjs.com/) component with the `--save` flag. You can search for anything that NPM can install and run:

    $ npm install {thing} --save

Use `--save` when a package needs to be added as a dependency to the browser such as using [jQuery](https://jquery.com/).


## NPM CSS Dependencies

The CSS in package.json `dependencies` *will* automatically be compiled to the `vendor.css` files.

If you don't want a file to be used then you can exclude it in the `gulp-config.yml` file.

```yaml
css:
  vendor:
    - '!node_modules/bootstrap/**/*.css'
```


### Node Include Paths

If NPM (node.js) is used to add dependencies and libraries for Sass then it is helpful to add its `nodeFiles:includePaths` to the `gulp-config.yml` file. This allows shorter import names to work in Sass files.

With an `includePaths` added to the `gulp-config.yml` file a simple `@import "breakpoint";` can be used instead of `@import "../node_modules/breakpoint-sass/stylesheets/breakpoint";"`.

This also helps with any dependencies that a NPM package might rely on.


## NPM Javascript Dependencies

The JS in package.json `dependencies` *will not* automatically be compiled and added to production javascript.

See [Using Javascript](javascript.md) for information on how to require a package.


## Editing the head or foot partial

If you want to add custom scripts or tags into the header or footer then you can use these files:

- `pattern-lab/source/_meta/_00-head.mustache`
- `pattern-lab/source/_meta/_01-foot.mustache`
