# XCSoar.org - Website

1. Run Ruby Docker image
   ```
   docker run -v ./:/data -it ruby:3.3.5  /bin/bash
   cd /data
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
   git config --global --add safe.directory /data
   apt update && apt install -y vim
   bundle exec rake new_post["XCSoar 7.55 released"]
   ```

2. Edit the new post, created in `./_posts`

3. If there is a new relase also update _config.yml with the new release number.
