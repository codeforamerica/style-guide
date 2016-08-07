---
layout: styleguide
title: Slabs
description: Slabs are used to separate logical chunks of content within a page.
order: 1
---

They are a foundational building block of content meant to be customized for specific usages. Each instance of a slab section should have a second class of `slab-[instance]` where custom styles can be applied.

Common uses of slab sections would to be include a header and custom layout of elements using the grid box layout. Custom background colors or images can also be applied to slab sections as they are full-bleed by default.

<div class="preview">
  <section class="slab slab-example">
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
