# XCSoar Website Structure

## Overview
This is a Jekyll-based static website for XCSoar, an open-source glide computer. The site uses Jekyll 4.4.1 with custom layouts and plugins.

## Technology Stack
- **Static Site Generator**: Jekyll 4.4.1
- **Ruby Version**: 3.4.8
- **Theme**: Custom (not using a standard Jekyll theme)
- **CSS Framework**: Bootstrap (customized)
- **JavaScript**: Bootstrap 5 bundle, vanilla lightbox (conditional), screenshot carousel (conditional), OpenLayers on the maps page

## Directory Structure

```text
website/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts (4 layouts)
│   ├── default.html        # Default layout (blue theme)
│   ├── download.html       # Download pages (green theme)
│   ├── post.html           # Blog post layout
│   └── simple.html         # Simple page layout
├── _includes/              # Reusable components
│   ├── header.html         # Site header/navigation
│   ├── footer.html         # Site footer
│   ├── seo-structured-data.html
│   ├── home-fastlane-carousel.html
│   └── download_sidebar.html  # Download sidebar
├── _plugins/               # Custom Jekyll plugins (2 plugins)
│   ├── country_flag.rb     # Country flag tag
│   └── svgconvert.rb       # SVG to PNG converter
├── _posts/                 # Blog posts (95+ posts)
│   └── YYYY-MM-DD-title.md # Post format
├── _tools/                 # Build helpers and scripts
│   ├── fabfile.py          # Legacy Fabric wrapper around Jekyll
│   └── ftp_index/          # FTP index templates and Python scripts
├── docs/                   # Documentation (/docs/) and internal notes
│   ├── index.md            # Public docs index (published)
│   └── internal/           # Excluded in _config.yml; not built by Jekyll
│       ├── HTML5_ANALYSIS.md
│       ├── IMPROVEMENTS.md
│       ├── SECURITY_HEADERS.md
│       └── WEBSITE_STRUCTURE.md  # This file
├── download/               # Download section
│   ├── index.md            # Main download page
│   ├── latest.md           # Latest version
│   ├── old.md              # Old versions
│   ├── maps/               # Map downloads
│   │   ├── index.html      # Maps page
│   │   └── ol.js           # OpenLayers script
│   └── data/               # Static assets (e.g. sample checklist)
│       └── xcsoar-checklist.txt
├── hardware/               # Hardware compatibility
│   └── index.md            # Hardware info
├── css/                    # Stylesheets (5 CSS files)
│   ├── xcsoar.css          # Global layout / nav / lists
│   ├── screenshots.css     # #screenshots grid + homepage carousel (conditional)
│   ├── maps-page.css       # OpenLayers map download UI
│   ├── xcsoar-blue.css     # Blue theme
│   ├── xcsoar-green.css    # Green theme
│   └── xcsoar-red.css      # Red theme
├── img/                    # Images (icons, themes, Play Store phone shots, post attachments)
│   ├── play-store/         # Google Play screenshots (sync script → _data + files)
│   ├── attachments/        # Legacy images linked from old news posts
│   ├── *.svg               # SVG icons/logos
│   └── *.png               # PNG images
├── lib/                    # Third-party and site JS/CSS helpers
│   ├── bootstrap-5.3.8/    # Official Bootstrap 5.3.8 dist (CSS + JS bundle)
│   ├── flags/              # Country flags sprite + CSS (`{% country_flag %}`; CSS linked on /docs/)
│   ├── lightbox/           # Vanilla lightbox (screenshots / homepage when enabled)
│   └── screenshot-carousel.js
├── index.html              # Homepage
├── news.html               # Recent posts (summary)
├── news-archive.html       # Full post index
├── imprint.md              # Legal/imprint
└── atom.xml                # RSS feed

```

## Main Sections

### 1. Homepage (`/`)
- **Layout**: `default.html`
- **Color Theme**: Blue
- **Content**: Introduction, feature list, homepage screenshot carousel (Google Play shots)
- **Features**: Screenshot gallery with vanilla lightbox

