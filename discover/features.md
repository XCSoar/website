---
layout: discover
color: blue
title: Features
menu: discover
---
## Overview

- [Features](#features) &darr;
- [Supported platforms](#supported_platforms) &darr;
- [Supported data files](#supported_data_files) &darr;
- [Supported devices](#supported_devices) &darr;

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

- Android Smartphones and Tablets
  *(min. Android 1.6)*
- Computer
  *(Windows or Unix)*
- Windows CE (obsolete, will be removed soon)

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

The usual format is the XCM map. [Pregenerated maps](/download/maps/) can be downloaded from our website or generated specifically for your needs by our [Map Generator]({{ site.mapgen_url }}).

### Tasks

- XCSoar TSK files
- SeeYou CUP files

SeeYou CUP files are read-only so far but the tasks can be converted and saved to our TSK format.

### FlarmNet

- FlarmNet data.FLN file

When connected to a Flarm, XCSoar is able to show the call signs and additional data that is saved inside the [FlarmNet](http://www.flarmnet.org) database.

## Supported devices

**XCSoar** supports all devices that send GPS data on a serial port or via Bluetooth.
Devices with additional abilities which are supported by **XCSoar {{ site.xcsoar_stable_version }}** are listed here:

- [Altair](#altair) &darr;
- [Borgelt B50](#borgelt_b50) &darr;
- [CAI 302](#cai_302) &darr;
- [Condor Simulator](#condor_simulator) &darr;
- [Digifly Leonardo](#digifly_leonardo) &darr;
- [EW](#ew) &darr;
- [EW MicroRecorder](#ew_microrecorder) &darr;
- [FLARM](#flarm) &darr;
- [Flymaster F1](#flymaster_f1) &darr;
- [Flytec](#flytec) &darr;
- [ILEC](#ilec) &darr;
- [IMI ERIXX](#imi_erixx) &darr;
- [LX Devices](#lx_devices) &darr;
- [PosiGraph](#posigraph) &darr;
- [Vega](#vega) &darr;
- [Volkslogger](#volkslogger) &darr;
- [Westerboer](#westerboer) &darr;
- [Zander](#zander) &darr;

### Altair

- Barometric Altitude
- Task declaration

### Borgelt B50

- Vario, Airspeed, Temperature
- MC/Bugs/Ballast to XCSoar

### CAI 302

- Barometric Altitude
- Vario, Airspeed, Wind, ENL, QNH
- MC/Bugs/Ballast to and from XCSoar
- Task declaration

### Condor Simulator

- Barometric Altitude
- Vario, Airspeed, Wind

### Digifly Leonardo

- Barometric Altitude
- Vario, Airspeed, Wind, Temperature

### EW

- Task declaration

### EW MicroRecorder

- Barometric Altitude
- Task declaration

### FLARM

- Barometric Altitude
- Traffic data
- Task declaration

### Flymaster F1

- Barometric Altitude
- Vario

### Flytec

- Barometric Altitude
- Vario, Airspeed, Temperature

### ILEC

- Barometric Altitude
- Vario, Wind

### IMI ERIXX

*This device will be supported by XCSoar 6.2 and above*

- Barometric Altitude
- Task declaration

### LX Devices

*DX50, LX5000, LX7000, Colibri, ...*

- Barometric Altitude
- Vario, Airspeed, Wind
- MC/Bugs/Ballast to XCSoar
- Task declaration

### PosiGraph

- Barometric Altitude
- Task declaration
  *for task declarations choose LX as device type!*

### Vega

- Barometric Altitude
- Vario, Airspeed, Temperature
- Acceleration, Humidity
- External switches

### Volkslogger

- Barometric Altitude
- Task declaration

### Westerboer

- Barometric Altitude
- Vario, Airspeed, Temperature
- MC to and from XCSoar
- Battery voltage

### Zander

- Barometric Altitude
- Vario, Airspeed, Wind
- MC to XCSoar
