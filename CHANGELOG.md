NewsHub / Changelog
===================

## Version 2.0.0 (Stable)
- Info: OctoberCMS v2 support has been dropped; v3 or v4 is required to use the new NewsHub theme.
- Add: Support for OctoberCMS v4.
- Add: Support to seed some demo content using `php artisan theme:seed` command.
- Add: Switched to Vite with HMR development support, instead of using esbuild.
- Add: New vite bundler and watcher script setup.
- Add: New "Snippets" options to append html content to three layout positions.
- Add: New "Site-Verification Tags" options for Google Search Console, Bing Webmaster Tools, Yandex & Meta.
- Add: Support for `size` and `color` on each bootstrap icon partial.
- Update: `package.json` dependencies.
- Update: TypeScript utility functions.
- Update: Using Bootstrap’s new color-mode (`data-bs-theme`) for dark and light color schemes.
- Update: SCSS file structure and bootstrap order changes.
- Update: Many minor styling and Bootstrap 5.3 changes.
- Update: Use new `page/_meta` / `page/_start` / `page/_end` partials.
- Update: Merge `header` & `footer` options to a single `layout` page.
- Update: Separate "dark-utilities" classes from "$utilities" / move to theme.scss.
- Remove: esbuild bundler script and dependencies.
- Remove: Drop support for `RainLab.BlogVideoExtension` (since it has been removed by the authors).
- Fix: Replace all `|_` TWIG translation filters with `|trans`.
- Fix: Include `_start` / `_end` partials on maintenance page too.
- Fix: Sidebar space remains occupied in the page-builder layout even when `show_sidebar` is disabled.

