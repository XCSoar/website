import sys
import ftplib
import re
import datetime
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
    """ Sort the given list in the way that humans expect.
    """
    convert = lambda text: int(text) if text.isdigit() else text
    alphanum_key = lambda key: [convert(c) for c in re.split('([0-9]+)', key[0])]
    l.sort(key=alphanum_key)


def read_date_time(str):
    year = int(str[:4])
    month = int(str[4:6])
    day = int(str[6:8])
    hour = int(str[8:10])
    minute = int(str[10:12])
    second = int(str[12:14])

    return datetime.datetime(year, month, day, hour, minute, second)


def get_folder_content(ftp):
    ftp_list = []
    ftp.retrlines('MLSD', ftp_list.append)
    #dir(ftp_list.append)

    subdirs = []
    files = []
    for item in ftp_list:
        item = item.split(';')
        name = item[-1].strip()
        last_mod = read_date_time(item[2].replace("modify=", ""))
        size = int(item[1].replace("size=", "").replace("sizd=", ""))

        if item[0] == "type=file":
            if name != "index.html":
                files.append([name, last_mod, size])
        else:
            if name != ".." and name != ".":
                subdirs.append([name, last_mod])

    sort_nicely(subdirs)
    sort_nicely(files)

    return subdirs, files


def get_readme(ftp, path, files):
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

    content = []
    ftp.retrbinary("RETR " + readme_file, content.append)
    content = ''.join(content)

    return template.replace("%%filename%%", readme_file).replace("%%content%%", content)


def create_index_file(ftp, path, subdirs, files):
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

    readme = get_readme(ftp, path, files)
    html = index_template.replace("%%path%%", path_str).replace("%%sep%%", sep).replace("%%content_files%%", content_files).replace("%%content_subdirs%%", content_subdirs).replace("%%readme%%", readme)

    f = open("index.html", "w")
    f.write(html)
    f.close()


def upload_index_file(ftp):
    file = open("index.html", 'rb')
    ftp.storbinary('STOR index.html', file)
    file.close()


def create_folder_index(path, ftp, recursive):
    print "Entering folder " + path
    ftp.cwd(path)

    print "Listing folder " + path
    subdirs, files = get_folder_content(ftp)
    print "Creating index for folder " + path
    create_index_file(ftp, path, subdirs, files)
    print "Uploading index for folder " + path
    upload_index_file(ftp)

    if recursive:
        for dir in subdirs:
            create_folder_index(path + dir[0] + "/", ftp, recursive)

def help():
    print('''Usage:   python create_index.py <password> [-r] [<ftp-folder>]

         <password>    Password for the download.xcsoar.org ftp server
         -r            Create the index files recursivly
         <ftp-folder>  The folder for which the index file should be created''')
    
def main():
    if len(sys.argv) < 2:
        help()
        return

    password = sys.argv[1]

    recursive = False
    ftp_dir = '/releases'
    for arg in sys.argv[2:]:
        if arg == "-r":
            recursive = True
        else:
            ftp_dir = arg.rstrip('/')

    print "Connecting to server ..."
    ftp = ftplib.FTP('download.xcsoar.org', 'xcsoar@ddbits.com', password)

    create_folder_index(ftp_dir + '/', ftp, recursive)

    ftp.quit()

main()
