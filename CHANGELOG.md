NewsHub - Changelog
===================

Version 1.3.0 - In Progress
---------------------------
- Add: Support for the new sitePicker core component, as released on OctoberCMS v3.1.
- Add: Support for [BlakeJones.MagicForms](https://octobercms.com/plugin/blakejones-magicforms) OC Plugin.
- Add: Support for [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform) OC Plugin.
- Add: Support for [JanVince.SmallGDPR](https://octobercms.com/plugin/janvince-smallgdpr) OC Plugin.
- Add: Support for [RainLab.BlogVideoExtension](https://octobercms.com/plugin/rainlab-blogvideoextension) OC Plugin.
- Add: Support for [RainLab.User](https://octobercms.com/plugin/rainlab-user) (v1 and v2) OC Plugin.
- Add: Config - "Prefer SitePicker over LocalePicker" for OC v3.1 w/ RainLab.Translate v1.x installations.
- Add: Config - "SitePicker Appearance" to show Language- or full Site- names, limited to the new SitePicker component.
- Add: Config - "Site/LocalePicker Style" to change how the component should be rendered (Dropdown, Modal, Switch).
- Add: Config - Meta switches to toggle base, robots, color-scheme and theme-color meta tags.
- Add: Config - "Provide Dark Color-Scheme" to toggle the dark color-scheme in general.
- Add: Config - "Overwrite CSS Color Palette" to overwrite the theme colors using css custom properties.
- Add: Config - "Gray Color Palette" to overwrite the gray color scheme using css custom properties.
- Add: Config - "Header Position" to change the header position / behavior (supporting Static, Sticky and Slide).
- Add: Config - "Slider Controls" to toggle the slider controls on the homepage hero-slider.
- Add: Config - "Slider Indicators" to toggle the slider indicators on the homepage hero-slider.
- Add: Config - Notice options (with color, title, links and content), shown on the homepage between hero area and article list.
- Add: Config - "Post Category" to reference the post category on the single posts (on the article lists).
- Add: Config - "Post Featured Tags" to reference the featured tags on the single posts (on the article lists).
- Add: Config - "Share Links" to toggle privacy-protected social share links above the article content.
- Add: Config - "Similar / Random Posts" to toggle a similar / random posts section below the article content.
- Add: Config - Sidebar configuration set using October's grouped repeater widgets.
- Add: "Title & Layout" input-group page-builder configuration partial.
- Add: "ID & Class Names" input-group page-builder configuration partial.
- Add: "Spacings" range-input page-builder configuration partial.
- Add: "Blog Comment" sidebar widget to display a list of comments.
- Add: "Image" sidebar widget to display a custom image with text.
- Add: "Related Posts" sidebar widget to display a list of related posts (in single blog posts only).
- Add: Navbar toggler element ([CodePen Source](https://codepen.io/ainalem/pen/LJYRxz)).
- Add: "User Action" header integration (requires RainLab.User), available on Extended navbar style only.
- Add: Default favicon + webmanifest set.
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
- Update: Theme Options structure & layout.
- Update: Sidebar to Widget environment for Homepage, Archive, Static Page and Blog Post pages.
- Update: `Blog Posts` widget replaces `List Articles` (new builder structure).
- Update: `Blog Authors` widget replaces `List Authors` (new builder structure).
- Update: Show Avatars on Blog Authors list.
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
- Update: Missing JavaScript Anchors for Table of Contents Widget.
- Update: Main SCSS file structure.
- Update: Set full color palette into style tag (including rgb variants).
- Update: Change dropdown design / stylings on all header actions (same styling as main-menu).
- Update: Change search modal / overlay design.
- Update: Re-written header / navbar JavaScript (within the new Navbar class).
- Update: Change rollup bundle to esbuild bundle (using TypeScript instead of JavaScript).
- Update: Bootstrap package to v5.3.0-alpha2.
- Update: Change Bootstrap 5 Lightbox package with a custom Lightbox plugin.
- Update: Keen Slider package to v6.8.5 + Keen Slider Stylings.
- Update: Cleanup template localization strings (for both: English and German).
- Update: TypeScript / JavaScript environment, utilities and modules.
- Update: Offcanvas and Modal design (+ dark design variant).
- Update: Dark (and Light) Bootstrap stylings and improvements.
- Remove: "sticky_header" option, has been replaced with "Header Position" > "Sticky".
- Fix: Set HTML lang to current locale instead of fixed 'en'.
- Fix: Bootstrap URL on placeholder / demo copyright text.
- Fix: No-JS & JS-Loading styles for keen hero slider.
- Fix: Remove additional div container tag on the Double-Click content element.
- Fix: Class Names has not been passed to the quote content element.
- Fix: Use the theme's author name in theme-links (`ratmd-newshub` instead of `newshub`).
- Fix: Issues with translations (and YAML import links), as mentioned in [#4](https://github.com/RatMD/newshub-theme/issues/4).
- Fix: Some translation / localization issues in both english and german language.
- Fix: `CMS_STRICT_VARIABLES=true` .env security option errors.
- Fix: Rename / Remove `.alert-*` stylings on callout component.
- Fix: Table of Contents widget on static pages.

### ToDo
- Add: Support for [RainLab.Forum](https://octobercms.com/plugin/rainlab-forum) OC Plugin.
- Update: Use Bootstraps new color-mode for dark / light color scheme.


Version 1.2.2 - Stable
----------------------
- Bugfix: Fix errors on production context (Page object).


Version 1.2.1 - Stable
----------------------
- Update: Meta Tags.
- Update: Bootstrap package to v5.2.1.
- Update: Keen Slider package to v6.8.0.
- Update: @rollup/plugin-bode-resolve dev-package to v14.1.0.
- Update: sass dev-package to v1.54.9.


Version 1.2.0 - Stable
----------------------
- Add: Alegreya Sans Medium font (weight 500).
- Add: Support for RainLab.BlogVideoExtension plugin.
- Add: Additional navigation header style (with additional action buttons).
- Add: Search and User button on the extended header style.
- Add: New search archive / blog page - based on `[blogPosts]`.
- Add: New theme option to embed the jQuery framework for OctoberCMS v3+.
- Add: New theme option to embed the OctoberCMS "Framework Extras" dependencies.
- Add: New theme option to configure the number of posts shown in the hero slider.
- Add: New theme option to show a comment counter badge above the thumbnail.
- Add: New theme option to add a site slogan, shown in the footer.
- Add: New theme options for favicon, vector icon, apple touch icon and webmanifest meta tags.
- Add: New theme options for the meta generator tag.
- Add: New accordion stylings, with alternative and no icon, left-aligned icon and an additional clean design.
- Add: New `columns-2` styling for main nav items on main menu (See Page Builder menu on demo website).
- Add: New `footer-menu` menu position with up to 3 header - menu-link items.
- Add: New `meta-menu` menu position for the advanced header style.
- Add: New Sidebar widget `Text`, to display custom text.
- Add: New Sidebar widget `HTML`, to display custom HTML code.
- Update: Development dependencies.
- Update: Change Stylesheet and JavaScript loading order.
- Update: Fix alert stylings, re-add border radius.
- Update: Move both macros to the new `page/macro.htm` partial.
- Update: Keen Slider invoke script and stylings.
- Update: Use ocJSON (OctoberCMS v2) or oc.parseJSON (OctoberCMS v3) when available.
- Update: `footer-menu-1` and `footer-menu-2` are deprecated and used as fallback when `footer-menu` does not exist or is empty.
- Update: Move Color & Language menu to the actions section on the extended header style.
- Update: Header stylings and template.
- Update: Too many minor changes on the whole source code and stylings to list it here.
- Remove: Demonstration content.
- Fix: The theme option to configure the hero slider category works now.
- Fix: Last menu item was not shown / in viewport on mobile devices.
- Fix: Responsive design of double-click solution on mobile / small devices.
- Fix: Responsive design of navbars on mobile / small devices.
- Fix: Framework Extras and Bootstrap JS functionalities.


Version 1.1.2 - Stable
----------------------
- Add: Weekly Archive page (provided by RatMD.BlogHub v1.3.0).
- Update: RatMD.BlogHub v1.3.0 compatibility.
- Fix: Prevent Meta details when no user is available on the post.
- Fix: Add jQuery dependency for October CMS v2.


Version 1.1.1 - Stable
----------------------
- Update: Use OctoberCMS VScode Syntax.
- Fix: Use Socials folder before Bootstrap icons.
- Fix: Wrong condition on author archive page.


Version 1.1.0 - Stable
----------------------
- Add: Configurable sidebar widgets for home, page and post CMS pages.
- Add: Article List widget for all sidebars.
- Add: Category List widget for all sidebars.
- Add: Tag List widget for all sidebars.
- Add: Author List widget for all sidebars.
- Add: Static Menu widget for all sidebars.
- Add: Current Author widget for post sidebar.
- Add: Current Categories widget for post sidebar.
- Add: Current Tags widget for post sidebar.
- Add: Next | Previous posts widget for post sidebar.
- Add: Table of Contents widget for page sidebar.
- Fix: Table of Contents generator skipped the last header element.
- Fix: Missing dark header settings on static page layouts.


Version 1.0.1 - Stable
----------------------
- Update: Add dark highlight.js stylings for pre, code elements.
- Fix: Form stylings on dark color scheme.
- Fix: background color on the full-width page layout.
- Fix: Callout Color variables on dark scheme.
- Fix: Example component styling + dark border color.
- Fix: Navbar below Hero-Slider (when Header is not set to 'sticky').


Version 1.0.0 - Stable
----------------------
- Initial Release
