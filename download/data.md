---
layout: download
color: green
title: Download - Data
menu: download
---

XCSoar can download the data you need (terrain/topography, airspace, waypoint, etc.). For this, please, use the file manager embedded in XCSoar.

## Adding additionnal data

Additionnal data, such as your own list of waypoints, can be added manually:
- Copy your files into the XCSoarData folder on your SD card  
  or a corresponding folder according to the [Manual]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual.pdf)
- Use the config menu of XCSoar to load them.

The supported format are:
- for terrain / topography:  an .xcm file (in some cases it might also contain waypoint and airspace files).
- for airspace: a Tim Newport-Pearce (.sua) or an OpenAir (.txt) file formats.
- for waypoints (actually waypoints, airports and outlanding fields):  Cambridge/WinPilot (.dat), SeeYou (.cup), Zander (.wpz), OziExplorer (.wpt) and FS/GpsDump (.wpt).
- for waypoint details: a .txt file (containing the detailed information about the loaded waypoints, that is available on a separate page of the Waypoint Details dialog). It should have the following format:

		[WAYPOINT_NAME_1]
		Detailed Text 1
		Detailed Text 2
		...
		[WAYPOINT_NAME_2]
		Detailed Text 1
		Detailed Text 2
		...
- for FlarmNet database: a FlarmNet database (.fln) file format.
- for custom checklists: a .txt file ([example of checklist](/download/data/xcsoar-checklist.txt)).
