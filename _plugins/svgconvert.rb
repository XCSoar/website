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
# * Install the librsvg2-bin package (rsvg-convert is needed)
# * Copy svgconvert.rb to the plugins folder

class Jekyll::SVGConvert < Liquid::Tag

  def initialize(tag_name, markup, tokens)
    super
    if /(?<source>[^\s]+)( (?<width>\d+)x(?<height>\d+))*( --format=(?<format>\w+))*/i =~ markup
      @source = source
      @width = width
      @height = height
      @format = (format or "png")
    end
  end

  def render(context)
    if !@source
      print "svgconvert used wrong! Usage: svgconvert /path/to/local/image.svg [100x100]\n"
      return
    end

    @site = site = context.registers[:site]
    @source_path = File.join(site.source, @source)

    # Check if SVG file exists
    if !File.file?(@source_path)
      print "#{@source_path} not found.\n"
      return
    end

    # Build output path
    ext = File.extname(@source)
    basename = File.basename(@source, ext)

    if @width && @height
      basename.concat("-#{@width}x#{@height}")
    end

    @dest = "#{File.dirname(@source)}/#{basename}.#{@format}"
    @dest_path = File.join(site.dest, @dest)

    # Register the file as a static file
    # No need to push self to site.static_files

    # Return relative path to output file
    @dest
  end

  # Returns source file path
  def path
    @source_path
  end

  # Returns the source file path relative to the site source
  def relative_path
    @relative_path ||= path.sub(/\A#{@site.source}/, '')
  end

  def destination(dest)
    # Return the destination path
    @dest_path
  end

  def write
    # Generate output file if it doesn't exist or is less recent than the source file
    if !File.exists?(@dest_path) || File.mtime(@dest_path) <= File.mtime(@source_path)
      print "Generating #{@format.upcase}: #{@source} -> #{@dest}\n"

      options = "-o #{@dest_path}"
      if @width && @height
        options.concat(" --width=#{@width}")
        options.concat(" --height=#{@height}")
      end
      if @format
        options.concat(" --format=#{@format}")
      end

      `rsvg-convert #{options} #{@source_path}`
    end
  end

end

Liquid::Template.register_tag('svgconvert', Jekyll::SVGConvert)
