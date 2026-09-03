---
title: "XCSoar 7.45.1 released"
created_at: 2026-08-28 09:14:00 +0200
author: folken
layout: post
---

XCSoar 7.45.1 is out.

This is a maintenance release on the 7.45 line. It adds a few small
features and fixes crashes, weather overlays, map drawing, glide
calculations, and device support reported after 7.45.

## Downloads

- [XCSoar 7.45.1 downloads]({{ site.download_server_url }}/7.45.1/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.45.1)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.1/NEWS.txt)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.1/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.1/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.1/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.1/XCSoar-WIN32OPENGL.zip)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }})
  or [F-Droid]({{ site.download_fdroid_url }})
- iOS: [App Store]({{ site.download_app_store_url }})
- Linux: [Unix builds]({{ site.download_server_url }}/7.45.1/UNIX/)

Updates in the app stores may take a little longer to appear.

## Highlights

Linux can now control the systemd service and display brightness from
XCSoar. macOS has a standard application menu. Display type, text size,
resolution, and rotation have moved onto their own Display page, separate
from Layout.

## Fixes

Android no longer crashes when leaving the app, or when restarting it
immediately afterwards.

iOS uses the system keyboard (with a Paste button) and the system font,
saves settings when the app moves to the background, and restores other
apps' audio after XCSoar plays a sound. Full-screen dialogs no longer
leave a thin white frame at the display edge.

USB HID remotes such as SteFly keep working on OpenVario after the stick
re-enumerates. Condor 3 UDP now follows ground track in a crosswind
instead of heading. LXNAV polar sync no longer zeros the vario polar
when crew or empty mass are sent before the device polar is known.

SkySight overlay times use UTC, and stepping weather layers no longer
re-downloads forecast metadata in a way that could hit the API rate
limit. Map labels no longer show a ragged white halo on high-DPI
screens, and the live snail trail keeps circling detail as the map
follows the aircraft.

Density scaling no longer inflates MacCready, so best-glide and
speed-to-fly at altitude stay correct. Circling wind works again on
paragliders and other aircraft without airspeed or a gyroscope. ADS-B
ground speed no longer wraps above 457 km/h, and no-position FLARM
targets show on the radar and map.

See the [full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.1/NEWS.txt)
for the complete list.

— [Philipp Wollschlegel](https://github.com/lordfolken)
