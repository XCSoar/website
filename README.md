# XCSoar.org - Website

1. Install dependencies
   ```
   sudo apt-get install bundler yuicompressor librsvg2-bin
   ```

2. Install ruby dependencies
   ```
   bundle install
   ```

3. Build the website
   ```
   bundle exec jekyll build
   ```

## How to generate a new post

1. Generate a stub for the new post
   ```
   bundle exec rake new_post["XCSoar 6.8.12 released"]
   ```

2. Edit the new post, created in `./_posts`
