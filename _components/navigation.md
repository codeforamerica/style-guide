---
layout: styleguide
title: Site Navigation
---

These patterns are reusable blocks of code meant for developers and designers to build site templates.

### Global Header

This is the header that appears at the top of every page.

<div class="preview">
	<header class="global-header">
		<div class="grid-box">
			<div class="grid-item width-one-half">
				<h1><a href="/">City of {{ site.city }}</a></h1>
			</div>
			<div class="grid-item width-one-half">
				{% unless page.role == 'homepage' %}
				<form class="site-search">
				    <input type="search" placeholder="e.g., pay a parking ticket">
				    <input type="submit" value="&#xf002">
				</form>
				{% endunless %}
			</div>
		</div>
	</header>	
</div>



### Global Footer

This is the footer that appears at the bottom of every page.

<div class="preview">
	<footer class="global-footer">
		&copy; 2015 City of {{ site.city }}
	</footer>

</div>

### Breadcrumbs

Breadcrumbs offer a contextual cue to where the user is in the site hierarchy. They are especially useful when users arrive at a page from a different website (e.g, Google) and provide a sense of context to where they are and allows them to quickly navigate to a different context if necessary.

<div class="preview">
	<nav class="nav-breadcrumbs">
	    <span class="nav-breadcrumbs-item"><a href="#">City</a></span>
	    <span class="nav-breadcrumbs-item"><a href="#">Service</a></span>
	    <span class="nav-breadcrumbs-item"><a href="#">Subservice</a></span>
	    <span class="nav-breadcrumbs-item">Article Name</span>
	 </nav>
</div>

### Sidebar

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

### Search Site Form

A default combinaton of a seach type input and a custom submit button used to globally search the site.

<div class="preview">
	<form class="site-search">
	    <input type="search" placeholder="e.g., pay a parking ticket">
	    <input type="submit" value="&#xf002">
	</form>
</div>