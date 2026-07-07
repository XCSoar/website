# XCSoar website

Source for [xcsoar.org](https://xcsoar.org/): a static site built with [Jekyll](https://jekyllrb.com/) (~> 4.4, see `Gemfile`).

## Requirements

- Ruby and Bundler (CI uses Ruby **4.0.x**; see [`.github/workflows/website-deploy.yml`](.github/workflows/website-deploy.yml))

On Debian/Ubuntu, install optional packages so local builds match production asset steps:

```bash
sudo apt-get install -y yui-compressor
```

## Build and preview

```bash
bundle install
bundle exec jekyll build
```

Site output is `_site/`. For a local server (default <http://127.0.0.1:4000/>):

```bash
bundle exec jekyll serve
```

CI runs `bundle exec jekyll build --future`; use `--future` locally if you need future-dated posts included.

## Docker

Example using the official Ruby image (no Ruby on the host):

```bash
docker run --rm -it --network host -v "$PWD:/data" -w /data ruby:4 bash -lc \
  "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

`--network host` lets you reach the server from the host on port 4000 on Linux.

## Deployment

Pushes to **`master`** trigger [`.github/workflows/website-deploy.yml`](.github/workflows/website-deploy.yml), which builds the site and deploys `_site/` via rsync.

## New blog post

1. Add a file under `_posts/` named `YYYY-MM-DD-short-title.md` (see existing posts for slugs).
2. Use front matter consistent with other posts, for example:

   ```yaml
   ---
   title: "XCSoar 7.55 released"
   created_at: 2026-04-08 12:00:00 +0200
   author: yourname
   layout: post
   ---
   ```

3. For a **release** post, update version fields in [`_config.yml`](_config.yml) (e.g. `xcsoar_stable_version`, `xcsoar_old_version`).

### Optional: `rake new_post`

If you use [Stacked Git](https://stacked-git.github.io/) (`stg`) and a typical `EDITOR` / `sensible-editor` setup, you can scaffold a post with:

```bash
bundle exec rake "new_post[XCSoar 7.55 released]"
```

Without `stg`, this task will not complete successfully; create the Markdown file manually as above instead.
