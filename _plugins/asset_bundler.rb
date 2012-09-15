#
# Jekyll Asset Bundler
#
# Author : Colin Kennedy
# Repo   : http://github.com/moshen/jekyll-asset_bundler
# License: MIT, see LICENSE file
#

require 'yaml'
require 'digest/md5'
require 'net/http'
require 'uri'

module Jekyll

  class BundleTag < Liquid::Block
    @@supported_types = ['js', 'css']

    def initialize(tag_name, text, tokens)
      super
      @text = text 
      @files = {}
    end

    def render(context)
      src = context.registers[:site].source
      raw_markup = super(context)
      begin
        @assets = YAML::load(raw_markup)
      rescue
        puts <<-END
Asset Bundler - Error: Problem parsing a YAML bundle
#{raw_markup}

#{$!}
END
      end

      if @assets.class != Array
        puts "Asset Bundler - Error: YAML bundle is not an Array\n#{raw_markup}"
        @assets = []
      end

      add_files_from_list(src, @assets)

      markup = ""

      @files.each {|k,v|
        markup.concat(Bundle.new(v, k, context).markup())
      }

      markup
    end

    def add_files_from_list(src, list)
      list.each {|a|
        path = File.join(src, a)
        if (File.basename(a) !~ /^\.+/ and File.file?(path)) or a =~ /^(https?:)?\/\//i
          add_file_by_type(a)
        else
          puts "Asset Bundler Error - File: #{path} not found, ignoring..."
        end
      }
    end

    def add_file_by_type(file)
      if file =~ /\.([^\.]+)$/
        type = $1.downcase()
        return if @@supported_types.index(type).nil?
        if !@files.key?(type)
          @files[type] = []
        end

        @files[type].push(file)
      end
    end

  end

  class Bundle
    @@bundles = {}
    @@default_config = {
      'compress'       => { 'js'     => false, 'css'  => false },
      'base_path'      => '/bundles/',
      'server_url'      => '',
      'remove_bundled' => false,
      'dev'            => false
    }
    attr_reader :content, :hash, :filename, :base

    def initialize(files, type, context)
      @files    = files
      @type     = type
      @context  = context
      @content  = ''
      @hash     = ''
      @filename = ''

      @config = Bundle.config(@context)
      @base = @config['base_path']
      @server_url = @config['server_url']

      @filename_hash = Digest::MD5.hexdigest(@files.join())
      if @@bundles.key?(@filename_hash)
        @filename = @@bundles[@filename_hash].filename
        @base     = @@bundles[@filename_hash].base
      else
        load_content()
      end
    end

    def self.config(context)
      ret_config = nil
      if context.registers[:site].config.key?("asset_bundler")
        ret_config = @@default_config.deep_merge(context.registers[:site].config["asset_bundler"])
      else
        ret_config = @@default_config
      end

      if context.registers[:site].config.key?("dev")
        ret_config['dev'] = context.registers[:site].config["dev"] ? true : false
      end

      ret_config
    end

    def load_content()
      if @config['dev']
        @@bundles[@filename_hash] = self
        return
      end

      src = @context.registers[:site].source

      @files.each {|f|
        @content.concat(File.read(File.join(src, f)))
      }

      @hash = Digest::MD5.hexdigest(@content)
      @filename = "#{@hash}.#{@type}"

      if @config['compress'][@type]
        # TODO: Compilation of Less and CoffeeScript would go here
        compress()
      end

      @context.registers[:site].static_files.push(self)
      remove_bundled() if @config['remove_bundled']

      @@bundles[@filename_hash] = self
    end

    # Removes StaticFiles from the _site if they are bundled
    #   and the remove_bundled option is true
    #   which... it isn't by default
    def remove_bundled()
      src = @context.registers[:site].source
      @files.each {|f|
        @context.registers[:site].static_files.select! {|s|
          if s.class == StaticFile
            s.path != File.join(src, f)
          else
            true
          end
        }
      }
    end

    def compress()
      return if @config['dev']

      case @config['compress'][@type]
        when 'yui'
          compress_yui()
        when 'closure'
          compress_closure()
        else
          compress_command()
      end
    end

    def compress_command()
      command = String.new(@config['compress'][@type])

      mode = "r+"
      IO.popen(command, mode) {|i|
        i.puts(@content)
        i.close_write()

        @content = ""
        i.each {|line|
          @content << line
        }
      }
    end

    def compress_yui()
      require 'yui/compressor'
      case @type
        when 'js'
          @content = YUI::JavaScriptCompressor.new.compress(@content)
        when 'css'
          @content = YUI::CssCompressor.new.compress(@content)
      end
    end

    def compress_closure()
      require 'closure-compiler'
      case @type
        when 'js'
          @content = Closure::Compiler.new.compile(@content)
      end
    end

    def markup()
      return dev_markup() if @config['dev']
      case @type
        when 'js'
          "<script type='text/javascript' src='#{@server_url}#{@base}#{@filename}'></script>\n"
        when 'coffee'
          "<script type='text/coffeescript' src='#{@server_url}#{@base}#{@filename}'></script>\n"
        when 'css'
          "<link rel='stylesheet' type='text/css' href='#{@server_url}#{@base}#{@filename}' />\n"
        when 'less'
          "<link rel='stylesheet/less' type='text/css' href='#{@server_url}#{@base}#{@filename}' />\n"
      end
    end

    def dev_markup()
      output = ''
      @files.each {|f|
        case @type
          when 'js'
            output.concat("<script type='text/javascript' src='#{f}'></script>\n")
          when 'coffee'
            output.concat("<script type='text/coffeescript' src='#{f}'></script>\n")
          when 'css'
            output.concat("<link rel='stylesheet' type='text/css' href='#{f}' />\n")
          when 'less'
            output.concat("<link rel='stylesheet/less' type='text/css' href='#{f}' />\n")
        end
      }

      return output
    end

    # Methods required by Jekyll::Site to write out the bundle
    #   This is where we give Jekyll::Bundle a Jekyll::StaticFile
    #   duck call and send it on its way.
    def destination(dest)
      File.join(dest, @base, @filename)
    end

    def write(dest)
      dest_path = destination(dest)
      return false if File.exists?(dest_path)

      FileUtils.mkdir_p(File.dirname(dest_path))
      File.open(dest_path, "w") {|o|
        o.write(@content)
      }

      true
    end
    # End o' the duck call

  end

end

Liquid::Template.register_tag('bundle', Jekyll::BundleTag)
