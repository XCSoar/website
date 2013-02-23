import os
import os.path
import sys
import re
from datetime import datetime
import math


def filesizeformat(bytes, precision=2):
    """Returns a humanized string for a given amount of bytes"""
    bytes = int(bytes)
    if bytes is 0:
        return '0 bytes'

    log = math.floor(math.log(bytes, 1024))
    return "%.*f %s" % (precision,
                       bytes / math.pow(1024, log),
                       ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
                       [int(log)])


def sort_nicely(l):
    """Sort the given list in the way that humans expect."""
    convert = lambda text: int(text) if text.isdigit() else text
    alphanum_key = lambda key: [convert(c) for c in re.split('([0-9]+)', key[0])]
    l.sort(key=alphanum_key)


def get_folder_content(path):
    subdirs = []
    files = []
    for name in os.listdir(path):
        filepath = os.path.join(path, name)
        last_mod = datetime.fromtimestamp(os.path.getmtime(filepath))

        if os.path.isfile(filepath):
            if name != "index.html":
                size = os.path.getsize(filepath)
                files.append([name, last_mod, size])
        else:
            if name != ".." and name != ".":
                subdirs.append([name, last_mod])

    sort_nicely(subdirs)
    sort_nicely(files)

    return subdirs, files


def get_readme(path, files):
    readme_file = None
    for file in files:
        if file[0].upper().startswith("README"):
            readme_file = file[0]
            break

    if readme_file == None:
        return ""

    f = open("readme.tpl", "r")
    template = f.read()
    f.close()

    f = open(os.path.join(path, readme_file), "r")
    content = f.read()
    f.close()

    return template.replace("%%filename%%", readme_file).replace("%%content%%", content)


def create_index_file(path, subdirs, files):
    f = open("index.tpl", "r")
    index_template = f.read()
    f.close()

    f = open("subdir.tpl", "r")
    subdir_template = f.read()
    f.close()

    f = open("file.tpl", "r")
    file_template = f.read()
    f.close()

    content_subdirs = ""
    for dir in subdirs:
        content_subdirs += subdir_template.replace("%%path%%", path + dir[0] + "/").replace("%%title%%", dir[0])

    content_files = ""
    for file in files:
        content_files += file_template.replace("%%path%%", path + file[0]).replace("%%size%%", filesizeformat(file[2])).replace("%%title%%", file[0])

    sep = "" if len(files) == 0 or len(subdirs) == 0 else "<hr/>"

    path_parts = path.split("/")
    path2 = "/"
    path_str = "/ "
    for part in path_parts:
        if part != "":
            path2 += part + "/"
            path_str += "<a href=\"" + path2 + "\">" + part + "</a> / "

    readme = get_readme(path, files)
    html = index_template.replace("%%path%%", path_str).replace("%%sep%%", sep).replace("%%content_files%%", content_files).replace("%%content_subdirs%%", content_subdirs).replace("%%readme%%", readme)

    f = open(os.path.join(path, "index.html"), "w")
    f.write(html)
    f.close()


def create_folder_index(path, recursive):
    print "Listing folder " + path
    subdirs, files = get_folder_content(path)
    print "Creating index for folder " + path
    create_index_file(path, subdirs, files)

    if recursive:
        for dir in subdirs:
            create_folder_index(path + dir[0] + "/", recursive)

def help():
    print('''Usage:   python create_index.py [-r] [<folder>]

         -r            Create the index files recursivly
         <folder>  The folder for which the index file should be created''')
    
def main():
    recursive = False
    ftp_dir = '.'
    for arg in sys.argv[1:]:
        if arg == "-r":
            recursive = True
        else:
            ftp_dir = arg.rstrip('/')
    
    create_folder_index(ftp_dir + '/', recursive)
    
main()
