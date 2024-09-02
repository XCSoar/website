---
title: "XCSoar 7.43 released"
created_at: 2023-09-02 00:49:56 +0200
author: folken
layout: post
---

Please note that there are several CRICITAL issues addressed in this release. Please up-/sidegrade.

Android users: Due to new cryptographic signatures, you will need to uninstall and
remove all data. Install either from F-Droid or via APK File download.
Please also note that the Storage Directory has moved to /android/media/org.xcsoar. This directory
is accessible with normal file manager tools on android.

Version 7.43 - 2024-08-12
* calculations
  - CRITICAL: reachable map labels show correct altitude with head wind #1424
  - CRITICAL: fix reachability calculation with older compilers (OpenVario,..)
* airspace
  - add classes according the OpenAir extended format AY tag
  - coloring is done according to the AC tag, or if present and allowed, according to the AY tag
* data files
  - new topology available from mapgen (including airport runways and rivers)
  - fix loss of "home" waypoint designation in certain situations for a
    non-airport home waypoint
  - reworked sgs-233 polar
* documentation
  - clarify task speed calculation section
  - lua reference updated
* ui
  - Airspace filter list can filter by type
  - TC 30s Infobox shows now climb rate since start of thermal
  - TL Gain Infobox shows now the overall climb rate of last thermal
  - add new Infobox V Task Est (Speed task estimated)
  - Status-Task panel: "Estimated task time", "Remaining time", and "Speed
    estimated" now blank if MC>0 & can't finish task
  - Status-Task panel: "Remaining time", "Remaining distance", "Speed
    estimated", and "Speed remaining" now blank after task is finished
  - add missing airspace to Select Airspace filter
  - NumberEntry dialog value can now be accepted by enter
  - Vario center gross label
  - Vario use AutoFonts for lables and values
  - Replace eventOrientation by two new events: eventOrientationCruise and eventOrientationCircling
  - New artificial horizon
  - Flarm gauge fix radar size
  - infobox management page rename buttons for copying sets
  - consistent naming of ok/close buttons and placement
  - add PanTo button to waypoints dialog if opened from task related infoboxen
  - always show black plane icon in thermal assistant
* Lua scripting
  - allow HTTPs client connections by setting project-wide Curl options
  - fix next_eta and final_eta variables
* Devices
  - add Larus driver
* Android
  - CRITICAL: use user accessible android/media/org.xcsoar as data directory
  - EGL graphics driver initialzation improvment for old android versions
  - add SoftRF Eco, Ink and Card into 'white list' of USB devices
  - fix rotation on wake from background
* Kobo
  - fix Wifi configuration
  - fix oversized icons
* Windows
  - use cleartype font rendering
  - highres application icon
  - black text color in airspace list like all other systems
