---
title: "XCSoar 7.44 released"
created_at: 2026-03-22 12:00:00 +0100
author: folken
layout: post
---

XCSoar 7.44 is available.

This release reflects two years of development, with major usability
upgrades, broad modernization, and a long list of bug fixes across platforms.

## Download links

- [Release directory (7.44)]({{ site.download_server_url }}/7.44/)
- [GitHub release v7.44](https://github.com/XCSoar/XCSoar/releases/tag/v7.44)
- [Full changelog (NEWS.txt on GitHub, v7.44)](https://github.com/XCSoar/XCSoar/blob/v7.44/NEWS.txt)
- Android (Google Play): [org.xcsoar.play]({{ site.download_play_store_url }})
- Android (F-Droid): [org.xcsoar]({{ site.download_fdroid_url }})
- iOS (App Store): [XCSoar]({{ site.download_app_store_url }})
- Windows (WIN64): [XCSoar 7.44 for Windows (64 bit)]({{ site.download_server_url }}/7.44/WIN64/)
- Unix / Linux: [XCSoar 7.44 on Unix / Linux]({{ site.download_server_url }}/7.44/UNIX/)

## Major contributors

Selected examples of major contributions in this release:
- Stefan Schumann (Scumi): FLARM and PowerFLARM management/traffic improvements,
  FLARM messaging database integration, and many UI and device updates
- Yorick Reum: responsible for the iOS port, plus major Apple-platform work
  (iOS/macOS packaging, signing, CI/TestFlight, and platform support updates)
- kobedegeest: LXNAV Nano download robustness improvements and multiple
  in-flight UI/InfoBox interaction refinements
- Andres Totorica: PEV timing improvements and workflow updates around
  contest/task handling and Android bundle builds
- Uwe Augustin (August2111): wide-ranging UTF-8 and string-handling
  modernization (TCHAR/UNICODE cleanup and related platform updates)
- Wolfgang Drescher: onboarding dialogs and first-use guidance improvements
- Andreas Lüthi: waypoint details image panning/key controls and FLARM gauge
  behavior improvements
- Roland Niederhagen (bomilkar): new circling wind algorithm
- Miroslav Burdych (Sundown3867): iconography refresh, icon streamlining,
  and visual polish updates
- Driver contributions: Jiri Maier (LX Eos/Era driver and download/declaration
  support), Josef Klein (Stratux driver and follow-up work), kobedegeest
  (LXNAV Nano download robustness), Simsys (Larus protocol 0.1.4), and
  Chris Woolley (flight list ordering improvements)
- Special thanks to Urban Mäder of [FLARM](https://flarm.com/) for a loaner
  device, and to Uroš of [LXNAV](https://lxnav.com/) for sharing protocol
  documentation.

Thanks also to all other contributors to XCSoar 7.44: Alex Collignon,
Ballfire, Benjamin Girard, bennsch, Caz Yokoyama, Cedric Guenther, DanD222,
Davis Chappins, drflyby, Eric Carden, Frederik Junker, groundhogxc,
Helmut J. Rohs, Jaap Keuter, Jan Liska, Jetsada Machom, Joerg Schuon,
Lasse Edslev, Linar Yusupov, Moritz Finke, Simon GH, Silverio Santos,
Tobias Bieniek, Tobias Schulte, and Vesko.

### UI overhaul

- Major refresh of menus and dialogs for faster, clearer in-flight use
- Onboarding dialogs now guide first-time setup and key permissions
- Revamped Quick Menu plus a new onboarding/quick-guide flow
- Gesture Help window with an in-app gesture reference
- Improved touch handling with better tap-vs-drag detection and smoother
  scrolling
- Better InfoBox and radar/thermal assistant placement to reduce map overlap
- InfoBoxes are now tabbable for quicker in-flight access
- Richer dialogs with integrated help, Markdown text, and clickable links
- Checklists now support Markdown (including links and checkboxes); see the
  [online guide](https://xcsoar.readthedocs.io/en/latest/checklist.html)
- Smart checklist links support `tel:`, `sms:`, `mailto:`, `geo:`, and web
  links
- More logical keyboard layout and navigation flow
- Dark mode across core screens and widgets

### Input and quick actions

- Ballast dump can now be triggered directly via input event
- Default task-related keyboard bindings were reworked, including
  improved Pilot Event access (F9)
- Input events documentation:
  [xcsoar.readthedocs.io/en/latest/input_events.html](https://xcsoar.readthedocs.io/en/latest/input_events.html)

### Android

- Android edge-to-edge support and related UI handling improvements
- Android SDK 35 compatibility updates
- Rotation suggestion marker/button for easier landscape/portrait switching
- Rotation fixes, including black-screen and projection issues

### FLARM

- Expanded configuration management for [FLARM](https://flarm.com/) and
  PowerFLARM devices
- Improved [FLARM](https://flarm.com/) traffic details with clearer
  source/context information
- PFLAM protocol support (FLARM message database), including
  pilot, registration, callsign, aircraft type, and frequency data
- [FLARM](https://flarm.com/) error messages are now parsed and shown
- Improved task declaration handling, including fixes for FLARM
  declarations via connected variometer pass-through

### New drivers

- [Condor 3](https://www.condorsoaring.com/)
- [Löfgren variometer](https://lofgren-electronics.fr/)
- [LX Navigation](https://www.lxnavigation.com/) Eos/Era variometers
- [Stratux](https://github.com/stratux/stratux)
- [Larus](https://www.larus.com/) protocol update to version 0.1.4
- [OpenVario](https://www.openvario.org/) protocol extended for onboard IMU
  gyroscope/acceleration data
- [AIR Control Display](https://www.air-avionics.com/comm-and-transponders/)
  driver upgrades, including radio frequency exchange and transponder mode
  integration

### [LXNAV](https://lxnav.com/)

Major LXNAV integration overhaul and protocol 1.05 support

- Better synchronization of plane data, weight-related settings, and polar
  data with supported variometers (V7/S-series)
- Improved task declaration handling, including AAT/MAT minimum task time
  (TaskTime)
- Improved flight download handling, including LXNAV Nano devices
- Radio and transponder support via LXNAV data exchange integration
- Automatic plane profile matching and creation from device-provided glider
  identification data

### Contests

- Contest scoring updates to current rulesets, including full DMSt scoring
  support and WeGlide scoring fixes
- PEV start timing now has second-level accuracy

### [WeGlide](https://www.weglide.org/)

- Corrected WeGlide scoring formulas
- Direct IGC upload action from the configuration menu
- Daily competition task panel and recent task scores view

### Data and reliability

- New terrain ramps, including options for very flat regions
- CUPX file format support, including embedded images (definition:
  [Naviter SeeYou file formats](https://github.com/naviter/seeyou_file_formats))
- Landing field data source:
  [landewiesen.streckenflug.at](https://landewiesen.streckenflug.at/)
- OpenAir 2.0 support, including station names and squawk code handling
  (definition:
  [OpenAir specification reference](https://pyopenair.readthedocs.io/en/master/openair.html))
- Waypoint editor fixes now prevent lost altitude/type edits
- Removed old waypoint editor text truncation limits
- Home waypoint reliability fix on restart (terrain-load timing issue)
- CUP writer update to Naviter 2022 spec to reduce data loss when saving
  waypoint details and attachments

### New wind algorithm

- New circling wind algorithm for better quality and accuracy
- Better handling of sub-second GPS updates during circling analysis

### Calculations and InfoBoxes

- Improved ballast handling: now stored in liters for better device sync and
  corrected dump-rate calculation
- Many new glider polars plus updates to existing polar data
- New InfoBoxes: Home AltD, Alternate 1 AltD, Alternate 2 AltD,
  V task leg, and headwind component

And there is a lot more already in the pipeline for upcoming releases.

-- Philipp Wollschlegel (aka LordFolken), 22 March 2026, on behalf of the XCSoar Team