### 2. News (`/news.html`, `/news-archive.html`, `/news/…`)
- **Layout**: `default.html` for indexes; `post.html` for `_posts/`
- **Color Theme**: Blue (index pages)
- **Permalink**: `/news/:year/:month/:day/:title.html`
- **Purpose**: Release posts and announcements; Atom feed in `atom.xml`

### 3. Download (`/download/`)
- **Layout**: `download.html`
- **Color Theme**: Green
- **Purpose**: Download XCSoar for different platforms
- **Pages**:
  - Main download (stable version)
  - Latest version
  - Old versions
  - Interactive maps (OpenLayers)
  - Static files under `download/data/` (e.g. sample checklist)

### 4. Docs (`/docs/`)
- **Layout**: `default.html`
- **Purpose**: Manual PDF links, Read the Docs references, hardware link

### 5. Hardware (`/hardware/`)
- **Layout**: `simple.html`
- **Purpose**: Hardware compatibility information
- **Content**: Supported devices, peripherals, Android devices

## Layout System

### Layout Types

1. **default.html** - Standard page layout
   - Header with navigation
   - Main content area
   - Footer
   - Color theme support (blue/green/red)

2. **download.html** - Download section layout
   - Includes download sidebar
   - Green theme

3. **post.html** - Blog post layout
   - For `_posts/` entries
   - Post metadata display

4. **simple.html** - Simple page layout
   - Minimal layout
   - Used for hardware page

## Color Themes

The site uses color-coded sections:
- **Blue**: Default, news index pages, Docs
- **Green**: Download section
- **Red**: Optional (e.g. some posts via `color: red` in front matter)
CSS files:
- `xcsoar-blue.css`
- `xcsoar-green.css`
- `xcsoar-red.css`

## Configuration (`_config.yml`)

Key settings:
- **Permalink**: `/news/:year/:month/:day/:title.html`
- **XCSoar Versions**:
  - Stable: 7.43
  - Old: 7.42
  - Testing: null
- **URLs**:
  - Download server: `https://download.xcsoar.org/releases`
  - Issue tracker: `https://github.com/XCSoar/XCSoar/issues`
  - Map generator: `https://mapgen.xcsoar.org/`
  - F-Droid: `https://f-droid.org/packages/org.xcsoar/`

## Custom Plugins

1. **country_flag.rb** - Liquid tag for country flags
   - Usage: `{% country_flag gb %}`

2. **svgconvert.rb** - SVG to PNG converter
   - Usage: `{% svgconvert /path/to/image.svg 48x48 %}`
   - Requires: `librsvg2-bin` (rsvg-convert)

## Blog Posts (`_posts/`)

- Format: `YYYY-MM-DD-title.md`
- Layout: `post.html`
- 95+ posts about releases, updates, announcements
- RSS feed: `atom.xml`

## Build Process

1. Jekyll processes Markdown and Liquid templates
2. SVG files converted to PNG (via plugin)
3. CSS minification (yui-compressor)
4. Output to `_site/` directory
5. Deployed via rsync to production server

## Dependencies

- **Jekyll**: 4.4.1
- **Jekyll Plugins**:
  - jekyll-feed: 0.17.0
  - jekyll-minibundle: 3.0.0
- **Other**:
  - nanoc: 4.14.6 (build tool)
  - minima: 2.5.2 (theme, but customized)
  - stringex: 2.8.6 (URL-friendly strings)

## Navigation Structure

```text
Home
├── News → /news.html, /news-archive.html, individual posts under /news/…
├── Download
│   ├── Releases
│   └── Maps
├── Docs (/docs/)
│   └── Hardware compatibility (→ /hardware/)
└── Imprint (footer)
```

## Static Assets

- **CSS**: Custom Bootstrap-based stylesheets
- **JavaScript**: Bootstrap bundle, conditional lightbox and carousel, OpenLayers on maps
- **Images**: SVG icons, PNG screenshots
- **Libraries**: Bootstrap, vanilla lightbox, country flags (CSS loaded on `/docs/` pages)

## Deployment

- **CI/CD**: GitHub Actions (`.github/workflows/website-deploy.yml`)
- **Build**: `bundle exec jekyll build --future`
- **Deploy**: rsync to `www.xcsoar.org` (master branch only)
- **Ruby**: 3.4.8
- **Platform**: Ubuntu latest
