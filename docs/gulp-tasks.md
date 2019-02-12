# About Gulp

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more.

- [Gulp Website](http://gulpjs.com/)
- Article from CSS Tricks: [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

## UCD Theme Tasks

The [UCD Theme Tasks](https://www.npmjs.com/package/ucd-theme-tasks) node package contains all of the gulp tasks and wiring. Using this package allows configuration of your site through a `gulp-config.yml` file.

## Local Gulp Configuration

Gulp configuration can be customized to a local environment by creating a `gulp-config.local.yml` file. Any custom config specific to a local setup can be placed in here and it will not be committed to Git.

Project configuration is found in `gulp-config.yml`. You can copy out config you want to change into your custom file. This file overrides default config in [https://github.com/ucdavis/ucd-theme-tasks/blob/master/docs/config.md](https://github.com/ucdavis/ucd-theme-tasks/blob/master/docs/config.md)

## Gulp Tasks

There are 4 main gulp tasks you should be aware of. Just add `npx gulp` before each task like `$ npx gulp help`.

1. **Help** - Displays a list of all the available tasks with a brief discription of each
2. **Default** - Generate the entire site and start watching for changes to live reload in the browser
3. **Compile** - Generate the entire site with all assets such as css and js
4. **Validate** - Validate CSS and JS by linting

`$ npx gulp` is the one most often used and is the same as `$ npx gulp default`

## Using Gulp with PHPStorm

PHPStorm has [Gulp Tool Window](https://www.jetbrains.com/phpstorm/help/gulp-tool-window.html) for easy use of Gulp tasks.
Right-click on the `gulpfile.js` file and choose `Show Gulp Tasks` to open the window.

Double click `default` to start gulp and begin watching files for changes.

You can double click `help` to see descriptions of available tasks

## BrowserSync

BrowserSync is being used by Gulp to allow live reloading so that changes will be injected automatically into the site without having to reload.
