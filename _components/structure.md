---
layout: styleguide
title: Structural Elements
---

## Slab Section

Slab are used to separate logical chunks of content within a page. They are a foundational building block of content meant to be customized for specific usages. Each instance of a slab section should have a second class of `section-slab-[instance]` where custom styles can be applied. 

Common uses of slab sections would to be include a header and custom layout of elements using the grid box layout. Custom background colors or images can also be applied to slab sections as they are full-bleed by default.

<div class="preview">
	<section class="section-slab section-slab-example">
		<h2>Slab Section Title</h2>
		<div class="grid-box">
			<div class="grid-item width-one-third">
				<aside>Grid Item</aside>
			</div>
			<div class="grid-item width-one-third">
				<aside>Grid Item</aside>
			</div>
			<div class="grid-item width-one-third">
				<aside>Grid Item</aside>
			</div>
		</div>
	</section>
</div>


## Asides

<div class="preview">
	<aside>
		<p>Asides, or callouts, are used to block off a specific portion of text that is periperal to the main body text. They can contain headings as well.</p>
	</aside>
</div>

<div class="preview">
	<aside class="width-one-half align-right">
		<h3>Aside Header</h3>
		<p><a href="#">Example of a link within an aside</a></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero perferendis placeat error nemo, atque accusantium?</p>
	</aside>
	<p class="is-peripheral">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa voluptatem consequuntur, mollitia soluta, quasi ducimus voluptate vitae eum nulla ad aliquid, saepe reprehenderit. Dolorem, voluptates, corrupti? Labore, rem, incidunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque maiores quas, adipisci cum voluptate vero necessitatibus animi iure similique? Illo, impedit reiciendis cumque saepe ut quaerat odio dolorum sapiente. Delectus.</p>
</div>


## Tables

<div class="preview">
	<table>
	  <thead>
	    <tr>
	      <th>Row 1</th>
	      <th>Row 2</th>
	      <th>Row 3</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>item 1</td>
	      <td>item 2</td>
	      <td>item 3</td>
	    </tr>
	    <tr>
	      <td>item 1</td>
	      <td>item 2</td>
	      <td>item 3</td>
	    </tr>
	    <tr>
	      <td>item 1</td>
	      <td>item 2</td>
	      <td>item 3</td>
	    </tr>
	  </tbody>
	</table>
</div>