---
layout: styleguide
title: Navigation structures
description: These are major building blocks that should occur on almost every page of the site.
order: 0
---

### Global Header
{: .styleguide-heading }

This is the header that appears at the top of every page.

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

### Global Footer
{: .styleguide-heading }

This is the footer that appears at the bottom of every page.

<div class="preview">
  <footer class="global-footer">
      <div class="grid-box">
          <div class="grid-item width-one-fourth">
            <h1 class="global-footer-title h3"><img class="header-icon-large" src="/media/images/springfield_logo.png"/>City of {{site.title}}</h1>
              <div class="address">
                  <p>155 9th St.</p>
                  <p>San Francisco, CA 94103</p>
                  <p>(415)625-9633</p>
              </div>
              <p>© 2015 City of {{site.title}}</p>
          </div>
          <div class="grid-item width-one-third shift-one-twelfth">
            <div class="global-footer-social bar-menu">
                  <a class="menu-item" href="#"><span class="fa fa-facebook-official"></span></a>   
                  <a class="menu-item" href="#"><span class="fa fa-twitter"></span></a>
                  <a class="menu-item" href="#"><span class="fa fa-envelope"></span></a>
              </div>
            <div class="global-footer-nav grid-box">
              <div class="menu grid-item width-one-half">
                      <a href="" class="menu-item">Services</a>      
                      <a href="" class="menu-item">Initiatives</a>
                      <a href="" class="menu-item">Announcements</a>
                      <a href="" class="menu-item">Departments</a>
                  </div>
                  <div class="menu grid-item width-one-half">
                      <a href="" class="menu-item">Jobs</a>
                      <a href="" class="menu-item">Events</a>
                      <a href="" class="menu-item">Records</a>
                      <a href="" class="menu-item">Give Feedback</a>
                  </div>
            </div>
          </div>
      <div class="global-footer-mayor width-one-fourth shift-one-twelfth">
              <a href="#" class="menu-item">
                  <img class="global-footer-mayor-image" src="/media/images/mayor.png" alt="Portrait of the mayor">
                  <p><b>Our Mayor: Jen Pahlka</b></p>
                  <p>Vist the mayor's page</p>
              </a>

      </div>
      </div>
  </footer>
</div>

### Breadcrumbs
{: .styleguide-heading }

Breadcrumbs offer a contextual cue to where the user is in the site hierarchy. They are especially useful when users arrive at a page from a different website (e.g, Google) and provide a sense of context to where they are and allows them to quickly navigate to a different context if necessary.

<div class="preview">
  <nav class="breadcrumbs">
      <span class="breadcrumbs-item"><a href="#">City</a></span>
      <span class="breadcrumbs-item"><a href="#">Service</a></span>
      <span class="breadcrumbs-item"><a href="#">Subservice</a></span>
      <span class="breadcrumbs-item">Article Name</span>
   </nav>
</div>

### Sidebar
{: .styleguide-heading }

<div class="preview">
  <div class="sidebar">
    <h2>Sidebar Title</h2>
      <ul class="sidebar-menu">
        <li class="is-selected">
          <a href="#">Sidebar Menu Item</a>
          <ul class="sidebar-menu-sublist">
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
          </ul>
        </li>
        <li><a href="#">Sidebar Menu Item</a></li>
        <li><a href="#">Sidebar Menu Item</a></li>
      </ul>
   </div>
</div>

### Searchbar
{: .styleguide-heading }

A default combinaton of a seach type input and a custom submit button used to globally search the site.

<div class="preview">
  <form class="searchbar">
      <input class="searchbar-input" type="search" placeholder="e.g., pay a parking ticket">
      <button class="searchbar-button" type="submit"></button>
  </form>
</div>
