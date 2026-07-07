# Renders a country flag span (sprite-based CSS in /lib/flags/flags.css).
# Usage:
# {% country_flag gb %}

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
