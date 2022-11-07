NewsHub - Changelog
===================

Version 1.3.0 - In Progress
---------------------------
- Add: Support of the new sitePicker core component, as of OctoberCMS v3.1.
- Add: New Locale / Site Picker Preference theme options.
- Add: Use Locale / Site Picker as dropdown, modal or switch action toggler.
- Add: Additional Meta-Tag theme options (base, robots, color-scheme and theme-color).
- Add: "Provide Dark Color-Scheme" option (to toggle the dark color-scheme in general).
- Add: "Overwrite CSS Color Palette" option (to overwrite the Theme Colors using css properties).
- Add: "Gray Color Palette" option to change the gray colors / style. 
- Add: "Header Position" option to change the header position behavior (Static, Sticky or Slide).
- Add: New Notice theme options (and stylings), which is shown above the article list on the homepage.
- Add: "Slider Controls" option to toggle the control buttons on the Hero-Slider.
- Add: "Slider Indicators" option to toggle the slide-indicators on the Hero-Slider.
- Add: "Post Category" option to toggle the Category Link on the post lists.
- Add: "Post Featured Tags" option to toggle the Featured Tag Links on the post lists.
- Add: "Share Links" option to toggle privacy-protected Share Links above the article content.
- Add: "Similar / Random Posts" option to toggle the Similar / Random post section below the single post.
- Add: New Title - Layout input group partial for NewsHubs page builder.
- Add: New ID - class name input group partial for NewsHubs page builder.
- Add: New Spacings input range partial for NewsHubs page builder.
- Add: New Sidebar widget `Blog Comment`, to display a list of comments.
- Add: New Sidebar widget `Related Posts`, to display a list of related posts (on single blog posts only).
- Add: New Sidebar widget `Image`, to display custom image with text.
- Add: New Navbar Toggler ([CodePen Source](https://codepen.io/ainalem/pen/LJYRxz)).
- Add: Default favicon + webmanifest set.

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
- Update: Use the grouped repeater widget for sidebar widgets.
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
- Update: Bootstrap package to v5.2.2.
- Update: Keen Slider package to v6.8.3.

- Remove: "sticky_header" option, has been replaced with "Header Position" > "Sticky".

- Bugfix: Set HTML lang to current locale instead of fixed 'en'.
- Bugfix: Bootstrap URL on placeholder / demo copyright text.
- Bugfix: No-JS & JS-Loading styles for keen hero slider.
- Bugfix: Remove additional div container tag on the Double-Click content element.
- Bugfix: Class Names has not been passed to the quote content element.


### ToDo
- Add: Support for [BlakeJones.MagicForms](https://octobercms.com/plugin/blakejones-magicforms) OC Plugin.
- Add: Support for [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform) OC Plugin.
- Add: Support for [JanVince.SmallGDPR](https://octobercms.com/plugin/janvince-smallgdpr) OC Plugin.
- Add: Support for [RainLab.BlogVideoExtension](https://octobercms.com/plugin/rainlab-blogvideoextension) OC Plugin.
- Add: Support for [RainLab.User](https://octobercms.com/plugin/rainlab-user) OC Plugin.
- Add: Support for [RainLab.Forum](https://octobercms.com/plugin/rainlab-forum) OC Plugin.
- Add: New Blog Posts Content Element (show posts by author, category, date or tag).
- Add: New Blog Lists Content Element (show list of authors, categories or tags).
- Add: New File List Content Element (show download file list with icon and stuff).
- Add: "User Action" header integration (requires RainLab.User), available on Extended navbar style only.
- Add: New Sidebar Widget Builder theme option.
- Update: Sidebar to Widget environment for Homepage, Archive, Static Page and Blog Post pages.
- Update: Offcanvas and Modal design (+ dark design variant).
- Update: Dark (and Light) Bootstrap stylings and improvements.
- Update: Change Bootstrap 5 Lightbox package with a custom Lightbox plugin.
- Update: Add "Number of Cards / Row" option on Card Group.

Version 1.2.2 - Stable
----------------------
- Bugfix: Fix errors on production context (Page object).

Version 1.2.1 - Stable
----------------------
- Update: Meta Tags.
- Update: Bootstrap package to v5.2.1.
- Update: Keen Slider package to v6.8.0.
- Update: @rollup/plugin-bode-resolve dev-pacakge to v14.1.0.
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
