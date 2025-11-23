NewsHub / Highlights
====================

## v2.0.0
Version 2 introduces several breaking changes, most notably dropping support for OctoberCMS v2. The
theme now requires at least OctoberCMS v3.7 and officially recommends v4. In addition, the old
esbuild-based development workflow has been replaced with a modern Vite setup featuring full HMR
support.

## v1.3.0
Version 1.3.0 of the free NewsHub theme was skipped after a long development break that resulted in
extensive rewrites across nearly every part of the template. All changes listed for this version are
therefore released together with v2, including large-scale improvements to structure, styling,
components and overall theme functionality.

- Added support for SitePicker (OctoberCMS 3.1) and multiple major third-party plugins (MagicForms, SmallContactForm, SmallGDPR, BlogVideoExtension, RainLab.User).
- Major expansion of Theme Options including color-scheme controls, CSS palette overrides, meta tag toggles and header behavior.
- Added multiple new Page Builder configuration partials.
- Added several sidebar widgets: Blog Comment, Image, Related Posts.
- Added new frontend features like RSS page, navbar toggler, User Action header integration and global favicon/webmanifest set.
- Reworked nearly every content element (accordion, cards, carousel, gallery, slider, tabs, etc.) to a modernized structure.
- Migrated Sidebar to a widget-based environment across all page types.
- Massive UI/UX redesigns: dropdowns, search modal, navbar JS rewrite, color palette injection, dark/light scheme improvements.
- Updated core libraries such as Bootstrap 5.3.0-alpha2, Keen Slider and the bundling system (rollup → esbuild).

## v1.2.0
A feature-rich update centered around an expanded Page Builder, introducing more than 18 Bootstrap
and custom content elements for building flexible static pages.

- New **Page Builder** system for static pages including **18 bootstrap-styled Component**.
- New header style with integrated Search and User actions.
- Added support for RainLab.BlogVideoExtension.
- New search archive and blog page powered by `[blogPosts]`.
- Added multiple new theme configuration options (jQuery inclusion, Framework Extras, hero slider count, comment counter badge, favicon/icon/meta tag settings, site slogan).
- New accordion designs plus improved main menu layout with `columns-2`.
- New footer menu structure and meta-menu position.
- New Sidebar widgets: `Text` and `HTML`.
- Significant UI/UX refinements across header, menus, sliders and layout.
- Improved JS and SCSS structure, plus better fallback behavior for menu positions.

## v1.1.0
A focused update that strengthens the core theme structure and introduces a set of new, flexible
sidebar features.

- Introduced fully configurable sidebar widgets for all major CMS pages (Home, Page, Post).
- Added a bunch of new widgets:
    - Article List
    - Category List
    - Tag List
    - Author List
    - Static Menu
    - Current Author
    - Current Categories
    - Current Tags
    - Next/Previous Posts
    - Table of Contents
- Improved dark header compatibility on static page layouts.
