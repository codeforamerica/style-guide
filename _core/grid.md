---
title: Grid System
description: Use the grid system to build the layout of custom page templates.
---

We're using a 12-column grid system based off of the [Neat](http://neat.bourbon.io/) framework by [Thoughtbot](https://thoughtbot.com/). Column width classes are provided to quickly build basic grid layouts that default to 100% width on mobile. For nested grids or more nuanced responsiveness, use the build in Neat Sass mixins.

## Column classes

<p>
  <code>.col-1</code>
  <code>.col-2</code>
  <code>.col-3</code>
  <code>.col-4</code>
  <code>.col-5</code>
  <code>.col-6</code>
  <code>.col-7</code>
  <code>.col-8</code>
  <code>.col-9</code>
  <code>.col-10</code>
  <code>.col-11</code>
  <code>.col-12</code>
</p>

<div class="preview">
  <div class="grid-box grid-box-example">
    <div class="grid-item col-8">.col-8</div>
    <div class="grid-item col-4">.col-4</div>
  </div>
</div>

## Shift classes

<p>
  <code>.shift-1</code>
  <code>.shift-2</code>
  <code>.shift-3</code>
  <code>.shift-4</code>
  <code>.shift-5</code>
  <code>.shift-6</code>
  <code>.shift-7</code>
  <code>.shift-8</code>
  <code>.shift-9</code>
  <code>.shift-10</code>
  <code>.shift-11</code>
  <code>.shift-12</code>
</p>

<div class="preview">
  <div class="grid-box grid-box-example">
    <div class="grid-item col-8 shift-2">.col-8 .shift-2</div>
  </div>
</div>

## Example Grid Box with Multiple Rows

<div class="preview">
  <div class="grid-box grid-box-example">
    <div class="grid-item col-12">.col-12</div>
    <div class="grid-item col-6">.col-6</div>
    <div class="grid-item col-6 end-row">.col-6 .end-row</div>
    <div class="grid-item col-4">.col-4</div>
    <div class="grid-item col-8 end-row">.col-8 .end-row</div>
    <div class="grid-item col-3">.col-3</div>
    <div class="grid-item col-9">.col-9</div>
  </div>
</div>

### Notes

1. If a grid box needs to contain more than one row, the class `.end-row` is required on the last item of each row.
