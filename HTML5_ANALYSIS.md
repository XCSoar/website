# HTML5 Syntax and Features Analysis

## Issues Found

### 1. Outdated HTML/XHTML Syntax

#### ❌ Current Issues:
- `xmlns="https://www.w3.org/1999/xhtml"` - XHTML namespace, not needed in HTML5
- `xml:lang="en"` - XHTML attribute, HTML5 uses just `lang="en"`
- `http-equiv="Content-Type"` - Old way, HTML5 uses `<meta charset="utf-8">`
- Self-closing tags like `<hr/>` - HTML5 doesn't require the slash (`<hr>` is fine)

#### ✅ Modern HTML5 Syntax:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>...</title>
</head>
```

### 2. Missing Semantic HTML5 Elements

#### Currently Missing:
- **`<main>`** - Main content area (using `<div id="primary">` instead)
- **`<header>`** - Site header (using `<div id="primary">` instead)
- **`<section>`** - Content sections (using generic divs)
- **`<article>`** - Blog posts (using `<div class="news-item">` instead)
- **`<aside>`** - Sidebars (using `<div id="aside">` instead)
- **`<time>`** - Dates (using plain text instead)

### 3. Recommended HTML5 Improvements

#### Semantic Structure:
```html
<header>
  <nav>...</nav>
</header>
<main>
  <section>...</section>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>
```

#### Date Elements:
```html
<!-- Current -->
<small>({{ post.date | date:'%e. %b %Y' }})</small>

<!-- HTML5 -->
<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date:'%e. %b %Y' }}</time>
```

## Implementation Priority

### High Priority (Syntax Updates)
1. Remove XHTML namespace (`xmlns`)
2. Remove `xml:lang`, use only `lang`
3. Replace `http-equiv="Content-Type"` with `<meta charset="utf-8">`
4. Remove unnecessary self-closing slashes

### Medium Priority (Semantic Elements)
1. Add `<main>` wrapper
2. Add `<header>` element
3. Convert sidebars to `<aside>`
4. Convert blog posts to `<article>`
5. Add `<time>` elements for dates

### Low Priority (Enhancements)
1. Add structured data (JSON-LD)
2. Use `<section>` for content sections
3. Add `<mark>` for highlighted text where appropriate
