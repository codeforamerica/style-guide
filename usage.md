---
layout: home
title: "Usage Instructions"
---
## Installation via npm

Install the style guide via npm with:

```
npm install --save @codeforamerica/style
```

If using Rails, make sure to add the `node_modules` directory to your asset paths.

```
# config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join('node_modules')
```

## Installation via hotlinking
<div class="alert-caution">
  This method is deprecated. We recommend installation via npm for better control over versioning.
</div>

You can include the Code for America Style Guide by adding to your `<head>` the following element:

```
<link rel="stylesheet" href="//v4.style.codeforamerica.org/css/main.css">
```

To also include the associated JavaScript, add the following to the end of your `<body>` tag:

```
<script src="//v4.style.codeforamerica.org/js/jquery-1.11.2.min.js"></script>
<script src="//v4.style.codeforamerica.org/js/site.js"></script>
```

## Usage
Once installed, you can include the entire stylesheet in your Sass with:

```
@include '@codeforamerica/style/_sass/main';
```

or include the individual Sass files as desired.
