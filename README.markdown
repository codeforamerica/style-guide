# Code for America's Style Guide
======

* **Current stable version:** 4 ([release-2](https://github.com/codeforamerica/style-guide/tree/master) tag / linkable [url](https://v4.style.codeforamerica.org/))
* **Previous release (unsupported):** 3 ([master](https://github.com/codeforamerica/pattern-library/tree/master) branch / linkable [url](https://style.codeforamerica.org/3/))

The style guide serves as the base CSS and organizing styles for [www.codeforamerica.org](http://www.codeforamerica.org). The style guide is primarily a living pattern library that explains how to use our CSS to build websites. It contains:

- A Jekyll site that serves as a living style guide and pattern library
- A foundational CSS structure built with Sass
- A grid-based layout system using Bourbon and Neat
- Basic web typography
- Code for America specific page templates
- Polyfills that help older versions of IE support HTML5 elements, pseudoclasses, media queries, and rem units.
- Additional vendor JavaScript to help with interactions

## History and past versions

Code for America's communications and tech teams originally worked with Brighton web design firm [Clearleft](http://clearleft.com/) and Colorado branding firm [Dojo4](http://dojo4.com/) to create a new visual design and front-end for the Code for America website. This original pattern library existed through three major releases before being retired in favor of the current trimmed-down style guide in this repo that is solely focused on providing patterns for building www.codeforamerica.org. [See the original pattern library repository](https://github.com/codeforamerica/pattern-library).

## How to use it to build websites

1. **[Read the docs.](https://v4.style.codeforamerica.org)** Complete documentation of the pattern library with copy-and-pastable code snippets is available at [https://v4.style.codeforamerica.org](https://v4.style.codeforamerica.org).
2. **Add links to your document.** For example, add these links to your `<head>` tag:

```
<head>
  ...
  <!-- Pattern Library Stylesheets -->
  <link rel="stylesheet" type="text/css" href="https://v4.style.codeforamerica.org/css/main.css">
  <!-- Font Vendor Stylesheets -->
  <script src="https://use.typekit.net/lkd6vsz.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!-- Shims For Old Browsers -->
  <!--[if lt IE 9]>
    <script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="https://s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
    <script src="/js/selectivizr-min-1.0.2.js"></script>
    <![endif]-->
  ...
</head>
```

And add the following after all the content in your `<body>` tag:

```
<body>
  ...other content...
  <!-- SCRIPTS -->
  <script src="https://v4.style.codeforamerica.org/js/jquery-1.11.2.min.js"></script>
  <script src="https://v4.style.codeforamerica.org/js/site.js"></script>
</body>
```

## Develop locally

#### Prerequisites

Jekyll is a static site generator built with Ruby that needs the following to run:

* Ruby ([here's a quick install guide](https://github.com/codeforamerica/style-guide.git))
* Bundler ([see the project website](http://bundler.io/))
* Node, for SCSS compilation ([see our install guide](https://github.com/codeforamerica/howto/blob/master/Node.js.md))

#### Basic steps to get up and running

First, you need the prerequisites listed above. This starter requires Jekyll to be installed in order to build and preview. To install Jekyll, clone the repo, cd into the folder, and run `bundle install`:

```
$ git clone https://github.com/codeforamerica/style-guide.git
$ cd style-guide
$ bundle install
```

#### Running Locally

To preview the site locally, use the Jekyll command:

```
$ bundle exec jekyll serve
```

The site should be viewable at localhost:4000. The styleguide is located at 'localhost:4000/styleguide'.

## Contributing

We welcome bugs, questions and suggestions in the form of issues, or features and code fixes in the form of a pull request.

### Submitting a Pull Request

1. Fork the project.
2. Create a topic branch (name it something verb-y, like `fix-layout-padding`).
3. Make your changes, and commit with descriptive commit messages.
4. Push your changes.
5. Submit a pull request.

### <a name="issues"></a>Submitting an Issue

We use the GitHub issue tracker to track bugs and features. Before submitting a bug report or feature request, check to make sure it hasn't already been submitted. When submitting a bug report, please include a screenshot and any additional details that can help us debug, such as your operating system and browser version.

## License

Copyright (c) 2009-2015 Code for America. See the [LICENSE](https://github.com/codeforamerica/pattern-library/blob/master/LICENSE) for details.
