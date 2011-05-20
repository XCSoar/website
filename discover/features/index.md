---
layout: post
color: blue
title: Features
menu: discover
---
## Overview

- [Features](#features) &darr;
- [Supported platforms](#supported_platforms) &darr;
- [Supported data files](#supported_data_files) &darr;

## Features

### Moving map

- Terrain *(mountains can be shadowed by wind or sun direction)*
- Terrain impact line *(reach calculation even around mountains)*
- Topography *(cities, rivers, major roads and railways)*
- Airspace  
- Airports and outlanding fields  *(including arrival height)*
- Turnpoints
- Task *(start, turnpoint, end sectors and lines, course line, best track line)*
- Flight trail *(indicating climb/sink values or altitude)*

### Infoboxes

- Altitudes *(GPS, baro, ground, FL, barogram)*
- Thermals *(current, netto, average, whole thermal, whole day, gain, diagrams)*
- MacCready *(MC setting, MC speed)*
- Navigation *(bearing, distance, arrival altitude, time to go)*
- Task *(AAT min/max distance, time, delta time, OLC distance and points)*
- Weather *(wind, temperature, humidity)*
- Safety *(best landing options)*
- many more...

### FLARM radar

- Butterfly-like radar screen
- Averaged climb rates for all FLARM targets
- FlarmNet details available on a separate page
- User defined call sign assignment (independent of FlarmNet)
- Team mate mode

### Thermal Assistant

- Cenfis-like thermal centering aid

### Analysis dialog

- Barogram
- Climb history
- Thermal band
- Polar
- Task overview and progress
- OLC optimization
- Airspace/Terrain side view

## Supported platforms

- PDAs, PNAs and Windows Smartphones  
  *(PocketPC 2000 until Windows Mobile 6)*
- Android Smartphones and Tablets  
  *(min. Android 1.6)*
- Computer  
  *(Windows or Unix)*
- Altair
- LX Minimap
- Naviter Oudie

## Supported data files

### Waypoints

- Winpilot/Cambridge DAT files
- Zander WPZ files
- SeeYou CUP files
- OziExplorer WPT files
- GPSDump/FS WPT files (GEO and UTM)

When using SeeYou files the runway directions of the airfields are displayed on the map.

### Airspace

- OpenAir TXT files
- Tim Newport-Pearce SUA files

In addition to the OpenAir standard the AR command is recognized as the airspace radio frequency.

### Terrain and Topography

- XCSoar XCM map files (including Terrain and Topography)
- JPEG2000 JP2 files + J2W world file (terrain)
- ShapeFiles (topography)

The usual format is the XCM map. Maps can be downloaded from our website ([http://www.xcsoar.org/download/maps/](/download/maps/)) or generated specifically for your needs by our map generator (<http://mapgen.xcsoar.org/>).

### Tasks

- XCSoar TSK files
- SeeYou CUP files

SeeYou CUP files are read-only so far but the tasks can be converted and saved to our TSK format.

### FlarmNet

- FlarmNet data.FLN file

When connected to a Flarm, XCSoar is able to show the call signs and additional data that is saved inside the FlarmNet database (<http://www.flarmnet.org>).
