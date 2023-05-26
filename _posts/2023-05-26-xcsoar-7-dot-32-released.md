---
title: "XCSoar 7.32 released"
created_at: 2023-05-26 07:42:49 +0200
author: folken
layout: post
---
Version 7.32 - 2023/05/25
* user interface
  - fix horizon roll, show bank angles greater than 90°
  - fix horizon pitch, show sky instead of ground when pitch is greater than 50°
  - improve font scaling in the vario gauge
  - support hot keys, gestures and double click on Horizon page
* map display
  - draw the trail even if there is no GPS fix
  - keep showing disappeared FLARM traffic for some time
* data files
  - support waypoints without elevation data
* devices
  - IMI: fix crash when there are more than 128 recorded flights
  - FLARM: parse AircraftType hex values correctly in PFLAA
* Linux
  - Wayland XDG_WM_BASE support
  - Wayland keyboard support
* Android
  - don't disable IOIO completely if Bluetooth permission was not granted
  - fix crash with initial IOIO connection
  - fix lockup with IOIO Accessory connection
