# Security Headers Configuration

This document describes the security headers implemented for the XCSoar website.

## Meta Tags (Implemented)

Security headers are implemented via HTML meta tags in `_includes/header.html`:

- **Content-Security-Policy**: Restricts resource loading to prevent XSS attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables browser XSS protection
- **Referrer-Policy**: Controls referrer information sent with requests

## HTTP Headers (Server Configuration)

For maximum security, these headers should also be configured at the server level. The following headers are recommended:

### Apache Configuration

Add to `.htaccess` or Apache config:

```apache
# Content Security Policy
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://maps.google.com https://www.google.com https://download.xcsoar.org; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://cdn.jsdelivr.net https://download.xcsoar.org https://maps.google.com https://www.google.com https://skylines.aero; frame-src https://maps.google.com https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"

# Prevent MIME type sniffing
Header set X-Content-Type-Options "nosniff"

# Prevent clickjacking
Header set X-Frame-Options "SAMEORIGIN"

# Enable XSS protection
Header set X-XSS-Protection "1; mode=block"

# Referrer Policy
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Permissions Policy
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# Strict Transport Security (HSTS) - only if using HTTPS
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

### Nginx Configuration

Add to nginx config:

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://maps.google.com https://www.google.com https://download.xcsoar.org; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://cdn.jsdelivr.net https://download.xcsoar.org https://maps.google.com https://www.google.com https://skylines.aero; frame-src https://maps.google.com https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## Content Security Policy Details

The CSP allows:

- **default-src 'self'**: Only load resources from same origin by default
- **script-src**: Allows scripts from self, inline (for lightbox), and trusted CDNs
- **style-src**: Allows styles from self, inline, and CDNs
- **img-src**: Allows images from self, data URIs, and any HTTPS source
- **font-src**: Allows fonts from self and data URIs
- **connect-src**: Allows AJAX/fetch to self and trusted domains
- **frame-src**: Allows iframes from Google Maps
- **object-src 'none'**: Blocks plugins (Flash, etc.)
- **base-uri 'self'**: Restricts base tag URLs
- **form-action 'self'**: Restricts form submissions

## Testing

Test security headers using:

- [SecurityHeaders.com](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- Browser DevTools → Network → Response Headers

## Notes

- Meta tags provide basic protection but HTTP headers are more secure
- CSP may need adjustment if new external resources are added
- HSTS should only be enabled if HTTPS is properly configured
- Some headers (like X-XSS-Protection) are legacy but still useful for older browsers
