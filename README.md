NewsHub - Free Magazine Template
================================
**NewsHub** is a free, premium-quality, minimalist, and fully responsive Blog & Magazine template
built exclusively for **OctoberCMS**. It offers a clean, configurable structure powered by
**Bootstrap 5.3**, includes elegant **Bootstrap Icons**, and integrates the versatile, responsive,
and feature-rich **Keen Slider** package.

- [View the Demo-Website](https://newshub.rat.md)
- [View the Documentation](https://docs.rat.md/newshub)

**Read More**
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Features](#features)
- [Development](#development)
- [Need Support](#need-support)


## Requirements
We recommend using this template with the latest **OctoberCMS v4** release together with
**RainLab.Translate v2+**. OctoberCMS **v3+** installations using **RainLab.Translate v1.9+** are
still supported.

- Modern browser _(IE / Edge Legacy are not supported)_
- PHP **8.0+**
- OctoberCMS **v3+ / v4+** _(recommended: v4+)_
- Plugin: [RainLab.Blog](https://octobercms.com/plugin/rainlab-blog)
- Plugin: [RainLab.Pages](https://octobercms.com/plugin/rainlab-pages)
- Plugin: [RainLab.Sitemap](https://octobercms.com/plugin/rainlab-sitemap)
- Plugin: [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate) _(supported: v1.9.0+ and v2.0.0+)_
- Plugin: [RatMD.BlogHub](https://octobercms.com/plugin/ratmd-bloghub) _(required: v1.2.0+)_

### Supports
The following plugins are not required but are fully supported by the **NewsHub** template:

- Plugin: [BlakeJones.MagicForms](https://octobercms.com/plugin/blakejones-magicforms) _(v1.6.0+)_
- Plugin: [JanVince.SmallContactForm](https://octobercms.com/plugin/janvince-smallcontactform) _(v1.62.0+)_
- Plugin: [JanVince.SmallGDPR](https://octobercms.com/plugin/janvince-smallgdpr) _(v1.21.0+)_
- Plugin: [RainLab.Forum](https://octobercms.com/plugin/rainlab-forum) _(v2.0.0+)_
- Plugin: [RainLab.User](https://octobercms.com/plugin/rainlab-user) _(v1.6.0+ and v2.0.0+)_

### Dependencies
The following dependencies are bundled with the template:

- [Bootstrap](https://getbootstrap.com) **v5.3.8** – MIT licensed
- [Bootstrap Icons](https://icons.getbootstrap.com) **v1.10.3** – MIT licensed
- [Flag Icons](https://flagicons.lipis.dev/) – MIT licensed
- [Keen Slider](https://keen-slider.io/) **v6.8.6** – MIT licensed
- [@rat.md/bs-lightbox](https://ratmd.github.io/bs-lightbox/) **v1.1.1** – MIT licensed
- jQuery* (only for OctoberCMS v2; see note below) – MIT licensed

**Note:**
For OctoberCMS **v2**, jQuery is included automatically using October’s provided version.
For OctoberCMS **v3+**, jQuery is *not* included unless you explicitly enable the **“Embed jQuery”**
option in the theme configuration.


## Getting Started
You can install the **NewsHub** template by adding the theme to your project through the OctoberCMS
Marketplace, or by using the artisan command:

```sh
php artisan theme:install RatMD.NewsHub
```

For a quick preview of what the template can actually do, we recommend seeding the demo content:

```sh
php artisan theme:seed RatMD.NewsHub
```


## Features
NewsHub is a feature-rich, modern, and highly configurable template for OctoberCMS. Here are some
key highlights:

- Fully **responsive**, mobile-first design...
- ... using **Bootstrap 5.3** with **Bootstrap Icons 1.13** (icons available as partials)
- **Multi-language support** via RainLab.Translate
- **Site Picker** integration (OctoberCMS v3.1+)
- **Page Builder** with 18 customizable Bootstrap-based and custom components, such as Accordion,
  Alert, Card, Card Group, Carousel, Content, Double-Click, Flexbox Container, Gallery, Header,
  Image, List, Quote, Section, Separator, Slider, Tabs, Text with Teaser
- **4 menu positions**: Main Menu, Social Links, Meta Menu, Footer Menu
- **3 sidebar positions**: Homepage, Post, Static Page (with widget support)
- **2 color schemes**: Light and Dark mode
- **Color** and **Language** switchers for header and/or footer
- **Responsive slider** with touch support (Keen Slider)
- Extensive theme configuration options
- Available in **English** and **German**
- Extra CMS page snippets: GDPR-friendly Double-Click solution & Table of Contents snippet
- Author, Date, and Tag archives
- Comment section and widgets
- View and visitor counters (with widgets)
- Related or random posts section
- Next / Previous post navigation
- Promoted blog tags
- Custom meta details: Custom slider title with excerpt & Multiple post layouts
- Backend dashboard report widgets
- Many more enhancements included
- VITE development support using TypeScript and SCSS


## Development
The theme uses **Vite** with HMR (Hot Module Reloading) for a smoother development workflow. Before
starting, make sure the storage folder is correctly mirrored:

```sh
php artisan october:mirror
```

Then navigate to the theme directory and install the dependencies:

```sh
npm i
```

Start the development server. Make sure nothing else is hogging port 5144:

```sh
npm run dev
```

All layout files in the theme (including the maintenance page) automatically load Vite’s HMR scripts,
powered by the Laravel Vite plugin and the `.hot` file inside the theme’s `assets` directory.

### Tested with
We use [BrowserStack](https://browserstack.com) to test the NewsHub template across a broad range of
systems and browsers. NewsHub has been tested on the following setups:

- **Microsoft Windows 11** (real machine): Google Chrome (latest), Mozilla Firefox (latest), Microsoft Edge (latest)
- **Linux ZorinOS 17** (real machine): Google Chrome (latest), Brave (latest)
- **Apple macOS 26 Tahoe** (via [BrowserStack](https://browserstack.com)): Apple Safari (v26)
- **Apple macOS 15 Sequoia** (via [BrowserStack](https://browserstack.com)): Apple Safari (v18.4)
- **Apple iPhone 14 Pro / iOS 26.1** (real device): Apple Safari (latest)
- **Apple iPhone 16 Pro / iOS 18** (via [BrowserStack](https://browserstack.com)): Apple Safari (latest)

Because some Apple-related tests rely on BrowserStack’s virtual devices, we cannot guarantee perfect,
seamless behavior on all Apple hardware or in Safari. If you encounter bugs or odd behavior, feel
free to reach out by email or open a GitHub issue. Thanks!


## Need Support?
Write us an issue on [GitHub](https://github.com/RatMD/newshub-theme/issues) or contact us via mail
at [info@rat.md](mailto:info@rat.md).


## Copyright
Copyright © 2022 - 2026 rat.md. \
Published under the MIT-License.
