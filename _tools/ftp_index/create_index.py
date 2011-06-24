import os
import sys
import ftplib
import re
import datetime
import math

ftp_dir = '/releases'

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
    alphanum_key = lambda key: [ convert(c) for c in re.split('([0-9]+)', key[0]) ] 
    l.sort( key=alphanum_key )
    
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
    
    html = index_template.replace("%%path%%", path_str).replace("%%sep%%", sep).replace("%%content_files%%", content_files).replace("%%content_subdirs%%", content_subdirs)
    
    f = open("index.html", "w")
    f.write(html)
    f.close()
  
def upload_index_file(ftp):
    file = open("index.html", 'rb')
    ftp.storbinary('STOR index.html', file)
    file.close()
    
def create_folder_index(path, ftp, recursive):
    print "Entering folder " + ftp_dir + path
    ftp.cwd(ftp_dir + path)

    print "Listing folder " + ftp_dir + path
    subdirs, files = get_folder_content(ftp)
    print "Creating index for folder " + ftp_dir + path
    create_index_file(ftp_dir + path, subdirs, files)
    print "Uploading index for folder " + ftp_dir + path
    upload_index_file(ftp)
    
    if recursive:
        for dir in subdirs:
            create_folder_index(path + dir[0] + "/", ftp, recursive)

def create_index():
    recursive = False
    if len(sys.argv) < 2:
        print "Please enter password as parameter"
        return
    
    if len(sys.argv) > 2 and sys.argv[2] == "-r":
        recursive = True            
        if len(sys.argv) > 3:
            ftp_dir = sys.argv[3]
    elif len(sys.argv) > 2:
        ftp_dir = sys.argv[2]
    
    print "Connecting to server ..."
    ftp = ftplib.FTP('ftp.ddbits.com','xcsoar@ddbits.com',sys.argv[1]) # Connect
    
    create_folder_index('/', ftp, recursive)
    
    ftp.quit()
    
create_index()