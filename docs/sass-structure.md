# SASS Folder Structure

> The supplied Sass structure is entirely optional. You can use it as a starter or wipe out the folder completely and start from scratch with just a `sass/style.scss` file.

```
|-- sass
|   |-- 0_tools
|   |-- 1_base_html
|   |-- 2_base_class
|   |-- 3_component
|   |-- 4_region
|   |-- 5_layout
|   |-- _hacks.scss
|   |-- _variables.scss
|   |-- style.scss
```

## 0. Tools
This folder contains global tools or base settings.

Mixins should be placed here so that they are usable for all SASS partials.

The `objects` folder contains css objects that are self-contained and reusable.
They are prefixed with `.o-` to easily identify them in markup.

The `utility` folder contains global css utility helper classes which are
prefixed with `.u-` to easily identify them in markup. They make use of
`!important` to ensure that their styles always apply ahead of those defined in
a component's dedicated CSS.

## 1. Base HTML
Only basic HTML tags should be used in this directory. This is the foundation
for all classes which will follow.

> PatternLab mapping: Atoms

## 2. Base Class
Any basic element styles which would augment Base HTML or will be needed by
various components should go here. Examples would be Buttons or other default
styles before being turned into Components.

> PatternLab mapping: Atoms

## 3. Components
**The majority of all styles will go here.** Each component should be completely
isolated from any other component. There should not be any sharing of styles
among components. As well, cascading order should not be required for any
component.

> PatternLab mapping: Molecules and Organisms

In general, stay away from assuming any sort of HTML structure. Obviously this
isn't always possible, but it's a good rule of thumb to follow.

Don't Use:
```scss
.block div ul li {
  margin: 0;
}
```
Instead Use:
```scss
.block__item {
  margin: 0;
}
```

## 4. Region
This section is for any larger formatting to a specific region such as a header
or footer. Think of this as something that augments and holds compontents inside
of it. This section should be used sparingly.

> PatternLab mapping: Organisms

## 5. Layout
Use this folder for any sitewide layout classes. This should be agnostic from
the rest of the site's styles.

> PatternLab mapping: Templates

Prefix layout classes with `.l-` which will make reading through html easy to
spot layout items.

For Example:
```scss
.l-header {}
.l-footer {}
```

## Files
**_hacks.scss**: this partial should be used sparingly when something needs to
be done very quickly without time to put a style in its proper place. This file
overrides everything so it should be cleaned up regularly so that styles go in
their proper place.

**_variables.scss** contains all the site SASS variables which will be used by
components, mixins, and anything else which needs values abstracted for
site-wide use.

**style.scss**: This is the main file which will be rendered into **style.css**.
It contains all of the SASS libraries and partials necessary to build CSS. 

Don't put any styles directly into **style.scss**!

# Tips and Tricks

The `style.scss` file is your master control. It uses Glob patterns to import
partials within the directory structure. This means that you can comment out
entire sections easily.

To comment out all but the most basic styles, do the following:

```scss
// Partials
@import "1_base_html/**/*";
@import "2_base_class/**/*";
//@import "3_component/**/*";
//@import "4_region/**/*";
//@import "5_layout/**/*";
```

## But I don't know how to use Sass/Scss!!!

Don't forget that you can just write normal CSS in a `.scss` file. So don't
feel like you have to use all the extra Sass syntax/mixins/variables/etc.

# CSS formatting guidelinesWe use the [Drual CSS guidlines](https://www.drupal.org/node/1887862)
and [Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture)

One item to note is that this guideline is for CSS and does not take SASS/SCSS
syntax into account. Because of this we do have one specific change.

Place a space in between each class. This allows better readability since each
SASS partial will only have a few classes per file.

Example
```scss
.block {
  padding: 1em;
}

.block--success {
  color: green;
}
```

> ID tags should NEVER be used! Only use classes.

## SASS formatting guidelines
The order of mixins and placeholders:

1. extend %placeholder
2. include mixin()
3. regular styles
4. include breakpoint() //media query

```scss
.block {
  // Placeholder is extended
  @extend %default-block;
  
  // Mixin is added
  @include font-size(16px);
  
  // Normal styles are used
  padding: 0;
  text-align: center;
  
  // Use a Media Query to augment for responsive design
  @include breakpoint(500px) {
    padding: 1em;
  }
}
```

## BEM naming format using SASS
```scss
.block {
  // Add any .block styles here
 
  &__element {
    // Add any elements styles here
  }
  
  &--modifier {
    // Add modifiers here
  }
}
```

This will render into CSS
```scss
.block {
  // .block styles here
}
 
.block__element {
  // .block__element styles here
}
  
.block--modifier {
  // .block--modifier styles here
}
```

## Validation

[Sass Lint](https://github.com/sasstools/sass-lint) is being used to validate
Sass/Scss files via the [gulp-sass-lint](https://www.npmjs.com/package/gulp-sass-lint).

The gulp task `gulp validate:css` can be used to easily validate all Sass.



# Useful Articles and Links
Drupal CSS formating guides

* [Drual CSS guidlines](https://www.drupal.org/node/1887862)
* [Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture)
 - We are using a different folder structure, but if follows the same ideas.

BEM naming convention

* [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)

Sass Info

* [http://sass-lang.com/guide](http://sass-lang.com/guide)
* [http://leveluptuts.com/tutorials/sass-tutorials](http://leveluptuts.com/tutorials/sass-tutorials)

Sass Libraries, Helpers, and Shortcut tools

* [Singularity](https://github.com/at-import/Singularity/wiki) - This is a very
flexible grid system if you are not able to use CSS Grids yet.
* [Breakpoint](http://breakpoint-sass.com/) & [Breakpoint Wiki](https://github.com/at-import/breakpoint/wiki)
 - Use Breakpoint for media queries in responsive design.
* [Toolkit](https://github.com/at-import/toolkit) - This is a library of cool
mixins and helpers.

Sass Playground (use this to try things out)

* [SassMeister](http://sassmeister.com/)
* [CodePen](http://codepen.io/pen/)
