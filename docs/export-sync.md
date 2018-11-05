# Export and Sync styles into a New Site

## New Site Starterkit

You can wire up a new site with all the styles, config, gulp tasks, and directory structure with a simple Gulp command. However, first you need to add some custom config so that it knows where to stick your new code.

1. Create a `gulp-config.local.yml` file and add the following code with the `dest` set to the location for where you want the code to go:

```yaml
themeSync:
  enabled: true
  newsite: true
  dest: /location/to/stick/the/code
```
2. Now you can just run a simple Gulp command to generate all the starterkit code.

    $ gulp newsite

3. Finally, edit the `package.json` files to customize to your site. As well, you can edit the `gulp-config.yml` file to your specs.

## Sync Pattern Lab styles into an external site's theme

1. Add the following code into a `gulp-config.local.yml` file and set the `dest` to the location for where you want the code to go:

```yaml
themeSync:
  enabled: true
  dest: /location/to/stick/the/code
```
2. Run the theme sync gulp task:

    $ gulp themesync
