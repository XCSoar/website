---
title: "XCSoar 7.46 released"
created_at: 2026-10-19 01:30:00 +0200
author: folken
layout: post
---

XCSoar 7.46 is out.

This is a large release, with tasks shareable via QR code, free European rain
radar and satellite pictures, improved airspace warning handling, spoken
FLARM alarms, and InfoBoxes that can be rearranged by dragging.

## Downloads

- [XCSoar 7.46 downloads]({{ site.download_server_url }}/7.46/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.46)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.46/NEWS.txt)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }}),
  [F-Droid]({{ site.download_fdroid_url }}),
  or [APK]({{ site.download_server_url }}/7.46/ANDROID/XCSoar.apk)
- iOS: [App Store]({{ site.download_app_store_url }})
  or [IPA]({{ site.download_server_url }}/7.46/IOS64/xcsoar-signed.ipa)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.46/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.46/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.46/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.46/XCSoar-WIN32OPENGL.zip)
- Linux: [amd64 .deb]({{ site.download_server_url }}/7.46/UNIX/xcsoar_7.46_amd64.deb)
- macOS: [disk image]({{ site.download_server_url }}/7.46/MACOS/XCSoar.dmg)
- Kobo: [KoboRoot.tgz]({{ site.download_server_url }}/7.46/KOBO/KoboRoot.tgz)

Updates in the app stores may take a little longer to appear.

## Weather

[Dominic Spreitz](https://github.com/dspreitz) added free European rain radar
and Meteosat satellite pictures on the map, and an optional Max. temp. taken
from the day's [DWD](https://www.dwd.de/) forecast.

## Task

[Leon Braun](https://github.com/OBrown92) made tasks shareable via QR code,
including support for QR code tasks from WeGlide.

[Vib38](https://github.com/Vib38) kept the start point steady while waiting
inside the start sector.

## Airspace

[Simon GH](https://github.com/groundhogxc) improved airspace warning
handling, including clearance for a glider sector inside restricted
airspace.

[kobedegeest](https://github.com/kobedegeest) filled airspace with a
transparent colour. The hatch patterns are gone.

Warnings are now spoken in English.

## FLARM and loggers

[Dominic Spreitz](https://github.com/dspreitz) added spoken FLARM collision
alarms, in English, and a plot of a FLARM's radio range. He made LXNAV
downloads over Bluetooth more reliable, and restored IOIO connections,
including older boards such as the Androport.
[Chris Woolley](https://github.com/cjwoolley) sends the full waypoint name
when a task is declared to a PowerFLARM.
[David Sherrill](https://github.com/dssherrill) made LXNAV Nano3 flight
downloads over Bluetooth more reliable.
[Wolfgang Drescher](https://github.com/WolfgangDrescher) added flight
downloads over the FLARM Hub. A PowerFLARM Flex or Fusion uses that over
Wi-Fi.

## Map and InfoBoxes

[Wolfgang Drescher](https://github.com/WolfgangDrescher) lets you rearrange
the InfoBoxes by dragging one onto another, and each page can keep its own
layout. He added a gesture indicator, and a short page indicator after a
page change.
[Uwe Augustin](https://github.com/August2111) groups the InfoBox picker.

Terrain shading from the sun and the wind is hardware-accelerated, and the
snail trail now uses the Vario #2 colours by default. The analogue vario
was reworked visually. On e-ink, text and terrain are drawn sharply, and
the map refreshes about as often as a Kobo.

## Flight computer

[Wolfgang Drescher](https://github.com/WolfgangDrescher) shows the Safety MC
glide ratio next to the setting.

[gabouls8](https://github.com/gabouls8) plotted the Analysis barograph
against clock time, so successive flights stay apart.

Safety MC and Task MC are now split. Abort using Safety MC is clearly
indicated, and Safety MC no longer controls speed-to-fly.
**Speed command switch** can be used to switch between cruise and circling.

## Platforms

[Wolfgang Drescher](https://github.com/WolfgangDrescher) added Stretch
InfoBox area on Android, and haptic feedback and full screen on iOS.
[Roland Niederhagen](https://github.com/bomilkar) logs the phone's GPS
position when the NMEA logger is on.
[Stefan Schumann](https://github.com/Scumi) added an optional System Tools
page for installed maintenance tools and personal scripts. It shows their
output live and can stop a command that runs too long. He also fills the
flight export list with takeoff, landing and duration as each file is
scanned.
[Kai Horstmann](https://github.com/hor63) fixed an OpenVario display
that froze when the mouse moved, and missing text on a Mali-400.

A Bluetooth pulse oximeter can fill the Blood Oxygen InfoBox. The Windows
build now also has an installer, and uses accelerated OpenGL graphics.
Linux has a desktop menu entry, and Restart and Power off in the Quit
dialog.

## Configuration

[Uwe Augustin](https://github.com/August2111) added a country filter for
map, waypoint and airspace downloads, with country names from
[Yorick Reum](https://github.com/yorickreum).

The configuration menu has been reworked.

Thanks to everyone who tested 7.46 and reported problems.

— [Philipp Wollschlegel](https://github.com/lordfolken)
