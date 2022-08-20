NewsHub - Documentation
=======================

CMS Layouts
-----------

The **NewsHub** OctoberCMS template provides 3 layouts, the major one used all over the template 
CMS files itself and two, which are designed / configured for the RainLab.Pages extension.

### default.htm
The default layout is used on all CMS pages. It initializes a few components to create the required 
template variables and values all over the website itself. Next to the components, you will also 
find the basic OctoberCMS templates, such as `{% styles %}`, `{% scripts %}` and `{% framework %}`.

All `<head>` related tags has been exported to the `page/meta` partial (see below), to reduce the 
ammount of duplicated code (DRY) and to easily maintain the respective content. The `<body>` tag 
receives a few available details with which you can apply custom stylings for a specific page id, 
layout or color scheme. You can also provide the additional this argument `bodyClasses` to add 
additional class names to the `<body>` tag.

The first JavaScript, inside the body, replaces the `no-js` class name from the `<html>` tag, this 
is really useful when you need to know if the current client has an enabled JS environment or not.

**Attention**: It is currently NOT possible to include the `{% framework extras %}` stuff, due to 
the bootstrap JavaScript components. We're currently working on a solution for this issue.


### page-default.htm
The default page layout is one of two available layouts for the [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages) 
plugin. It does the same as the `default.html` layout, but adapts the main content area to fit the 
RainLab.Pages extension. However, this way an additional breadcrumb (see below) will be added next 
to an own sidebar (also below under 'Partials'). The page sidebar currently only supports a 
table-of-contents container (requires at least one header in the content area). More informations 
about the TOC can be found below under "Features".

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

### example.htm

### blog/post-single.htm
### blog/post-single-fullwidth.htm
### blog/post-single-heroimage.htm
### blog/components/button.htm
### blog/components/carousel.htm
### blog/components/gallery.htm
### blog/components/pagination.htm
### blog/sections/post-columns.htm
### blog/sections/post-condensed.htm
### blog/sections/post-list.htm

### colorpicker/default.htm

### demo/footer-menu-1-content.htm
### demo/footer-menu-2-content.htm
### demo/hero-slider-content.htm
### demo/main-nav-content.htm
### demo/social-nav-content.htm

### icons/bootstrap/*
### icons/socials/*

### localepicker/default.htm

### page/footer.htm
### page/header.htm
### page/hero-slider.htm
### page/meta.htm

### sidebars/home.htm
### sidebars/page.htm
### sidebars/post.htm

### staticbreadcrumbs/default.htm


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


Features
--------

### Table of Contents
