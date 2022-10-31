NewsHub - Free Magazine Template
================================

**NewsHub** is a free, minimalist and responsive Blog and Magazine template, designed for OctoberCMS 
v2 and v3. It provides a clean and configurable structure using **Bootstrap v5.2** as powerful CSS 
and JS Framework, includes the beautiful **Bootstrap Icons** and implements the responsive and 
feature-rich **Keen Slider** package.

[View the Demo-Website](https://themes.rat.md/newshub)

[Please rate our Template on the Marketplace](https://octobercms.com/theme/ratmd-newshub#reviews)

[Contact us on any Question](mailto:info@rat.md)


Support NewsHub
---------------
Please support us and our free NewsHub template by writing a [review](https://octobercms.com/theme/ratmd-newshub#reviews) 
on our official [OctoberCMS marketplace page](https://octobercms.com/theme/ratmd-newshub). You can 
also report bugs, request features and more on the [support forum](https://octobercms.com/theme/support/ratmd-newshub) 
or directly on our [GitHub repository](https://github.com/RatMD/newshub-theme/issues).

**We appreciate your support.**


What's new in v1.3.0
--------------------
Version 1.3.0 of the **NewsHub** template focus on the new **Sidebar Widget Builder**, a better 
header and navbar structure, integrating the new **Site-Picker** component (as introduced in the new 
OctoberCMS v3.1 release) and providing more customization and improvements in general.

- Support for the new **Site Picker** component, introduced in [OctoberCMS v3.1.0](https://octobercms.com/blog/post/october-cms-stable-version-31-live).
- Support for the **RainLab.User**, **RainLab.Forum** and additional plugins.
- A new **Sidebar Widget Builder** for your Homepage, Archives, Static Pages and Posts (with more widgets).
- A nice bag full of new theme configurations and options.
- Many improvements, especially for the header, navbar and general Bootstrap stylings.


What's new in v1.2.0
--------------------
The primary focus of version 1.2.0 is the new **Page Builder**, which allows to easily 
create new static pages with over **18 different** Bootstrap and custom **content elements**. 

- A new **Page Builder** for static pages with over **18 Components**.
- A **comment section** and widget and a **week-based** date **archive**.
- A new header style with a **search** / **user** action and **meta-menu**.
- A new way to create the **footer menu** (the old way is still supported).
- Many improvements, especially for the dark Bootstrap v5.2 style.


All Features
------------
- **Bootstrap** v5.2 with **Bootstrap Icons** v1.9 (usable as partials)
- Fully **Responsive** and mobile-first
- **Multi-Language Support** (using RainLab.Translate)
- Native **Site-Picker Support** (requires OctoberCMS v3.1+)
- **Page Builder**, with 18 Bootstrap and custom components
	- **Accordion** - A vertically collapsing accordion.
	- **Alert** - A contextual feedback alert and callout message.
	- **Card** - A flexible and extensible content container.
	- **Card Group** - A container element to show multiple cards.
	- **Carousel** - A slideshow component to cycle through elements.
    - **Content** - A simple text, markdown or HTML content element.
	- **Double-Click** - A double-click solution to embed external content and iframes.
	- **Flexbox Container** - A flexbox container for other content elements.
	- **Gallery** - A simple image Gallery with lightbox.
	- **Header** - A simple header content element.
	- **Image** - A simple image content element.
	- **List** - A simple list content element.
	- **Quote** - A simple quotation content element.
	- **Section** - A section container for other content elements.
	- **Separator** - A simple content separator.
	- **Slider** - A slider component using Keen Slider.
	- **Tabs** - A tabbed-content container.
	- **Text with Teaser** - A simple text with teaser element.
- **4 Menu Positions**: Main Menu, Social Links, Meta Menu & Footer Menu
- **3 Sidebar Positions**: Homepage, Post and Static Page - with many widgets
- **2 Color Schemes**: Light and Dark mode
- **Color** and **Language** Switch for the header and/or footer
- **Responsive Slider** with touch-support using Keen-Slider
- Many Configurations and Settings
- Available in English & German
- Additional CMS Page Snippets
    - Double-Click Solution to embed external content GDPR friendly
    - Table of Contents Snippet (Lists all Content-Headers)
- Additional Features provided by **RatMD.BlogHub**
    - Author / Date / Tag Archives
    - Comment Section and Widgets
    - View / Visitor Counter and Widgets
    - Related / Random Post Section
    - Next / Previous Post Buttons
    - Promoted Blog Tags
    - Custom Meta Details
        - Customizable Slider (Sub-) Title and Excerpt
        - Different Post Layouts (Default, Fullwidth, Featured)
    - Dashboard Report Widgets (for the backend)
    - ... and way more


Requirements
------------
We recommend using this template with the latest OctoberCMS **v3** version, however support for v2 
is still available.

- Modern Browser (IE and Edge Legacy are NOT supported!)
- PHP 7.4+ / 8.0+ (recommended: 8.0)
- OctoberCMS v2 / v3 (recommended: 3..1)
- Plugin: [RainLab.Blog](https://octobercms.com/plugin/rainlab-blog)
- Plugin: [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages)
- Plugin: [RainLab.Sitemap](https://octobercms.com/plugin/rainlab-sitemap)
- Plugin: [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate)
- Plugin: [RatMD.BlogHub](https://octobercms.com/plugin/ratmd-bloghub)

### Supports
The following plugins are not required but supported by the **NewsHub** template:

- Plugin: [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform)
- Plugin: [JanVince.SmallGDPR](https://octobercms.com/plugin/janvince-smallgdpr)
- Plugin: [BlakeJones.MagicForms](https://octobercms.com/plugin/blakejones-magicforms)
- Plugin: [RainLab.BlogVideoExtension](https://octobercms.com/plugin/rainlab-blogvideoextension)
- Plugin: [RainLab.User](https://octobercms.com/plugin/rainlab-user) 
- Plugin: [RainLab.Forum](https://octobercms.com/plugin/rainlab-forum) 


Dependencies
------------
The following dependencies are already bundled with this template, of course.

- Bootstrap v5.2.2
- Bootstrap Icons v1.9.1
- Keen Slider v6.8.2
- jQuery *\** (only in OctoberCMS v2, see below)

**Attention**: By default, jQuery is only included on OctoberCMS v2 installations using October's 
provided jQuery version, using jQuery for OctoberCMS v3 and above requires to set the "Embed jQuery" 
option on the theme configuration page.

### Development Dependencies
The development of the **NewsHub** OctoberCMS template is done using node.js (v16+) with an included 
and configured esBuild stack. View the package.json in the root template directory for more details.

Available Commands:

- `npm run vendors` - Build & Bundle the required dependencies (as listed above).
- `npm run build` - Build & Bundle the source files (JS & SCSS).
- `npm run watch` - Watch the source files (JS & SCSS) and bundle on each change.
- `npm run build:js` - Build & Bundle the JavaScript source files.
- `npm run watch:js` - Watch the JavaScript source files and bundle on each change.
- `npm run build:css` - Build & Bundle the SCSS source files.
- `npm run watch:css` - Watch the SCSS source files and bundle on each change.


Need Support?
-------------
Contact us via mail at [info@rat.md](mailto:info@rat.md) or visit our website at [rat.md](https://rat.md).
