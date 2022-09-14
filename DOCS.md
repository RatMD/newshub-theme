# NewsHub v1.2.2 - Documentation
Welcome on the NewsHub documentation page.

## Need Support?
Contact us via mail at [info@rat.md](mailto:info@rat.md) or visit our website at [rat.md](https://rat.md).

## New in Version 1.2.0
The primary focus of version 1.2.0 is the new **Page Builder**, which allows to easily create new static pages with over **18 different** Bootstrap and custom **content elements**. The Page Builder is currently only available when selecting the  `Page Builder Layout`  on the respective static page, a detailed description for each component can be found below. Both existing page layouts (Default and Fullwidth) are still available as prior this update.
  
- A new **Page Builder** for static pages with over **18 Components**.
- A **comment section** and widget and a **week-based** date **archive**.
- A new header style with a **search** / **user** action and **meta-menu**.
- A new way to create the **footer menu** (the old way is still supported).
- Many improvements, especially for the dark Bootstrap v5.2 style.

## Table of Contents
1. Requirements
5. Template Settings
3. Template Menus
4. Template Sidebars & Widgets
5. Template Page Builder & Content Elements
	- Accordion
	- Alert
	- Card
	- Card Group
	- Carousel
	- Content
	- Double-Click
	- Flexbox Container
	- Gallery
	- Header
	- Image
	- List
	- Quote
	- Section
	- Separator
	- Slider
	- Tabs
	- Text with Teaser 
6. Template Resources

## Requirements
We recommend using this template with the latest OctoberCMS **v3** version, however support for v2 is still available.

- Modern Browser (IE and Edge Legacy are NOT supported!)
- PHP 7.4+ / 8.0+
- OctoberCMS v2 / v3
- Plugin: [RainLab.Blog](https://octobercms.com/plugin/rainlab-blog)
- Plugin: [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages)
- Plugin: [RainLab.Sitemap](https://octobercms.com/plugin/rainlab-sitemap)
- Plugin: [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate)
- Plugin: [RatMD.BlogHub](https://octobercms.com/plugin/ratmd-bloghub)

### Supports
The following plugins are not required but supported by the **NewsHub** template:

- Plugin: [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform)
- Plugin: [RainLab.BlogVideoExtension](https://octobercms.com/plugin/rainlab-blogvideoextension)
- Plugin: [RainLab.User](https://octobercms.com/plugin/rainlab-user)


## Template Settings
The template provides the following settings:

### General Settings
- **Site Name** - Enter your website name, shown on the header and footer of your front-end website as well used within links and meta tags.
- **Site Slogan** (_NEW_) -Enter your website slogan, shown on the footer below the site name / site logo.
- **Site Logo** - Upload or Select your website logo, shown instead of the site name option in the header and footer.
- **Inverted Site Logo** - Upload or select a color-inverted version of your site logo, which is used similar the normal site logo, just for the dark color scheme. 
- **Embed jQuery Library** (_NEW_) - Embed the jQuery Framework for OctoberCMS v3+ (OctoberCMS v2+ already adds jQuery as dependency).
- **Embed OctoberCMS Extras** (_NEW_) - Embed the Extra OctoberCMS framework with both, CSS and JS libraries (may required by an external plugin).

### Appearance Settings
- **Use Dark Color Scheme** - Use the dark color scheme as default option.
- **Show Dark Header** - Always show a dark header and hero section, even if the light color scheme is used.
- **Show Dark Footer** - Always show a darf footer section, even if the light color scheme is used.
- **Color Palette** - Change Bootstrap's default color palette, used all around your website.

### Meta Settings
- **Default Favicon** - Embed the default favicon resource.
- **Vector Icon** - Embed a Vector version of your favicon.
- **Apple Touch Icon** - Embed a Apple Touch Icon version of your favicon
- **Webmanifest** - Embed a webmanifest MANIFEST JSON file.
- **Favicon Path** - The path to the favicon, it is HIGHLY recommended making the icon accessible under /favicon.ico!
- **Vector Icon Path** - The path to the vector favicon
- **Apple Touch Icon Path** - The path to the Apple touch icon.
- **Webmanifest Path** - The path to your webmanifest JSON file.
- **Embed Generator Meta Tag** - Embed the `<meta name="generator" />` tag with October CMS as value.
- **Use exact OctoberCMS Version** - Add the exact OctoberCMS version to the meta tag.

### Header Settings
- **Header Style** (_NEW_) - Change the simple to an extended header, which separates the action buttons into a separate area and adds support for search and user buttons.
- **Use Sticky Header** - Shows the header always on top of the viewport, when the user scrolls down.
- **Show Color Switch** - Shows an additional color switch button to change the applied color scheme.
- **Show Languages Menu** - Shows an additional button to switch to a different website language.
- **Show Search Button** (_NEW_) - Shows a search button with an overlay input field on click (requires RatMD.BlogHub 1.3.0).
- **Show Hero Slider** - Shows the main hero slider on the homepage.
- **Hero Slider Number of Posts** - Change the number of posts shown in the hero slider.
- **Hero Slider Category** - Select the desired Category for the hero post list.

### Content Settings
- **Show View Counter** - Shows a small View Counter Badge above the Post thumbnail.
- **Show Comment Counter**  (_NEW_) - Shows a small Comment Counter Badge above the Post thumbnail.
- **Date/Time Format** - Valid Date/Time Format as described [on php.net](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters)
- **Short Date/Time Format** - Valid Date/Time Format as described [on php.net](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters)

### Sidebar Settings
- **Select a Sidebar** - Select a sidebar to change the widgets, shown on the frontend, below.
- **Sidebar Configuration** - Configure the selected sidebar from the option above.

### Footer Settings
- **Show Color Switch** - Shows an additional color switch button to change the applied color scheme.
- **Show Languages Menu** - Shows an additional button to switch to a different website language.
- **Show Scroll-To-Top Button** - Shows an scroll-to-top button after the user scrolled for a specific amount.
- **Left Copyright Text** - Change the text of the left-aligned Copyright Footer. (Supports Markdown)
- **Right Copyright Text** - Change the text of the right-aligned Copyright Footer. (Supports Markdown)

## Template Menus
Version 1.2.0 of the **NewsHub** template provides a new footer menu position, which allows up to 3 header to submenu positions. The previous `footer-menu-1`  and `footer-menu-2` positions are still available, of course, and are used as fallback.

### `main-menu`
The `main menu` position supports up to 3 levels (top level, sub-level and sub-sub-level), the `header` menu type is also supported on the sub-level position.

### `social-menu`
The `social menu` position supports only one level and should contain your social network and feed links only. The icon is determined with the `code` property, which must be the same name as the icons stored either in the `partials/socials` or `partial/bootstrap-icons` folder, using a `.htm` extension. The bootstrap icon set already provides the most basic networks.

### `meta-menu` (_NEW_)
The new `menu-menu` position is **only available on the extended header style**, see "Header Style" on the template settings section above. The new meta menu does only support a single level and is shown on top ob the website, before the website logo / main menu area.

### `footer-menu` (_NEW_)
The `footer-menu` position allows to configure the header-styled menu-link-list container on the bottom of your website. The headers are styled using the `header` menu item and you can use up to 3 header - sub-links items. This is the preferred way to generate the footer menu, the following 2 positions are used as fallback, when footer-menu contains no items or does not exist.

### `footer-menu-1` (_DEPRECATED_)
The `footer-menu-1` position is - together with `footer-menu-2`, the old way to create the 2-box header-menu-list styled navigation on bottom of the website. The used header label is the menu name itself. You should consider using the new `footer-menu` position instead, which also supports up to 3 side-by-side shown menu-link-lists.

### `footer-menu-2` (_DEPRECATED_)
The `footer-menu-2` position is - together with `footer-menu-1`, the old way to create the 2-box header-menu-list styled navigation on bottom of the website. The used header label is the menu name itself. You should consider using the new `footer-menu` position instead, which also supports up to 3 side-by-side shown menu-link-lists.


## Template Sidebars & Widgets
The **NewsHub** OctoberCMS template supports the following sidebpar positions and widgets, which can be configured in the template settings page:

### Sidebar Positions
- `Homepage Slider` - Shown in the main homepage.
- `Page Slider` - Shown on the single static pages.
- `Post Slider` - Shown on the single post pages.

### Sidebar Widgets
- `Article List` - Shows a list of articles filtered and ordered by published date, author, category, tag(s), views, visitors, comments counter or just random.
- `Author List` - Shows a list of available (non-empty) authors.
- `Category List` - Shows a list of available (non-empty) categories.
- `Comment List` (_NEW_) - Shows a list of blog comments.
- `Tag List` - Shows a list of available (non-empty or promoted) tags.
- `Static Menu` - Renders a static menu with the desired menu position.
- `Image Content` (_NEW_) - Renders an image with text.
- `Text Content` (_NEW_) - Renders custom text (markdown or richtext).
- `HTML Content` (_NEW_) - Renders custom HTML code.
- `Table of Contents` - Shows a table of contents list (for static pages only).
- `Current Author` - Shows the current author with some details (for post-page only).
- `Current Categories` - Shows the current categories with counter (for post-page only).
- `Current Tags` - Shows the current tags with counter (for post-page only).
- `Related Posts` (_NEW_) - Shows a list of related posts (for post-page only).
- `Next | Previous Posts` - Shows a next/previous post button (for post-page only).


## Template Page Builder & Content Elements
Version 1.2.0 of the **NewsHub** OctoberCMS template introduces the new **Page Builder**, which is available on RainLab's Pages plugin by selecting the *Page Builder* page layout. The following components are available:

### Accordion
Create a new Bootstrap native accordion container with as much accordion items as you wish. This content element supports all  available Bootstrap settings (flush design, always open) and extends them with an alternative icon (Plus / Minus), a left-aligned icon, no icon and the additional style "clean", which takes "flush" on a whole new level.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Accordion Style
Allows to set the main accordion style to `default`, `flush` or `clean`. The first both are directly provided by Bootstrap, the third one is a custom styling done by NewsHub. The difference between `flush` and `clean` are the following CSS properties:

- Flush removes the main border and border-radius
- Clean removes all borders, border-radius, padding, background and box-shadow colors

**Clean can be used for a "list-styled" accordion and FAQs.**

##### Accordion Icons
Allows to change the default `Chevron` icon to `Plus / Minus`  or to remove the icon completely.

##### Always Open
Allows to enable the "always open" / "stay open" behaviour, which keeps the accordion items open when another item is clicked. This function is comes directly from bootstrap.

##### Left-Aligned Icons
Allows to change the icon position from right to left (before the accordion title). Of course, this option has no effect when the accordion icon itself is disabled.

##### Children
Here you can declare as many accordion items as you would like. An accordion icon provides the following options:

- **Start Open**, shows this item pre-opened. Keep in mind, that you need to enable the "Always Open" option on the accordion itself if you want to pre-open multiple accordion items. Otherwise just the first "Start Open" checked accordion item will be shown.
- **Accordion Title**, the main title used to open the accordion body.
- **Accordion Type**, allows to change the content editor within the accordion item. You can either use `Plain Text`, `Markdown`, `Rich Text` (default) or `HTML Code`.
- **Accordion Content**, the main accordion content editor, as set on "Accordion Type".

### Alert
Create a new Bootstrap native alert message in all available colors provided by Bootstraps default color palette (which can also be configured on the template settings). You can also enable and use **NewsHub**'s additional Callout design here, which works exactly the same way as the alert boxes, but look quite better (in our opinion).

##### Title
The main title, which can be used or hidden on the front-end alert box. The title of the alert box uses the default sans serif font instead of the template-specific heading font, since it looks quite better.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Alert Color
Allows to set the desired alert color, you can use all available colors from Bootstrap's palette: Primary, Secondary, Success, Danger, Warning, Info, Light and Dark.

##### Use Callout Style
This option allows you to override Bootstrap's ugly alert design and use **NewsHub**'s callout stylings instead. It can be used in the same way as the alert box, just looks quite better.

##### Alert Content
The main content shown in the alert box, this field supports the markdown syntax.

### Card
Create a new Bootstrap native card content container. This content element does also provide the "Simple Style" design option, which is the default Card design used by **NewsHub**.

#### Available Options
The following options are available on this content element:

##### Title
The main card title, used on the front-end.

##### Layout
Allows to change the used card title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h5` class - next to a few others.

##### Subtitle
The secondary card subtitle, used on the front-end.

##### Sublayout
Allows to change the used card title sublayout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h6` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Use simple style
The simple styled card design is especially designed for the **NewsHub** template. Using this option will hide the available "Card Colors", as described below.

##### Card size
This option allows to set a default width of the respective card, you can either use `none`, `sm`, `md`, `lg` and `100%`. The first option will set no width at all, sm, md, lg provide the sizes `16rem`, `24rem` and `32rem` respectively. The last option just sets the width to `100%`. 

##### Card Colors
This option allows to set the background color of the respective card, using Bootstrap v5.2 `text-bg-` classes. You can use all available colors from Bootstraps color palette. However, this option is NOT available on the simple styled card system at the moment.

##### Card Content
The main content shown in the Card body, this field supports the markdown syntax.

##### Card Image
Allows to set a card thumbnail, which is shown above the title.

### Card Group
Create a new Bootstrag native card group content container to show multiple card elements next to each other. The card elements defined here are almost the same as the normal card content element, only the background color and card size options are missing.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Children
Here you can add the desired card content elements, which should be shown next to each other. You have almost the same set of options as on the normal Card element, except for the card size and card color fields.

### Carousel
Create a new Bootstrap native Carousel content element with all available Bootstrap options. However, the carousel created here currently does not support using other content the images (with caption, description and link).

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Autoplay
Toggles whether the carousel should automatically cycle through the items or not.

##### Autoplay after first Cycle
Toggles whether the carousel should automatically cycle through the items AFTER the user cycled the first item manually or not. This option is NOT available, when autoplay is disabled in general.

##### Carousel Interval
Change the amount of time to delay between automatically cycling an item.

##### Carousel Animation
Change the desired carousel animation effect, you can either use "slide" (the default) or "fade".

##### Show Controls
Toggles whether the carousel controls - next and previous buttons - should be visible on top of the carousel or not.

##### Show Indicators
Toggles whether the carousel indicators - one indicator per slide - should be visible on top of the carousel or not.

##### Touch Support
Toggles whether the carousel should support left/right swipe interactions on touchscreen devices or not.

##### Keyboard Support
Toggles whether the carousel should react to keyboard events or not.

##### Carousel Items
Here you can declare as much carousel items as you would like. A carousel item consists of an image, title, link and content. The link will be set over the whole carousel item / image, of course the controls and indicators are not effected by this.

### Content
Create a new Content element, which allows to place plain-text, markdown, richtext or even HTML code.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Content Type
Change the desired content editor, you can either use "plaintext", "markdown", "richtext" (default) or "HTML code".

##### Content
The main content used for this content element. The respective editor can be changed with the Content Type option above.

### Double-Click
Create a new Double-Click placeholder to embed external content in a GDPR / Privacy friendly way. The external content can be anything.

#### Available Options
The following options are available on this content element:

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Privacy Title
Define the used privacy title, shown on the Double-Click placeholder box. The default title is set to "Third-Party Service".

##### Privacy Submit Button
Define the used submit / load button text, shown on the Double-Click placeholder box. The default button text is set to "Accept Cookies & Load Content".

##### Privacy Description
Define the used privacy description shown on the Double-Click placeholder box. The default description is set to: "This content is hosted on a different website, which may sets cookies. Click on the button below, when you're cool with that.".

##### External Content
Embed the external content, which should be injected / shown when the user clicks the button. Keep in mind, that just the FIRST HTML container is injected into the DOM. Thus, you've to use a parent container, when your external content consists of more then one element.

### Flexbox Container
Create a new FlexBox container with up to 4 configurable columns. This component provides two different configuration modes, implemented as custom partial. The first mode allows to set one of the available columns as primary column, which increase its size using a default set of the Bootstrap `col-*` classes (including responsive versions). The second mode allows to set the class names per column yourself. 

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Wrap in Container
Allows to wrap the generated flexbox row into an container. You may need to use this option, when using the `Clean Full Page` layout configuration, which itself does NOT add any container itself.

##### Outer Spacing (Before|After)
Allows you to set the top and bottom margin values using a simple ballon selector with the labels: default, none, xxs, xs, sm, md, lg, xl, xxl and xxxl. Before asking yourself: Yes, bootstrap has just "5" spacings but the **NewsHub** template extends them to support 8.

##### Inner Spacing (Before|After)
Allows you to set the top and bottom padding values using a simple ballon selector with the labels: default, none, xxs, xs, sm, md, lg, xl, xxl and xxxl. Before asking yourself: Yes, bootstrap has just "5" spacings but the **NewsHub** template extends them to support 8.

##### Available Columns
Allows to set the available amount of columns, currently supported are 1, 2, 3 and 4. The configuration here changes the flexbox layout option and the available children.

##### Children 1 - 4
Here you can add the desired content elements / column, depending of the configured `Available Columns` option.

### Gallery
Create a new Gallery with as much items as you wish. The Gallery component supports the Bootstrap 5 lightbox plugin and up to 6 columns, images are outputed via `<figure>`.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Number of Columns
The desired number of columns to show the gallery in. **NewsHub** supports up to 6 columns and uses Bootstrap's `row-cols-*` feature.

##### Use Lightbox
Allows to enable (default) or disable the lightbox extension.

##### Gallery Images
The single gallery images, you can add an alternative title as well as a caption to each image.

### Header
Create a Bootstrap-native heading, either by using real header tags (`<h1>` - `<h6>`) or by wrapping it up into a paragraph (`<p>`). This content element also supports Bootstrap's display text stylings.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Link
Allow you to link the headings title, regardless if you're using the `<p>` tag (as described below) or not.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Layout
Allows to change the used layout - `<h*>` tag number -  for this heading. The default value is set to `<h2>`, because **NewsHub** already use the page title as `<h1>` on the header of the page - unless the page header is disabled via the Page Configuration tag (as described above). However, keep in mind, that using multiple `<h1>` tags may reduce your SEO-score.

##### Style
Allows to apply a specific style to the heading, the following values are available:

- `Default`
- `Default with Separator`
- `Display 1`
- `Display 2`
- `Display 3`
- `Display 4`
- `Display 5`
- `Display 6`

##### Use a \<p\>-tag
Allows to use a paragraph, `<p>`-tag, instead of the default `<h*>` heading.

### Image
Create a new responsive image or image with text content element.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Image
Select or Upload the desired image here.

##### Alternative Title
Allows to define an alternative title used on the image tag.

##### Text Content
Allows to add an additional text content to this image. Selecting this checkbox will show the following options below.

##### Image Position
Allows to define the position of the image. You can use Top, Left, Right or Bottom - relative to the text.

##### Image Placement
Allows to change the placement / image direction relative to the text. This option has no effect when the image position is set to Top (above the text) or Bottom (below the text).

##### Text Content
The desired text / markdown content to be shown next to the image.

### List
Create a new ordered, unordered, unstyled or description list. The last one also provides a side-by-side view, as provided by Bootstrap's `row` and `col` classes.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### List Style
Allows to declare the style used for the list. You can use unstyled, unordered, ordered, description list and description list side-by-side.

##### List Content
The main list content, write one list item per line. You can separate the list title from the list content using the pipe `|` -symbol. This does not work only for both description lists, but also for the unstyled, unordered and ordered ones... which shows the title in a `strong` tag.

### Quote
Create a new `<blockquote>` quotation with source and link.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Text Alignment
Change the desired text alignment to left, right or center.

##### Quote Text
The main part of this content element: The quote text.

##### Quote Source
Allows to declare a `<cite>` quote source text.

##### Quote Link
Allows to link the `<cite>` quote source text.

### Section
Create a new inner or outer section container for additional content elements. This allows you to create a HTML hierarchy and to group and organize child elements.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Wrap in Container
Allows to wrap the generated flexbox row into an container. You may need to use this option, when using the `Clean Full Page` layout configuration, which itself does NOT add any container itself.

##### Outer Spacing (Before|After)
Allows you to set the top and bottom margin values using a simple ballon selector with the labels: default, none, xxs, xs, sm, md, lg, xl, xxl and xxxl. Before asking yourself: Yes, bootstrap has just "5" spacings but the **NewsHub** template extends them to support 8.

##### Inner Spacing (Before|After)
Allows you to set the top and bottom padding values using a simple ballon selector with the labels: default, none, xxs, xs, sm, md, lg, xl, xxl and xxxl. Before asking yourself: Yes, bootstrap has just "5" spacings but the **NewsHub** template extends them to support 8.

##### Background Color
Allows to set a background color to this section.

##### Children
Here you can pass all the sub content elements (children), which should be within the second container. And yes, you can use an section container, inside an section container, inside an section container... and so on...

### Separator
Create a new content separator, optional with an horizontal rule in different colors.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Spacing Above
Allows to change the spacing above the separator element using the sizes: default, none, xxs, xs, sm, md, lg, xl, xxl or xxxl.

##### Spacing Below
Allows to change the spacing below the separator element using the sizes: default, none, xxs, xs, sm, md, lg, xl, xxl or xxxl.

##### Horizontal Rule
Allows to set a colorable horizontal rule to the separator.

### Slider
Create a new [Keen Slider](https://keen-slider.io/) instance, which is basically similar to the Bootstrap Carousel but since it depends on the [Keen Slider JavaScript library](https://github.com/rcbyr/keen-slider) we could integrate more options more easily without loosing the responsiveness.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Show Controls
Toggles whether the slider controls - next and previous buttons - should be visible on top of the slider or not.

##### Show Indicators
Toggles whether the slider indicators - one indicator per slide - should be visible on top of the slider or not.

##### Loop Items
Whether showing the first item after the last (loop the slider items) or use hard stops.

##### Slider Animation
Change the desired slider animation effect, you can either use "slide" (the default), "fade" or "zoom".

##### Animation Interval
Change the default animation interval, which takes effect when the autoplay or the user slides an item using the control or indicator buttons. The Autoplay interval is not used for drag interactions on touchscreen or with the mouse.

##### Number of Slides
Allows to change the number of slides shown per view. This option configured the number of slides for desktop devices, tablet and mobile screens are based on this option, with a respective limit to guarantee a good responsive view.

##### Slide Spacing
Change the spacing between the single slides, when more then one slide is shown per view. This option is - similar to the Number of Slides one - only fully used on desktop devices, tablet and mobile screens scales down the set amount.

##### Autoplay
Toggles whether the slider should autoplay the respective slider items or not. The autoplay gets automatically disabled, when the mouse courser is over the slider element.

##### Use Marquee Autoplay
Use a continuously slide / scroll effect, which only stops when the cursor is over the slider. This is an additional autoplay style, which disables the touch support on the Javascript injection script.

##### Autoplay Interval
Change the amount of time to delay between automatically sliding an item.

##### Touch Support
Toggles whether the slider should support left/right swipe interactions on touchscreen devices or not.

##### Keyboard Support
Toggles whether the slider should react to keyboard events or not.

##### Slider Items
Here you can declare as much slider items as you would like. A slider item consists of an image, title, link and content. The link will be set over the whole slider item / image, of course the controls and indicators are not effected by this.


### Tabs
Creates a new Bootstrap styled Tabbed content container with as much tabs as you wish.

#### Available Options
The following options are available on this content element:

##### Name
A name for this content element, which is only visible on the backend for the builder menu (which makes the management on many content elements easier).

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

#####  Tab Position
Change the tab position to horizontal (default) or vertical.

##### Text with Teaser
Change the horizontal tab alignment to left (default), center or right.

##### Children
Here you can declare as many tab items as you would like. Each tab item provides the following options:

- __Item Title__, shown in the tab navigation menu.
- __Disabled__, allows to disable the tab item in the tab navigation menu - the tab content pane itself is not rendered.
- __ID__, allows to set a unique Id instead of using a numeric one.
- __Class Names__, allows to add custom class names to the tab pane element.
- __Content Type__, allows to change the content editor within the accordion item. You can either use `Plain Text`, `Markdown`, `Rich Text` (default) or `HTML Code`.
- **Content**, the main tab content editor, as set on "Content Type".


### Text with Teaser
Create a new Text with (optional Teaser) element.

#### Available Options
The following options are available on this content element:

##### Title
The main headings title, used on the front-end.

##### Layout
Allows to change the used alert title layout or hide them completely on the front-end, which is the default settings. However, next to them you can choose any `<h*>` tag as well as the `default` option, which uses a DIV-container with the `.h4` class - next to a few others.

##### ID
Allows to set a unique ID attribute to the main HTML element on this component. **Attention**: You need to make sure that all used IDs of all components used on the same page are unique yourself, using the same ID twice or more lreads to an invalid HTML document.

##### Class Names
This input field allows you to add additional class names to the main HTML element of this component. Using own class names allows you to add custom stylings or apply the available class names from bootstrap.

##### Teaser Position
Change the desired teaser position, you can either use "top" - which places the teaser text above the content - or "left" - which pleaces the teaser left besides the content.

##### Teaser Text
The additional teaser text to be shown.

##### Content
The main content used for this content element.

## Template Resources
The **NewsHub** template package also contains our development bundle, built upon node.js, rollup, scss and JavaScript. The source files itself are located int he `resources` directory, more information about the bundling process itself can be found in the `package.json` and `rollup.config.js` files.

Available Commands:

- `npm run build:js` - Build the JavaScript source files
- `npm run watch:js` - Watch and build the JavaScript source files
- `npm run build:css` - Build the SCSS source files
- `npm run watch:css` - Watch and build the SCSS source files
- `npm run build:vendors` - Build the required dependencies (as listed above)
  