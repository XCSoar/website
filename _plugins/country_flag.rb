# Generates a PNG image or PDF from an SVG file
#
# Usage:
#
# {% svgconvert /path/to/local/image.svg %}
# {% svgconvert /path/to/local/image.svg 50x50 %}
# {% svgconvert /path/to/local/image.svg --format=pdf %}
#
# Installation:
#
# * install the librsvg2-bin package (rsvg-convert is needed)
# * copy svgconvert.rb to plugins folder

class Jekyll::CountryFlag < Liquid::Tag
  def initialize(tag_name, text, tokens)
    super
    @country = text
  end

  def render(context)
    return "<span class=\"flag flag-#{@country}\" style=\"display:inline-block\"></span>"
  end
end

Liquid::Template.register_tag('country_flag', Jekyll::CountryFlag)
