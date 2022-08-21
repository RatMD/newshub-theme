NewsHub - Documentation
=======================

Important Notes
---------------

- The `{% framework extras %}` tag is currently unsupported (we're working on a solution).
- We're currently working on a solution to configure the available Sidebars using an interface.


Features
--------

### Menu Positions
The **NewsHub** OctoberCMS template currently supports 4 menu positions:

- `main-menu`, supports up to 3-levels
- `footer-menu-1`, uses the assigned `Name` as header
- `footer-menu-2`, uses the assigned `Name` as header
- `social-menu`, supports icons using the `Code` attribute

### Custom Meta
The **NewsHub** OctoberCMS template currently supports 4 custom meta values:

- `Simple Title` - Custom title, shown on the Hero Slider
- `Simple Subtitle` - Custom subtitle, shown together with the title on the Hero Slider
- `Post Layout` - Allows to change the used Post Layout
- `Featured Images View` - Allows to change how the featured images are shown on the post

### Theme Settings
The **NewsHub** OctoberCMS template currently supports the following settings:

- **Site Name** - The website name as it should appear on the front-end.
- **Site Logo** - Use your logo instead of the the site name (height should not exceed 40 pixels).
- **Inverted Site Logo** - A color-inverted version of your site logo, used for the dark color scheme.
- **Use Demonstration Content** - Use the demonstration content for empty template sections.
- **Use Dark Color Scheme** - Use the dark color scheme as default one.
- **Show Dark Header** - Show a dark header and hero section, regardless of the used color scheme.
- **Show Dark Footer** - Show a dark footer section, regardless of the used color scheme.
- **Color Palette** - Allows to configure the whole Bootstrap color palette.
- **Use Sticky Header** - Shows the header always on top of the viewport, when the user scrolls down.
- **Show Color Switch** - Shows an additional color switch button to change the applied color scheme.
- **Show Languages Menu** - Shows an additional button to switch to a different website language.
- **Show Hero Slider** - Shows a Hero Slider on the homepage.
- **Show View Counter** - Shows a small View Counter Badge above the Post thumbnail.
- **Date/Time Format** - Allows to override the shown Date/Time strings.
- **Short Date/Time Format** - Allows to override the shown Date/Time strings.
- **Show Color Switch** - Shows an additional color switch button to change the applied color scheme.
- **Show Languages Menu** - Shows an additional button to switch to a different website language.
- **Show Scroll-To-Top Button** - Shows an scroll-to-top button after the user scrolled for a specific amount.
- **Left Copyright Text** - Change the text of the left-aligned Copyright Footer. (Supports Markdown)
- **Right Copyright Text** - Change the text of the right-aligned Copyright Footer. (Supports Markdown)


CMS Layouts
-----------

The **NewsHub** OctoberCMS template provides 3 layouts, the major one used all over the template 
CMS files itself and two, which are designed / configured for the RainLab.Pages extension.

### default.htm
The default layout is used on all CMS pages. It initializes a few components to create the required 
template variables and values all over the website itself. Next to the components, you will also 
find the basic OctoberCMS markups, such as `{% styles %}`, `{% scripts %}` and `{% framework %}`.

All `<head>` related tags has been exported to the `page/meta` partial (see below), to reduce the 
ammount of duplicated code (DRY) and to easily maintain the respective content. The `<body>` tag 
receives additional classnames, such as the page id, layout and currently applied color scheme. You 
can also provide own class names using the `bodyClasses` this argument on the respective CMS page.

The first JavaScript, inside the body, removes the `no-js` class name from the `<html>` tag, this 
is really useful when you need to know if the current client has an enabled JS environment or not.

**Attention**: It is currently NOT possible to include the `{% framework extras %}` stuff, due to 
the Bootstrap JavaScript components. We're currently working on a solution for this issue.

### page-default.htm
The default page layout is one of two available layouts for the [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages) 
plugin. It does the same as the `default.html` layout, but adapts the main content area to fit the 
RainLab.Pages extension. However, this way an additional breadcrumb (see below) will be added next 
to an own sidebar (also below under 'Partials'). The page sidebar currently only supports a 
table-of-contents container (requires at least one header in the content area). More informations 
about the TOC can be found below.

### page-fullwidth.htm
The default page layout is the second of two available layouts for the [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages) 
plugin. It shows the content in a fullwidth matter and does not include the pages sidebar partial. 


CMS Pages
---------

The **NewsHub** OctoberCMS template provdes a bunch of CMS pages, including some demonstration 
pages under the `bootstrap` folder, which you can delete or hide without breaking anything of course.


### 404.htm
The "404 Page not found" error page is simple designed and just provides a title, subtitle, comment 
and "Go back to the Homepage" button.

### error.htm
The "An error occured" error page is as simple designed as the 404 erorr page and just provides a 
title, subtitle, comment and "Go back to the Homepage" button.

### features.htm
The Features CMS page is, next to all `bootstrap/*` pages just a demonstration, how you can design 
your own CMS pages without touching the core resource stylesheets. It demonstrated the responsive 
and dark/light capabilities provides by Bootstrap and enhanced by the **NewsHub** template. 

Of course, you can delete or hide this file on your production website!

### home.htm
The Homepage contains - as the name suggests - the front page of your website. It includes the 
Hero-Slider - if not disabled via the template options - and prints the latest 13 posts. The 
pagination below the list (when more then 13 posts exists) leads the user to the `magazine` page 
as described below. The Homepage also includes his own sidebar partial, which lists the popular 
posts (ordered by non-unique views), available categories and most-used tags.

### magazine.htm
The Magazine CMS Page is one of the available archive pages, provided by the **NewsHub** template. 
It shows the latest blog posts (10 / page) including a pagination. Similar to the other categories, 
this page does not contain a sidebar or other additional areas.

### maintenance.htm
The Maintenance CMS Page is the only page, which does not extend any available CMS Layout. It also 
just includes the basic stylings, without any JavaScript or OctoberCMS template tag. The page 
itself provides also only the site name and a title as well as description - informing the user 
about the maintenance mode. 

You can select this template under "Settings" > "Maintenance Mode" in your OctoberCMS backend.

### blog/author.htm
The blog / Author CMS page is one of 5 archive pages, provided by the **NewsHub** template. It 
is generated using the RatMD.BlogHub extension and uses the backend user `author_slug` field - with 
fallback to the `login` name - as slug. If no slug is provided, the user will receive a 404 error 
page. If no post is available for the respective author, a "No Posts found" message will be shown.

**Important**: It is highly recommended using the `author_slug` field name to not "leak" your 
login name. You can change your author slug by visiting the OctoberCMS backend: Click on your 
profile image (top-right corner) and click on "My Account". Their should be two additional styles - 
unless you disabled or uninstalled the RatMD.BlogHub extension - which allows you to change the 
display name and the author slug.

### blog/category.htm
The blog / Categpry CMS page is one of 5 archive pages, provided by the **NewsHub** template. It 
required a valid category slug as URL parameter, otherwise the 404 error page is shown. Categories 
without posts are displayd with a "No Posts found" info-box.

### blog/date.htm
The blog / Date CMS page is one of 5 archive pages, provided by the **NewsHub** template. It is 
generated using the RatMD.BlogHub extension and supports Year, Month and Day archives in the 
following formats: `Y` (ex. 1970), 'Y-m' (ex. 1970-01) and 'Y-m-d' (ex. 1970-01-01). Invalid dates, 
such as 13 as month AS WELL AS empty date archives will result in an eror 404 page.

### blog/post.htm
The blog / Post CMS page is used to show the single post items itself. The **NewsHub** template 
supports different post layouts, which is evaluates in this file and results in including one of 
the available post layout partials (as described below). Additional, this file does also set a 
custom body class name (for the hero-image post layout) and sets the additional meta fields for 
`description` and `keywords`.

### blog/tag.htm
The blog / Tag CMS page is one of 5 archive pages, provided by the **NewsHub** template. It is 
generated using the RatMD.BlogHub extension and requires a valid tag slug otherwise the eror 404 
page is shown. 

### bootstrap/components.htm

The bootstrap / Components CMS Page shows a few custom components, provided by the **NewsHub** 
template. You can delete or hide this page, of course.

### bootstrap/unit.htm

The bootstrap / Unit CMS Page shows a few HTML Unit tests for inline and block HTML elements, to 
test and evaluate responsive stylings and the light / dark color schemes. You can use this page 
to modify and test some stylings. You can delete or hide this page, of course.


CMS Partials
-------------

### double-click.htm

The Double-Click Partial allows to easily embed external content on CMS pages using a GDPR friendly 
overlay and a small JavaScript snippets which replaces the external content on click. This element 
accepted 4 arguments: A title, description, button text and the external content itself, you can 
use this partial as follows:

```
{% set media %}
<!-- Your Iframe or other external content -->
{% endset %}

{% partial "double-click" 
    external_content=media 
    privacy_title="Custom Title" 
    privacy_description="Custom Description" 
    privacy_button_label="Custom Button" 
%}
```

The Double-Click partial is currently only supported on own CMS Pages itself, we're working on a 
solution to bring this element to the RainLab.Pages and RainLab.Blog extensions as well.

### example.htm

The Example Partial is used on the documentation CMS pages and simple implements a small card 
element, with a preview and code section (as known from the bootstrap documentation). The example 
partial supports 2 arguments: 'content' - which contains the respective content you wanna use and 
'preview' - which allows you to override the rendered preview. When 'preview' isn't passed, the 
'content' argument will be used instead.

```
{% set content %}
<p class="h1 mb-3">h1. Heading</p>
<p class="h2 mb-3">h2. Heading</p>
<p class="h3 mb-3">h3. Heading</p>
<p class="h4 mb-3">h4. Heading</p>
<p class="h5 mb-3">h5. Heading</p>
<p class="h6 mb-3">h6. Heading</p>
{% endset %}

{% partial 'example' content=content %}
```

### blog/post-single.htm
The blog / Single Post partial is one of three post layouts. It includes the main and sidebar 
area, which itself contains the assigned blog categories, popular tags and next / prev buttons. 
The bottom of the main container lists related or random posts.

### blog/post-single-fullwidth.htm
The blog / Fullwidth Post partial is the second of three post layouts. It works similar as the 
default one, but shows the sidebar below the article content, before the related or random posts 
widget is shown.

### blog/post-single-heroimage.htm
The blog / Hero Image partial embeds the first featured image as full-page hero image, followed by 
the content in the same layout as blog / Single Post.

### blog/components/button.htm
The blog / components / Button partial embeds the previous and / or next blog post of the same 
category in a condensed way. This partial is used on the post sidebar.

### blog/components/carousel.htm
The blog / components / Carousel partial embeds the featured images (except the first one) in an 
Bootstrap Carousel on bottom of the post content. This partial can be selected on each post, under 
"Appearance" > "Featured Images View". Alternatively, you can also use the Gallery Partial.

### blog/components/gallery.htm
The blog / components / Gallery partial embeds the featured images (except the first one) in an 
Gallery-styled way using a Bootstrap Lightbox on bottom of the post content. This partial can be 
selected on each post, under "Appearance" > "Featured Images View". Alternatively, you can also 
select the Carousel Partial there.

### blog/components/pagination.htm
The blog / components / Pagination partial embeds a pagination element on each archive CMS page. 
This partial allows to override the target page (used for the pagination links) by passing the 
additional `target` argument, otherwise the current page is used.

### blog/sections/post-columns.htm
The blog / sections / Post Columns partial embeds the passed posts in a row-based way, showing 
the thumbnail, title, meta and excerpt in this order. The **NewsHub** template reduces the amount 
of posts to three, but of course you can pass as many posts as you would like.

### blog/sections/post-condensed.htm
The blog / sections / Post Condensed partial embeds the passed posts in a small column-based way 
using a really small thumbnail and the post title only. It is used on the homepage under "Popular 
Articles", a similar styling is also used on the single post page (see blog/components/button.htm).

### blog/sections/post-list.htm
The blog / sections / Post List partial embeds the default column-based posts list, as shown on all 
archive pages and on the homepage itself.

### colorpicker/default.htm
The Colorpicker partial provides the color-picker button on the header and / or footer. You can 
configure the shown position on the Theme Settings page..

### demo/*
The demo folder contains the demonstration content, used for empty template sections. You can 
delete this folder without breaking anything or disable the use of this files in the theme settings.

### icons/bootstrap/*
The icons / Bootstrap folder contains all Bootstrap Icons as `.htm` files. This allows you to embed 
the respective files using the following syntax:

```
{% partial 'icons/bootstrap/<iconname>' %}
```

Embedding the Vector partials directly allows you to easily design the icons, especially it's size 
and color, using CSS.

### icons/socials/*
The icons / Social folder contains nothing, but allows you to add additional social icons, used by 
both social menus (header and footer), when the Bootstrap Icon set does not provide a respective 
social icon.

### localepicker/default.htm
The LocalePicker partial overrides the default RainLab.Translate component view on the header and / 
or footer. You can configure the shown position on the Theme Settings page.

### page/footer.htm
The page / Footer partial contains the whole footer section on the bottom of the website. This 
includes the site name / site logo, all three menus and the Copyright text.

### page/header.htm
The page / Header partial contains the whole header section on the top of the website. This 
includes the site name / site logo, the main and social menu.

### page/hero-slider.htm
The page / Hero Slider partial contains the Hero Section on the Homepage itself.

### page/meta.htm
The page / Meta partial contains all tags used with the `<head>` tags.

### sidebars/home.htm
The sidebars / Home partial contains the sidebar widgets as shown on the homepage. The current 
template shows the Popular Articles, Category List and Popular Tags List in this order.

### sidebars/page.htm
The sidebars / Page partial contains the sidebar widgets of the single page layout. This currently 
contains just a Table of Contents widget, future releases of the NewsHub Template may emebds more.

### sidebars/post.htm
The sidebars / Post partial contains all sidebar widgets as shown on the post pages. This currently 
includes the assigned category list, the popoular tags list and the next / previous posts buttons 
of the same post category.

### staticbreadcrumbs/default.htm
The Staticbreadcrumb partial overrides the Breadcrumbs component view of the RainLab.Pages plugin. 
The current version of **NewsHub** embeds the Breadcrumbs only on pages created with RainLab.Pages.


CMS Resources
-------------

The **NewsHub** template also contains our own development environment, built upon node.js, rollup, 
scss and JavaScript. While you can find the main files - such as the `package.json` and 
`rollup.config.js` in the root directory of the template, the source files itself are available in 
the `resources` directory.

Our `package.json` scripts provides 5 scripts, which you can execute after installing all required 
dev-dependencies using `npm i --save-dev`:

- `build:js` - Builds the JavaScript source files
- `watch:js` - Watchs the JavaScript source files and bundles on each change
- `build:css` - Builds the SCSS source files
- `build:css` - Watchs the SCSS source files and bundles on each change
- `build:vendors` - Builds the vendors (bootstrap, icons, keen-slider, bootstrap-lightbox)

We separated the JavaScript and Stylesheet bundling for performance reasons, it is such a pain 
waiting 2 - 4 seconds until Rollup bundled both CSS and JS (yes 4 seconds are pain). I know it 
is somehow possible to optimize the bundling process, but instead of wasting 4 hours to make 
everything perfect I decided to just start 2 processes (in less then a minute).
