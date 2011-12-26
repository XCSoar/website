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
  or a corresponding folder according to the [Manual](http://max.kellermann.name/download/xcsoar/releases/{{ site.xcsoar_stable_version }}/XCSoar-manual.pdf)

## Terrain / Topography 

A map file (.xcm) contains terrain and topography. In some cases it might also contain waypoint and airspace files. 

- [Download Maps](/download/maps/)
- Use the [Map Generator](http://mapgen.xcsoar.org/) to create your own maps

## Airspaces

An airspace file contains special use airspace information and coordinates. 

XCSoar supports the Tim Newport-Pearce (.sua) and OpenAir (.txt) file formats.

- [Download Airspace from Soaringweb](http://soaringweb.org/Airspace/)
- [Austrian Airspace](http://www.austrocontrol.at/en/content/atm/AIS/Products/kml/kml.shtml)
- [German Airspace](http://www.daec.de/aul/luftr_d.php)

## Waypoints

A waypoint file contains waypoints, airports and outlanding fields of a certain area. 

XCSoar currently supports these formats: 
Cambridge/WinPilot (.dat), SeeYou (.cup), Zander (.wpz), OziExplorer (.wpt) and FS/GpsDump (.wpt)

- [Download Waypoints](/download/waypoints/)  
  *(imported from the Welt2000 project)*
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
