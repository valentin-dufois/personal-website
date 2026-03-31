---
layout: project.njk
projectTitle: "Connect"
metaTitle: "Connect - Valentin Dufois"
metaDescription: "Connect: a platform I designed and built as sole engineer at NEO-OOH (Quebecor Media) over four years."
---

I was the **sole engineer** on Connect for four years at <a href="https://neo-ooh.com/" target="_blank" rel="noreferrer">NEO-OOH</a> (now Quebecor Media). I designed and built this platform entirely from scratch, handling everything from stack selection and architecture to database schema, UI, and deployment.

Neo is a digital advertising company operating screens across Canada. Connect became the central nervous system of the company, handling everything from ad scheduling to inventory management to sales tooling. What started as a simple replacement for an aging scheduling system grew into a platform used daily by every team in the company.

The stack: **Laravel** backend, **React** frontend, **PostgreSQL** database, running on **Nginx**. Bilingual (EN/FR), with granular user management and role-based access control.

Connect is built as a modular platform. Each module serves a specific purpose but integrates deeply with the others.

## Broadcast

The broadcast module was the first piece built. It provides a unified scheduling and monitoring interface for ad campaigns, regardless of the underlying broadcast system.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.broadcast.png" alt="Connect campaign schedules">
  <figcaption>View of a campaign's schedules</figcaption>
</figure>

I designed an **adapter system** that describes campaigns in a neutral format, then translates them to each broadcast platform's native API. This makes it possible to manage a heterogeneous network of screens and systems from a single interface. Connect supports adapters for BroadSign, PiSignage, and Navori.

Campaign monitoring is centralized, making it fast to track performance across all platforms at once.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.broadcast-2.png" alt="Connect campaign performance view">
  <figcaption>View of a campaign's performances</figcaption>
</figure>

## Inventory

Neo's inventory follows a `property > products` structure I designed to match how the teams actually think about their network.

Over time, the data grew significantly: traffic numbers, pricing, tenant directories, impression calculations, demographic data, photos, and more.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.inventory.png" alt="Connect product inventory details">
  <figcaption>All the information about a product</figcaption>
</figure>

The inventory also needs to stay synchronized across multiple programmatic advertising platforms. I built a **sync engine** that propagates updates to Odoo, Hivestack, BroadSign Reach, Atedra, and Vistar automatically, supporting both push and pull directions.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.inventory-2.png" alt="Connect extended product information">
  <figcaption>Even more information about a product</figcaption>
</figure>

## The Planner

The Planner is Neo's sales tool. It lets salespeople build detailed, large-scale ad campaigns quickly.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.planner-1.png" alt="Connect planner map view">
  <figcaption>The planner's map, with the city of Montreal boundary and Tim Hortons shown in red.</figcaption>
</figure>

Beyond the basics (product selection, discounts, production costs), the real power is in the **filter system** I built:

* **Points of Interest**: Place POIs on the map by address or name (Tim Hortons, banks, etc.) and limit selection to products within a chosen radius.
* **Polygons**: Draw shapes on the map to define geographic zones.
* **Demographic Filters/Vividata**: Filter properties using over 5000 demographic variables.
* **Boundaries**: Census data for cities, forward sortation areas, and electoral districts.
* Tags, technical specs, and more.

Filters can be grouped with configurable logic (AND/OR), and each can be inverted. Results explain exactly why a product was included or excluded.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/connect/connect.planner-2.png" alt="Connect planner list view">
    <figcaption>The list view showing calculated details for all products</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/connect/connect.planner-3.png" alt="Connect planner filter results">
    <figcaption>Filter results explaining why a product is included</figcaption>
  </figure>
</div>

The Planner became a tool used not just by sales, but by many different teams at Neo for getting insights on the network. Campaigns can be shared externally via a simplified read-only link.

## Contracts

Contract monitoring tracks campaign performance across all broadcast systems in a single view.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.contracts.png" alt="Connect contract monitoring">
  <figcaption>A contract homepage</figcaption>
</figure>

Previously, operators had to check multiple platform interfaces. Connect centralizes everything and supports automated screenshot generation for proof-of-play, even mocking the screenshots onto photos of the actual screens.

---

Connect went from a one-module tool to a platform that touches every part of Neo's operations. Building it solo over four years gave me deep experience in designing systems that scale with a company's needs, and the satisfaction of knowing it made a real difference in people's day-to-day work.
