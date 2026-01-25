# XCSoar Website Structure

## Overview
This is a Jekyll-based static website for XCSoar, an open-source glide computer. The site uses Jekyll 4.4.1 with custom layouts and plugins.

## Technology Stack
- **Static Site Generator**: Jekyll 4.4.1
- **Ruby Version**: 3.4.8
- **Theme**: Custom (not using a standard Jekyll theme)
- **CSS Framework**: Bootstrap (customized)
- **JavaScript**: jQuery 1.8.2, custom scripts

## Directory Structure

```
website/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts (7 layouts)
│   ├── default.html        # Default layout (blue theme)
│   ├── develop.html        # Development/contribution pages (red theme)
│   ├── discover.html       # Discovery/info pages (blue theme)
│   ├── download.html       # Download pages (green theme)
│   ├── post.html           # Blog post layout
│   ├── simple.html         # Simple page layout
│   └── trac.html           # Trac/issue tracker layout
├── _includes/              # Reusable components (5 includes)
│   ├── header.html         # Site header/navigation
│   ├── footer.html         # Site footer
│   ├── discover_menu.html  # Discover section menu
│   ├── download_sidebar.html  # Download sidebar
│   └── section_change.html # Section navigation
├── _plugins/               # Custom Jekyll plugins (2 plugins)
│   ├── country_flag.rb     # Country flag tag
│   └── svgconvert.rb       # SVG to PNG converter
├── _posts/                 # Blog posts (95+ posts)
│   └── YYYY-MM-DD-title.md # Post format
├── _tools/                 # Build tools (6 files)
│   ├── *.tpl               # Template files
│   └── *.py                # Python scripts
├── contact/                # Contact section
│   ├── index.md            # Contact page
│   └── irc.html            # IRC information
├── develop/                # Development/Contribution section
│   ├── index.md            # Main contribute page
│   ├── donations.md        # Donations
│   ├── infrastructure.md   # Infrastructure info
│   └── new_ticket.md       # How to create tickets
├── discover/               # Discovery/Information section
│   ├── index.md            # Main discover page
│   ├── features.md         # Feature list
│   ├── history.md          # Project history
│   ├── manual.md           # Manual links
│   ├── logos.md            # Logo information
│   ├── news.html           # News page
│   ├── screenshots/        # Screenshot gallery
│   │   ├── index.html      # Screenshot index
│   │   └── *.png           # Screenshot images
│   ├── simulators/         # Simulator info
│   │   └── condor.md       # Condor simulator
│   └── attachments/        # Media attachments
├── download/               # Download section
│   ├── index.md            # Main download page
│   ├── latest.md           # Latest version
│   ├── old.md              # Old versions
│   ├── data.md             # Data files download
│   ├── maps/               # Map downloads
│   │   ├── index.html      # Maps page
│   │   ├── ol.js           # OpenLayers script
│   │   └── ommaps.html     # Maps interface
│   ├── waypoints/          # Waypoint downloads
│   │   ├── index.html      # Waypoints page
│   │   └── waypoints.js    # Waypoints script
│   └── data/               # Data files
│       └── xcsoar-checklist.txt
├── hardware/               # Hardware compatibility
│   └── index.md            # Hardware info
├── css/                    # Stylesheets (7 CSS files)
│   ├── xcsoar.css          # Main stylesheet
│   ├── xcsoar-blue.css     # Blue theme
│   ├── xcsoar-green.css    # Green theme
│   ├── xcsoar-red.css      # Red theme
│   ├── xcsoar-trac.css     # Trac theme
│   └── xcsoar-forum.css    # Forum theme
├── img/                    # Images (21 files)
│   ├── *.svg               # SVG icons/logos
│   └── *.png               # PNG images
├── lib/                    # Third-party libraries
│   ├── bootstrap/          # Bootstrap CSS
│   ├── flags/              # Country flags
│   ├── jquery-1.8.2.min.js # jQuery
│   └── jquery-lightbox/    # Lightbox plugin
├── templates/              # Template files (3 files)
│   └── trac.html           # Trac templates
├── index.html              # Homepage
├── imprint.md              # Legal/imprint
└── atom.xml                # RSS feed

```

## Main Sections

### 1. Homepage (`/`)
- **Layout**: `default.html`
- **Color Theme**: Blue
- **Content**: Introduction, download CTA, latest news, social links
- **Features**: Screenshot gallery with jQuery lightbox

### 2. Discover (`/discover/`)
- **Layout**: `discover.html`
- **Color Theme**: Blue
- **Purpose**: Information about XCSoar
- **Pages**:
  - Features
  - History
  - Manual (links to PDFs)
  - Screenshots gallery
  - Simulators (Condor)
  - Logos

### 3. Download (`/download/`)
- **Layout**: `download.html`
- **Color Theme**: Green
- **Purpose**: Download XCSoar for different platforms
- **Pages**:
  - Main download (stable version)
  - Latest version
  - Old versions
  - Data files (maps, waypoints)
  - Interactive maps (OpenLayers)
  - Waypoints browser

### 4. Develop (`/develop/`)
- **Layout**: `develop.html`
- **Color Theme**: Red
- **Purpose**: Contribution and development info
- **Pages**:
  - How to contribute
  - Donations
  - Infrastructure
  - How to create tickets

### 5. Hardware (`/hardware/`)
- **Layout**: `simple.html`
- **Purpose**: Hardware compatibility information
- **Content**: Supported devices, peripherals, Android devices

### 6. Contact (`/contact/`)
- **Layout**: `default.html`
- **Purpose**: Contact information
- **Pages**: Contact form, IRC info

## Layout System

### Layout Types

1. **default.html** - Standard page layout
   - Header with navigation
   - Main content area
   - Footer
   - Color theme support (blue/green/red)

2. **discover.html** - Discovery section layout
   - Includes discover menu sidebar
   - Blue theme

3. **download.html** - Download section layout
   - Includes download sidebar
   - Green theme

4. **develop.html** - Development section layout
   - Red theme
   - Development-focused navigation

5. **post.html** - Blog post layout
   - For `_posts/` entries
   - Post metadata display

6. **simple.html** - Simple page layout
   - Minimal layout
   - Used for hardware page

7. **trac.html** - Trac/issue tracker layout
   - Special layout for issue pages

## Color Themes

The site uses color-coded sections:
- **Blue**: Default, Discover section
- **Green**: Download section
- **Red**: Develop/Contribution section

CSS files:
- `xcsoar-blue.css`
- `xcsoar-green.css`
- `xcsoar-red.css`

## Configuration (`_config.yml`)

Key settings:
- **Permalink**: `/discover/:year/:month/:day/:title.html`
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

```
Home
├── Discover
│   ├── Features
│   ├── History
│   ├── Manual
│   ├── Screenshots
│   └── Simulators
├── Download
│   ├── Latest
│   ├── Old Versions
│   ├── Maps
│   └── Waypoints
├── Develop
│   ├── Contribute
│   ├── Donations
│   └── Infrastructure
├── Hardware
└── Contact
```

## Static Assets

- **CSS**: Custom Bootstrap-based stylesheets
- **JavaScript**: jQuery 1.8.2, custom scripts
- **Images**: SVG icons, PNG screenshots
- **Libraries**: Bootstrap, jQuery Lightbox, country flags

## Deployment

- **CI/CD**: GitHub Actions (`.github/workflows/website-deploy.yml`)
- **Build**: `bundle exec jekyll build --future`
- **Deploy**: rsync to `www.xcsoar.org` (master branch only)
- **Ruby**: 3.4.8
- **Platform**: Ubuntu latest
