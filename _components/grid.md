---
layout: styleguide
title: Grid System
---

The grid layout system is a basic grid system used to build site pages where they layout is largely rectangular blocks of content (e.g., homepages and navigation pages). Content in the grid layout is placed with modular **grid items** which live inside **grid boxes**. Grid items require width classes to define what percentage of the screen they should take up. Width classes include:

- `.width-one-half`
- `.width-one-third`
- `.width-two-thirds`
- `.width-one-fourth`
- `.width-three-fourths`
- `.width-one-six`
- `.width-five-sixths`
- `.width-one-twelfth`
- `.width-five-twelfths`	
- `.width-seven-twelfths`
- `.width-eleven-twelfths`
		
## Notes

1. Generally, fractional widths of all grid items within a grid box should add up to one complete row. If whitespace is needed within a row, `shift` classes are available to add whitespace to the left of a grid item.

1. If a grid box needs to contain more than one row, the class `.end-row` is required on the last item of each row.

1. On mobile devices, all grid items default to 100% width.

1. For more complicated grid use cases (such as nested grids or different behavior on mobile devices), use the built in Bourbon and Neat Sass mixins.

## Example Grid Box

<div class="preview">
	<div class="grid-box grid-box-example">
		<div class="grid-item width-one-third">One Third</div>
		<div class="grid-item width-two-thirds">Two Thirds</div>
	</div>
</div>

## Example Grid Box Using Shift Classes

<div class="preview">
	<div class="grid-box grid-box-example">
		<div class="grid-item width-two-thirds shift-one-third">Two Thirds (Shifted One Third)</div>
	</div>
</div>


## Example Grid Box with Multiple Rows

<div class="preview">
	<div class="grid-box grid-box-example">
		<div class="grid-item width-one-whole">One Whole</div>
		<div class="grid-item width-one-half">One Half</div>
		<div class="grid-item width-one-half end-row">One Half</div>
		<div class="grid-item width-one-third">One Third</div>
		<div class="grid-item width-two-thirds end-row">Two Thirds</div>
		<div class="grid-item width-one-fourth">One Fourth</div>
		<div class="grid-item width-three-fourths">Three Fourths</div>
	</div>
</div>