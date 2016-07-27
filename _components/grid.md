---
layout: styleguide
title: Grid System
order: 0
---

<p class="lead-in">Use the grid system to build the layout of custom page templates</p>

The grid system is based off of the [Neat](http://neat.bourbon.io/) framework by [Thoughtbot](https://thoughtbot.com/). Width classes are provided to quickly build basic grid layouts that default to 100% width on mobile widths. For nested grids or more nuanced responsiveness, use the build in Neat Sass mixins.

<div class="grid-box">
  <div class="grid-item width-one-half">
    <p><code>.width-one-half</code></p>
    <p><code>.width-one-third</code></p>
    <p><code>.width-two-thirds</code></p>
    <p><code>.width-one-fourth</code></p>
    <p><code>.width-three-fourths</code></p>
    <p><code>.width-one-six</code></p>
  </div>
  <div class="grid-item width-one-half">
    <p><code>.width-five-sixths</code></p>
    <p><code>.width-one-twelfth</code></p>
    <p><code>.width-five-twelfths</code></p>
    <p><code>.width-seven-twelfths</code></p>
    <p><code>.width-eleven-twelfths</code></p>
  </div>
</div>

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

### Notes

1. Generally, fractional widths of all grid items within a grid box should add up to one complete row. If whitespace is needed within a row, `shift` classes are available to add whitespace to the left of a grid item.

1. If a grid box needs to contain more than one row, the class `.end-row` is required on the last item of each row.