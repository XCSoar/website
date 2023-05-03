---
title: "XCSoar 7.29 released"
created_at: 2023-05-03 17:26:42 +0200
author: folken
layout: post
---
Version 7.29 - 2023/05/03
* data files
  - reject implausible runway lengths in CUP files
  - fix crash when arc airspace has no center
  - allow xci files to be downloaded from repository
  - in OpenAir format use AC as Class and AY as Type (#1118)
  - show correct line number on airspace file error
  - add RASP file selection
* devices
  - ATR833: read-out active and standby frequencies
  - AirControlDisplay: Set and readout of transponder code
  - AirControlDisplay: forward gps data to device
* Android
  - get rid of not usable USB interfaces in the 'Device -> Port' list
  - Upgrade targetSdkVersion to 31
  - fix write errors to Bluetooth HM10 devices
* Kobo
  - Add support for Libra H2O
  - Add support for Clara 2E
  - fix truncate wifi list if hidden ssid detected
  - Reboot without -f (force)
  - Fix OTG mode for newer models
  - Add an E-ink friendly trail type
  - Add Brightness control to Clara HD
  - Support Brightness and Colour for ComfortLight PRO models
* Windows
  - show serial port names
* Polars
  - Add LS-5 polar
  - Add Silene E78 polar
  - Add Std Austria S polar
  - updated handicap factors for 2023
* fix exchange frequencies crash when no frequency was set
* user interface
  - show FLARMGauge only when traffic is within 4Km
  - redesigned waypoint type icons
  - align labels in forms on the left side
  - increased precision in polar edit dialogue
  - extend QuickMenu to maximum of 64 entries
  - add PEV,FlarmTraffic,FileManager to joystick QuickMenu
  - add transponder code infobox
  - Pan mode fully keyboard / joystick operatable
  - Pan mode use buttons for zoom and what's here
  - Slight increase in touch selection on map
