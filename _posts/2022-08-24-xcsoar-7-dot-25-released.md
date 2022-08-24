---
title: "XCSoar 7.25 released"
created_at: 2022-08-24 21:50:05 +0200
author: folken
layout: post
---

Version 7.25 - 2022/08/24
* stricter airspace parser
* user interface
  - add radio frequency buttons to airspace dialogs
  - fix the airspace warning "Enable" button
  - fix thermalmap.info icon display
  - show thermalmap.info thermals in the map item list dialog
* devices
  - IMI: fix task declaration bug
* Android
  - prompt before deleting data when uninstalling XCSoar
  - support USB serial adapters with more than one port
  - support multiple USB serial adapters of the same kind
  - auto-start XCSoar when USB serial adapter gets connected
  - fix crash when GPS access was rejected by user
  - fix deadlock while quitting XCSoar
  - add U-BLOX 7 USB GPS into 'white list' of USB devices
* Kobo
  - display XCSoarData/kobo/poweroff.txt at the bottom
  - fix crash in waypoint dialog
