---
title: "XCSoar 7.45 released"
created_at: 2026-08-15 17:08:00 +0200
author: folken
layout: post
---

XCSoar 7.45 is out.

This is a large release, with new weather overlays, live NOTAMs, better tools
for moving data and flight logs, improved Condor 3 support, multi-touch map
controls, and OpenGL builds for Windows.

## Downloads

- [XCSoar 7.45 downloads]({{ site.download_server_url }}/7.45/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.45)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45/NEWS.txt)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45/XCSoar-WIN32OPENGL.zip)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }})
  or [F-Droid]({{ site.download_fdroid_url }})
- iOS: [App Store]({{ site.download_app_store_url }})
- Linux: [Unix builds]({{ site.download_server_url }}/7.45/UNIX/)

Updates in the app stores may take a little longer to appear.

## Weather

[SkySight](https://skysight.io), [EDL](https://www.edl-soaring.com/), and
[XC Therm](https://xctherm.com) can now be shown directly on map pages.

They use the same basic controls as RASP: choose a layer and forecast time for
each page, then adjust them from the cursor bar at the bottom of the map.
Forecasts can update automatically, and selected forecast data can be
downloaded before a flight.

RASP now supports contour lines, transparency, a colour scale, and values at
the cursor. [flugwetter.de](https://www.flugwetter.de) has additional radar and
lightning images.

On Windows, these overlays require one of the new OpenGL builds.

## NOTAMs

XCSoar can download NOTAMs and display them with the other airspaces on the map.
Downloads are cached and refreshed in the background.

Filters are available for time, distance, IFR-only NOTAMs, and Q-codes. Tapping
a NOTAM airspace opens its text.

NOTAM support is disabled by default. It is intended as an additional source of
situational awareness and does not replace a proper pre-flight briefing.

## Data Management

The new Data Management screen brings together Site Files, the Download
Manager, flight export, data import, backups, and a file explorer.

You can:

- import waypoints, airspaces, terrain, profiles, and other files from a USB
  stick or folder;
- export IGC and NMEA flight logs to external storage;
- upload selected IGC files to WeGlide;
- create and restore dated backups of your settings and site files;
- copy, move, rename, and delete files.

Backups leave out logs, other backup archives, and cached downloads. XCSoar
must be restarted after restoring one.

XCSoar now keeps files in folders according to their type. Existing files are
moved on the first start after upgrading where possible.

## Map and flight calculations

Android and iOS now support pinch-to-zoom, two-finger panning, and map rotation.

Other map changes include distance rings, larger map text, more visible
waypoints, a smoother snail trail, and an optional turn-back marker showing how
far along track the active waypoint can still be reached.

The glide polar now accounts for air density at altitude. This affects
speed-to-fly, task and final-glide calculations, netto vario, and the
speed-to-fly arrows.

Alternates can follow XCSoar's calculated list or be selected manually. Up to
ten alternatives are shown, with airfields listed before outlanding sites.

OGN and SkyLines traffic now use the same map and radar display as FLARM
traffic.

## Condor 3 and devices

Support for the [Condor 3](https://www.condorsoaring.com/) simulator has been
improved with two new drivers.

The UDP telemetry driver receives airspeed, altitude, vario, AHRS and gyro
data, G-load, MacCready, water ballast, and radio frequency.

The Spectate driver reads Condor's `Spectate.json` file and shows multiplayer
traffic on the map and FLARM radar.

Other device changes include GDL 90 ADS-B input, an LX Navigation LX160 driver,
LX Eos declaration and logger support, additional BlueFly functions,
`$LK8EX1` support on every port, and eight device slots.

## User interface

This release includes a broad set of touch, keyboard, and e-paper fixes. Lists
and configuration dialogs are easier to navigate without a touchscreen,
waypoint searches stay open while viewing details, and long translated text
wraps correctly.

The Quick Guide, checklists, Credits, and configuration pages can be changed
with a horizontal swipe. E-paper scrolling now avoids unnecessary animation,
and several InfoBox, focus, layout, and dialog crashes have been fixed.

## Platforms

Windows users should now use the OpenGL builds. They use the same accelerated
graphics path as Android, Linux, and macOS and support features such as
transparent weather and airspace overlays.

Installers and portable zip files are available for both 64-bit and 32-bit
Windows. The old PC and WIN64 single-file binaries are deprecated and will be
removed in a later release.

Linux, OpenVario, and Kobo now have WiFi configuration under
**Config → Setup → Network**.

Kobo starts in light mode because dark mode is not suitable for its e-paper
display.

On iOS, the audio vario can play through the speaker and the built-in GPS
continues reporting while stationary. A macOS rendering problem with thick
lines has also been fixed.

## Thanks

[Uwe Augustin](https://github.com/August2111) began the SkySight work in
OpenSoar. [Stefan Schumann](https://github.com/Scumi), with
[Caz Yokoyama](https://github.com/Caztech), ported it to XCSoar and developed
much of its map and forecast integration.
[Matthew Scutter](https://github.com/Plantain) helped with the SkySight API and
caching.

[Benjamin Girard](https://github.com/Eldalie) added EDL.
[Philip Heinrich](https://github.com/cumulophib) developed the XC Therm
integration, including its in-flight cursor controls.

[Simon GH](https://github.com/groundhogxc) worked on RASP rendering and brought
the OpenGL graphics backend, packaging, and installer to Windows.
[Yorick Reum](https://github.com/yorickreum) developed the NOTAM support and
contributed substantial iOS and macOS work.

Stefan Schumann also developed Data Management, the Linux/OpenVario/Kobo
network panel, and the internal speed-to-fly audio vario.

[Bapt A.](https://github.com/B-apt), [Joe Capra](https://github.com/joecapra),
and [Eric Carden](https://github.com/ericcarden) worked on alternates and
waypoint InfoBoxes. [Dominic Spreitz](https://github.com/dspreitz) added the
density-scaled polar. [Davis Chappins](https://github.com/DavisChappins) and
[Wolfgang Drescher](https://github.com/WolfgangDrescher) developed the
turn-back marker and distance rings.

Thanks also to [Rik Vanden Boer](https://github.com/rikvdb229),
[Jiri Maier](https://github.com/jirimaier),
[Christian Grøvdal](https://github.com/chrgro),
[Linar Yusupov](https://github.com/lyusupov),
[Igor Nazarenko](https://github.com/inazarenko),
[Josef Klein](https://github.com/fraktal-sb),
[Helmut J. Rohs](https://github.com/hjr), Thomas Maier,
[Chris Woolley](https://github.com/cjwoolley),
[Roland Niederhagen](https://github.com/bomilkar),
[Mirek Burdych](https://github.com/Sundown3867), si.gr,
[DanD222](https://github.com/DanD222), [bennsch](https://github.com/bennsch),
and everyone who tested 7.45 and reported problems.

— [Philipp Wollschlegel](https://github.com/lordfolken)
