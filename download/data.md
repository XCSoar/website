---
layout: download
color: green
title: Download - Data
menu: download
---

XCSoar works best if you provide it with some data files.
Supported are [Map](#terrain__topography), [Airspace](#airspaces) and 
[Waypoint](#waypoints) files, as well as the [FlarmNet database](#flarmnet) 
and a custom [Waypoint Details](#waypoint_details)  file. 

- Please download the data files suitable to your area 
- Copy them into the XCSoarData folder on your SD card  
  or a corresponding folder according to the [Manual]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual.pdf)

## Terrain / Topography 

A map file (.xcm) contains terrain and topography. In some cases it might also contain waypoint and airspace files. 

- [Download Maps](/download/maps/)
- Use the [Map Generator](http://mapgen.xcsoar.org/) to create your own maps

## Airspaces

An airspace file contains special use airspace information and coordinates. 

XCSoar supports the Tim Newport-Pearce (.sua) and OpenAir (.txt) file formats.

- [Download Airspace from Soaringweb](http://soaringweb.org/Airspace/)
- [Austrian Airspace](https://www.austrocontrol.at/en/atm/aim_services/aim_products/airspace_structure)
- [Dutch Airspace](http://www.gliderpilotshop.nl/winkel/product_info.php?cPath=110_96&products_id=428)
- [French Airspace](http://www.ffvvespaceaerien.org/?page_id=412)
- [German Airspace](http://www.daec.de/fachbereiche/luftraum-flugbetrieb/luftraumdaten/)
- [US Airspace](http://www.soaringdata.info/)

## Waypoints

A waypoint file contains waypoints, airports and outlanding fields of a certain area. 

XCSoar currently supports these formats: 
Cambridge/WinPilot (.dat), SeeYou (.cup), Zander (.wpz), OziExplorer (.wpt) and FS/GpsDump (.wpt)

- [Download Waypoints](/download/waypoints/)  
  *<small>(The waypoint database is adapted from the
  <a target="_blank" href="http://www.segelflug.de/vereine/welt2000/">WELT2000 
  database</a> which is made available under
  <a target="_blank" href="http://opendatacommons.org/licenses/odbl/1.0/">Open
  Database Licence</a>. Please
  <a target="_blank" href="http://www.segelflug.de/vereine/welt2000/">contribute
  to the WELT2000 project</a>!)</small>*
- [Download Waypoints from Soaringweb](http://soaringweb.org/TP/)

## Waypoint Details

A waypoint details file (.txt) contains detailed information about the loaded waypoints, that is available on a seperate page of the Waypoint Details dialog. It should have the following format:

	[WAYPOINT_NAME_1]
	Detailed Text 1
	Detailed Text 2
	...
	[WAYPOINT_NAME_2]
	Detailed Text 1
	Detailed Text 2
	...

## FlarmNet

XCSoar can use the FlarmNet database to show the callsigns and additional information of FLARM equipped planes around you. Save the file into the XCSoarData directory.

- [Download FlarmNet database](http://www.flarmnet.org/files/data.fln) 

## Checklist

XCSoar can have custom checklists. Download our example and edit with a text editor. Save your file into XCSoarData direcotry.

- [Download example checklist](/download/data/xcsoar-checklist.txt)
