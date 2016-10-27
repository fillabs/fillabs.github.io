# Require any additional compass plugins here.
require 'net/ftp'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"
fonts_dir = "fonts"

output_style = :nested
environment = :development

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false
color_output = false

sourcemap = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

#Do Ruby stuff. Below outputs to command line.

#begin
# ftp = Net::FTP.open('ftp.fillabs.com', user = "fillabs_flexyuser", passwd = "FillFlexyFtp25}");
#rescue
# puts "Can not upload files"
#end

on_stylesheet_saved do |file|
  exit
  f = file.gsub(/^(.*)\/themes\//,'/themes/');
  l = file.gsub(/\/css\//,'/sass/').gsub(/.css$/,'.scss');
  r = f.gsub(/\/css\//,'/sass/').gsub(/.css$/,'.scss');
  
  begin
    ftp.delete(f)
  rescue
    begin
      ftp.mkdir(File.dirname(f))
    rescue
    end
  end
  puts "    upload " + f
  begin
    ftp.putbinaryfile(file, f);
  rescue
    puts "        UPLOAD ERROR"
  end

  puts "    upload " + f + ".map"
  begin
    ftp.putbinaryfile(file + ".map", f + ".map");
  rescue
    puts "        UPLOAD ERROR"
  end

  puts "    upload " + r
  begin
   ftp.putbinaryfile(l, r);
  rescue
   puts "        UPLOAD ERROR"
  end
end
