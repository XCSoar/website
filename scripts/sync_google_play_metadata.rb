#!/usr/bin/env ruby
# frozen_string_literal: true

# Fetches Google Play phone screenshots from XCSoar/XCSoar Fastlane (single source of truth):
#   images/phoneScreenshots/* → discover/screenshots/play-store/ + _data/google_play_phone_screenshots.yml
# https://github.com/XCSoar/XCSoar/tree/master/fastlane/metadata/android/en-US/images/phoneScreenshots
#
# Run before local Jekyll build if you want the latest assets; CI runs this automatically.

require "fileutils"
require "json"
require "open-uri"
require "set"
require "yaml"

GITHUB_API_SCREENSHOTS =
  "https://api.github.com/repos/XCSoar/XCSoar/contents/fastlane/metadata/android/en-US/images/phoneScreenshots?ref=master"
RAW_SCREENSHOT_BASE =
  "https://raw.githubusercontent.com/XCSoar/XCSoar/master/fastlane/metadata/android/en-US/images/phoneScreenshots"

root = File.expand_path("..", __dir__)
data_dir = File.join(root, "_data")
play_store_img_dir = File.join(root, "discover", "screenshots", "play-store")

def github_open_options(extra = {})
  {
    "User-Agent" => "XCSoar-website-sync/1.0 (https://xcsoar.org)"
  }.merge(extra)
end

def title_from_filename(name)
  base = File.basename(name, File.extname(name))
  base = base.sub(/^\d+-/, "")
  base.split("-").map(&:capitalize).join(" ")
end

FileUtils.mkdir_p(play_store_img_dir)

json = URI.open(
  GITHUB_API_SCREENSHOTS,
  github_open_options("Accept" => "application/vnd.github.v3+json"),
  &:read
)
items = JSON.parse(json)
image_items =
  items
    .select { |i| i["type"] == "file" && i["name"].match?(/\.(jpe?g|png)$/i) }
    .sort_by { |i| i["name"] }

allowed = image_items.map { |i| i["name"] }.to_set
Dir.glob(File.join(play_store_img_dir, "*")).each do |path|
  next unless File.file?(path)
  next if allowed.include?(File.basename(path))

  File.delete(path)
end

screenshots_yaml = []
image_items.each do |item|
  name = item["name"]
  url = "#{RAW_SCREENSHOT_BASE}/#{name}"
  body = URI.open(url, "rb", github_open_options, &:read)
  File.binwrite(File.join(play_store_img_dir, name), body)

  title = title_from_filename(name)
  screenshots_yaml << {
    "filename" => name,
    "path" => "/discover/screenshots/play-store/#{name}",
    "title" => title,
    "alt" => "XCSoar: #{title}"
  }
end

screenshots_data = {
  "source" => "https://github.com/XCSoar/XCSoar/tree/master/fastlane/metadata/android/en-US/images/phoneScreenshots",
  "screenshots" => screenshots_yaml
}
File.write(File.join(data_dir, "google_play_phone_screenshots.yml"), screenshots_data.to_yaml)
