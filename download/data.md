---
layout: download
color: green
title: Download - Data
menu: download
---

## Adding data automatically

XCSoar can download the data you need (terrain/topography, airspace, waypoint, etc.). For this, please, use the file manager embedded in XCSoar.

## Adding data manually

Additional data, such as your own list of waypoints, can be added manually:
- Copy your files into the XCSoarData folder on your SD card
  or a corresponding folder according to the [Manual]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual.pdf)
- Use the config menu of XCSoar to load them.

### Terrain / Topography

A map file (.xcm) contains terrain and topography. In some cases it might also contain waypoint and airspace files.

- [Download Maps](/download/maps/)
- Use the [Map Generator]({{ site.mapgen_url }}) to create your own maps
{% if site.mapgen_mirror_url %}
  ([mirror]({{ site.mapgen_mirror_url }}))
{% endif %}

### Airspaces

An airspace file contains special use airspace information and coordinates.

XCSoar supports the Tim Newport-Pearce (.sua) and OpenAir (.txt) file formats.

- [Download Airspace from Soaringweb](http://soaringweb.org/Airspace/)

### Waypoints

A waypoint file contains waypoints, airports and outlanding fields of a certain area.

XCSoar currently supports these formats:
Cambridge/WinPilot (.dat), SeeYou (.cup), Zander (.wpz), OziExplorer (.wpt) and FS/GpsDump (.wpt)

- [Download Waypoints](/download/waypoints/)
- [Download Waypoints from Soaringweb](http://soaringweb.org/TP/)

### Waypoint Details

A waypoint details file (.txt) contains detailed information about the loaded waypoints, that is available on a separate page of the Waypoint Details dialog. It should have the following format:

	[WAYPOINT_NAME_1]
	Detailed Text 1
	Detailed Text 2
	...
	[WAYPOINT_NAME_2]
	Detailed Text 1
	Detailed Text 2
	...

### FlarmNet

XCSoar can use the FlarmNet database to show the callsigns and additional information of FLARM equipped planes around you. Save the file into the XCSoarData directory.

- [Download FlarmNet database](https://www.flarmnet.org/static/files/wfn/data.fln)

### Checklist

XCSoar can have custom checklists. Download our example and edit with a text editor. Save your file into XCSoarData directory.

- [Download example checklist](/download/data/xcsoar-checklist.txt)
