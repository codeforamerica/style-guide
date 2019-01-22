---
title: CSS Architecture
---

1. The CSS foundation of this site is built with the **Sass** preprocessor langauge.
1. The **Bourbon** library is used for auto browser prefixing and the **Neat** library is used for the grid framework. Bourbon and Neat are open-source products from **Thoughtbot**.
1. Media queries are built **mobile first**.
1. Hard coded magic numbers are avoided and, if necessary, defined in the `_variables.scss` file.
1. Spacing units are as much as possible defined as `rem` or `em` units so they scale appropriately with text size.

## Naming Convention
{: .styleguide-heading }
The naming convention used in this library is based off of BEM methodologies (block, element, modifier) but uses a more casual and human readable syntax. All words are separated by a single dash and modifiers come directly before the object they are modifying. The purpose of this is to have a more friendly language for those not familiar with BEM but still imposes a logical convention for structure. For example:

<div class="grid-box">
  <ul class="grid-item unstyled-list width-one-half">
    <li><code>.block</code></li>
    <li><code>.block-element</code></li>
    <li><code>.modifier-block-element</code></li>
  </ul>

  <ul class="grid-item unstyled-list width-one-half">
    <li><code>.alert</code></li>
    <li><code>.alert-title</code></li>
    <li><code>.danger-alert-title</code></li>
  </ul>

</div>


## Browser Support
{: .styleguide-heading }
Browser compatility is tested against IE8 and up, and latest versions of Chrome, Firefox, and Safari. Partial support for HTML5 and CSS3 in IE8 and IE9 are supplied by polyfills:

1. **html5shiv:** adds support for HTML5 elements.
1. **respond.js:** addds support for media query.
1. **selectivr.js:** adds support for CSS3 psuedo and attribute selectors.
1. **rem.js:** adds support for rem units.
