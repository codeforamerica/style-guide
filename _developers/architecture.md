---
layout: styleguide
title: CSS Architecture
order: 0
---

1. The CSS foundation of this site is built with the **Sass** preprocessor langauge.
1. The **Bourbon** library is used for auto browser prefixing and the **Neat** library is used for the grid framework. Bourbon and Neat are open-source products from **Thoughtbot**.
1. The CSS organization and naming conventions are based loosely on **SMACSS** guidelines.
1. Media queries are built **mobile first**.
1. Hard coded magic numbers are avoided and, if necessary, defined in the `_variables.scss` file.
1. Spacing units are as much as possible defined as `rem` or `em` units so they scale appropriately with text size.

## Browser Support
Browser compatility is tested against IE8 and up, and latest versions of Chrome, Firefox, and Safari. Partial support for HTML5 and CSS3 in IE8 and IE9 are supplied by polyfills:

1. **html5shiv:** adds support for HTML5 elements.
1. **respond.js:** addds support for media query.
1. **selectivr.js:** adds support for CSS3 psuedo and attribute selectors.
1. **rem.js:** adds support for rem units.