### ToDo
- Add: Support for the [RainLab.Forum](https://octobercms.com/plugin/rainlab-forum) plugin.
- Add: Embla Carousel to replace the deprecated (may discontinued) Keen Slider.
- Internal Test: SitePicker
- Internal Test Plugin: BlakeJones.MagicForms
- Internal Test Plugin: JanVince.SmallContactForm
- Internal Test Plugin: JanVince.SmallGDPR
- Internal Test Plugin: RainLab.Blog
- Internal Test Plugin: RainLab.Pages
- Internal Test Plugin: RainLab.Sitemap
- Internal Test Plugin: RainLab.Translate v1.9 (OCv3)
- Internal Test Plugin: RainLab.Translate v2.0 (OCv4)
- Internal Test Plugin: RainLab.Forum
- Internal Test Plugin: RainLab.User v1.6 (OCv3)
- Internal Test Plugin: RainLab.User v2.0 (OCv4)

## Version 1.3.0 (Skipped)
- Info: This release was skipped. All features listed below were completed but were shipped in v2.
- Add: Support for the new sitePicker core component, as introduced in OctoberCMS v3.1.
- Add: Support for the [BlakeJones.MagicForms](https://octobercms.com/plugin/blakejones-magicforms) plugin.
- Add: Support for the [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform) plugin.
- Add: Support for the [JanVince.SmallGDPR](https://octobercms.com/plugin/janvince-smallgdpr) plugin.
- Add: Support for the [RainLab.BlogVideoExtension](https://octobercms.com/plugin/rainlab-blogvideoextension) plugin.
- Add: Support for the [RainLab.User](https://octobercms.com/plugin/rainlab-user) plugin (v1 and v2).
- Add: Config option "Prefer SitePicker over LocalePicker" for OctoberCMS v3.1 with RainLab.Translate v1.x installations.
- Add: Config option "SitePicker Appearance" to show language names or full site names, limited to the new SitePicker component.
- Add: Config option "Site/LocalePicker Style" to define how the component should be rendered (Dropdown, Modal, Switch).
- Add: Config meta switches to toggle base, robots, color-scheme and theme-color meta tags.
- Add: Config option "Provide Dark Color-Scheme" to enable the dark color-scheme globally.
- Add: Config option "Overwrite CSS Color Palette" to override theme colors using CSS custom properties.
- Add: Config option "Gray Color Palette" to override the gray color set using CSS custom properties.
- Add: Config option "Header Position" to control the header behavior (Static, Sticky, Slide).
- Add: Config option "Slider Controls" to toggle slider controls on the homepage hero slider.
- Add: Config option "Slider Indicators" to toggle slider indicators on the homepage hero slider.
- Add: Config notice options (color, title, links, content), displayed on the homepage between the hero area and the article list.
- Add: Config option "Post Category" to reference post categories on single posts (and article lists).
- Add: Config option "Post Featured Tags" to reference featured tags on single posts (and article lists).
- Add: Config option "Share Links" to toggle privacy-friendly social share links above article content.
- Add: Config option "Similar / Random Posts" to toggle the similar or random posts section below article content.
- Add: Sidebar configuration using October's grouped repeater widgets.
- Add: "Title & Layout" input-group page builder configuration partial.
- Add: "ID & Class Names" input-group page builder configuration partial.
- Add: "Spacings" range-input page builder configuration partial.
- Add: "Blog Comment" sidebar widget for displaying a list of comments.
- Add: "Image" sidebar widget for showing a custom image with text.
- Add: "Related Posts" sidebar widget for displaying related posts (single post pages only).
- Add: Navbar toggler element ([CodePen Source](https://codepen.io/ainalem/pen/LJYRxz)).
- Add: "User Action" header integration (requires RainLab.User), available on the Extended navbar style only.
- Add: Default favicon and webmanifest set.
- Add: RSS Feed CMS page.
- Update: Accordion content element (new structure).
- Update: Alert / Callout content element (new structure).
- Update: Card content element (new structure).
- Update: Card Group content element (new structure).
- Update: Carousel content element (new structure).
- Update: Content content element (new structure).
- Update: Double Click content element (new structure).
- Update: FlexBox Container content element (new structure).
- Update: Gallery content element (new structure).
- Update: Heading content element (new structure).
- Update: Image content element (new structure).
- Update: List content element (new structure).
- Update: Quote content element (new structure).
- Update: Section content element (new structure).
- Update: Separator content element (new structure).
- Update: Slider content element (new structure).
- Update: Tabs content element (new structure).
- Update: Text with Teaser content element (new structure).
- Update: Theme Options structure and layout.
- Update: Migrated Sidebar to widget environment for Homepage, Archive, Static Page and Blog Post pages.
- Update: `Blog Posts` widget replaces `List Articles` (new builder structure).
- Update: `Blog Authors` widget replaces `List Authors` (new builder structure).
- Update: Added avatar display to Blog Authors list.
- Update: `Blog Categories` widget replaces `List Categories` (new builder structure).
- Update: `Blog Tags` widget replaces `List Tags` (new builder structure).
- Update: `Table of Contents` widget replaces `Table of Contents` (new builder structure).
- Update: `Static Menu` widget replaces `Static Menu`.
- Update: `Content` widget replaces `Content`.
- Update: `HTML Code` widget replaces `HTML Code`.
- Update: `Current Author` widget replaces `Current Author`.
- Update: `Current Categories` widget replaces `Current Categories`.
- Update: `Current Tags` widget replaces `Current Tags`.
- Update: `Next | Previous Posts` widget replaces `Next / Previous Buttons`.
- Update: Added missing JavaScript anchors for the Table of Contents widget.
- Update: Main SCSS file structure.
- Update: Added full color palette to style tag (including RGB variants).
- Update: Unified dropdown design and styling across all header actions (matching main menu styling).
- Update: Search modal and overlay design.
- Update: Rewritten header and navbar JavaScript in the new Navbar class.
- Update: Switched from rollup to esbuild bundling (TypeScript instead of JavaScript).
- Update: Bootstrap upgraded to v5.3.0-alpha2.
- Update: Replaced Bootstrap 5 Lightbox package with a custom Lightbox plugin.
- Update: Keen Slider upgraded to v6.8.5 plus updated stylings.
- Update: Cleaned up template localization strings (English and German).
- Update: TypeScript and JavaScript environment, utilities and modules.
- Update: Offcanvas and modal design including dark variant.
- Update: Dark and light Bootstrap styling improvements.
- Remove: Removed "sticky_header" option, replaced by "Header Position" > "Sticky".
- Fix: Set HTML lang attribute to the current locale instead of fixed "en".
- Fix: Bootstrap URL in placeholder and demo copyright text.
- Fix: No-JS and JS-loading styles for the Keen hero slider.
- Fix: Removed extra div wrapper in the Double Click content element.
- Fix: Class names not passed to the quote content element.
- Fix: Use theme author name in theme links (`ratmd-newshub` instead of `newshub`).
- Fix: Translation issues and YAML import links, as mentioned in issue #4.
- Fix: Additional translation and localization issues in English and German.
- Fix: `CMS_STRICT_VARIABLES=true` .env security option errors.
- Fix: Renamed or removed `.alert-*` styles on the callout component.
- Fix: Table of Contents widget on static pages.
- Fix: Error in `post.featured_images` conditional.

## Version 1.2.2 (Stable)
- Fix: Errors in production context related to the Page object.

## Version 1.2.1 (Stable)
- Update: Meta tags.
- Update: Bootstrap package to v5.2.1.
- Update: Keen Slider package to v6.8.0.
- Update: `@rollup/plugin-bode-resolve` dev package to v14.1.0.
- Update: `sass` dev package to v1.54.9.

## Version 1.2.0 (Stable)
- Add: Alegreya Sans Medium font (weight 500).
- Add: Support for the RainLab.BlogVideoExtension plugin.
- Add: Additional navigation header style with extra action buttons.
- Add: Search and User buttons on the extended header style.
- Add: New search archive and blog page based on `[blogPosts]`.
- Add: Theme option to embed the jQuery framework for OctoberCMS v3+.
- Add: Theme option to embed OctoberCMS “Framework Extras” dependencies.
- Add: Theme option to configure the number of posts shown in the hero slider.
- Add: Theme option to show a comment counter badge above thumbnails.
- Add: Theme option to add a site slogan displayed in the footer.
- Add: Theme options for favicon, vector icon, apple touch icon and webmanifest meta tags.
- Add: Theme options for the meta generator tag.
- Add: New accordion stylings including alternative, no-icon, left-aligned icon and a clean design.
- Add: New `columns-2` styling for main nav items on the main menu (see Page Builder menu on demo site).
- Add: New `footer-menu` position supporting up to 3 header + menu-link items.
- Add: New `meta-menu` position for the advanced header style.
- Add: New Sidebar widget `Text` for displaying custom text.
- Add: New Sidebar widget `HTML` for displaying custom HTML.
- Update: Development dependencies.
- Update: Stylesheet and JavaScript loading order.
- Update: Alert stylings, re-added border radius.
- Update: Moved macros to the new `page/macro.htm` partial.
- Update: Keen Slider initialization script and stylings.
- Update: Use `ocJSON` (OctoberCMS v2) or `oc.parseJSON` (OctoberCMS v3) when available.
- Update: `footer-menu-1` and `footer-menu-2` are deprecated and used as fallback when `footer-menu` is missing or empty.
- Update: Moved Color and Language menu to the actions section of the extended header style.
- Update: Header stylings and template.
- Update: Numerous minor changes across the codebase and stylings.
- Remove: Demonstration content.
- Fix: Theme option for configuring the hero slider category now works.
- Fix: Last menu item not fully visible on mobile devices.
- Fix: Responsive layout of the double-click solution on small screens.
- Fix: Responsive layout of navbars on small screens.
- Fix: Framework Extras and Bootstrap JS functionalities.

## Version 1.1.2 (Stable)
- Add: Weekly Archive page (provided by RatMD.BlogHub v1.3.0).
- Update: RatMD.BlogHub v1.3.0 compatibility.
- Fix: Prevent meta details when no user is assigned to a post.
- Fix: Add jQuery dependency for OctoberCMS v2.

## Version 1.1.1 (Stable)
- Update: Use OctoberCMS VS Code syntax.
- Fix: Prefer Socials folder icons before Bootstrap Icons.
- Fix: Wrong condition on the author archive page.

## Version 1.1.0 (Stable)
- Add: Configurable sidebar widgets for home, page and post CMS pages.
- Add: Article List widget for all sidebars.
- Add: Category List widget for all sidebars.
- Add: Tag List widget for all sidebars.
- Add: Author List widget for all sidebars.
- Add: Static Menu widget for all sidebars.
- Add: Current Author widget for post sidebars.
- Add: Current Categories widget for post sidebars.
- Add: Current Tags widget for post sidebars.
- Add: Next | Previous Posts widget for post sidebars.
- Add: Table of Contents widget for page sidebars.
- Fix: Table of Contents generator skipped the last header element.
- Fix: Missing dark header settings on static page layouts.

## Version 1.0.1 (Stable)
- Update: Added dark highlight.js stylings for `pre` and `code` elements.
- Fix: Form stylings under the dark color scheme.
- Fix: Background color on the full-width page layout.
- Fix: Callout color variables in dark mode.
- Fix: Example component styling and dark border color.
- Fix: Navbar positioning below the hero slider when header is not set to "sticky".

## Version 1.0.0 (Stable)
- Initial release.
