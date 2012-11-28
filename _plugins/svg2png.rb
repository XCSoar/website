# Generates a PNG image from an SVG file
#
# Usage:
#
# {% svg2png /path/to/local/image.svg %}
# {% svg2png /path/to/local/image.svg 50x50 %}
#
# Installation:
#
# * install the librsvg2-bin package (rsvg-convert is needed)
# * copy svg2png.rb to plugins folder

class Jekyll::SVG2PNG < Liquid::Tag

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
      print "SVG2PNG used wrong! Usage: svg2png /path/to/local/image.svg [100x100]\n"
      return
    end

    site = context.registers[:site]
    @source_path = File.join(site.source, @source)

    # Check if SVG file exists
    if !File.file?(@source_path)
      print "#{@source_path} not found.\n"
      return
    end

    # Build PNG output path
    ext = File.extname(@source)
    basename = File.basename(@source, ext)

    if @width and @height
      basename.concat("-#{@width}x#{@height}")
    end

    @dest = "#{File.dirname(@source)}/#{basename}.#{@format}"
    @dest_path = File.join(site.dest, @dest)

    # Register as StaticFile
    site.static_files.push(self)

    # Return relative path to PNG file
    """#{@dest}"""
  end

  def destination(dest)
    # Return the destination path
    @dest_path
  end

  def write(dest)
    # Generate PNG file if it doesn't exist or is less recent than the source file
    if !File.exists?(@dest_path) || File.mtime(@dest_path) <= File.mtime(@source_path)
      print "Generating PNG: #{@source} -> #{@dest}\n"

      options = "-o #{@dest_path}"
      if @width and @height
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

Liquid::Template.register_tag('svg2png', Jekyll::SVG2PNG)
