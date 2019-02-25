---
title: Global header
description: This is the header that appears at the top of every page.
---

<div class="preview">
  <header class="global-header">
    <div class="grid-box">
      <div class="align-left">
          <h1 class="global-header-title"><img class="header-icon" src="/media/images/springfield_logo.png"/><a href="/">City of {{ site.title }}</a></h1>
      </div>
      <div class="bar-menu global-header-menu align-right">
        <a href="#" class="menu-item">Services</a>
        <a href="#" class="menu-item">Announcements</a>
        <a href="#" class="menu-item">Events</a>
        <a href="#" class="menu-item">More</a>
        <a href="#" class="menu-item js-search-button"><span class="fa fa-search"></span></a>
      </div>
    </div>
  </header>
  <div class="global-header-search">
    <form action="" class="searchbar">
      <input class="searchbar-input" type="search" placeholder="How can we help you?">
      <input class="searchbar-button" type="submit" value="&#xf002">
    </form>
  </div>

</div>

#### Reversed global header

Use this when the global header is placed on a dark background color. Note that the logo URL should be changed to the white logo as well.

<div class="preview">
  <header class="global-header reverse-global-header home-hero-header" role="banner">
    <div class="grid-box">
      <div class="width-one-whole">
        <div class="align-left">
          <div class="global-header-logo">
            <a href="/"><img class="header-icon" src="/media/images/cfa-logo-white.png" alt="Code for America Logo" /></a>
          </div>
        </div>
        <div class="button-menu global-header-buttons align-right" role="navigation">
          <a class="menu-item button button-small button-primary" href="#" title="Donate">Donate</a>
          <a class="menu-item button button-small js-menu-button" href="{{ siteUrl }}donate" title="Open menu"><span class="fa fa-bars"></span> Menu</a>
        </div>
      </div>
      <div class="width-one-whole global-header-navigation">
        <div class="bar-menu global-header-menu align-left" role="navigation">
          <a href="#" class="menu-item">Who we are</a>
          <a href="#" class="menu-item">What we do</a>
          <a href="#" class="menu-item">Why we do it</a>
          <a href="#" class="menu-item">Join us</a>
        </div>
        <div class="bar-menu global-header-menu align-right" role="navigation">
          <a href="#" class="menu-item">Blog</a>
          <a href="#" class="menu-item">2016 Summit</a>
        </div>
      </div>
    </div>
  </header>
</div>
