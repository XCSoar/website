---
title: "XCSoar 7.45.2 released"
created_at: 2026-09-12 22:20:00 +0200
author: folken
layout: post
---

XCSoar 7.45.2 is out.

This is a maintenance release on the 7.45 line. It keeps Android and iOS
store updates possible, improves UTC offset handling and list scrolling,
and fixes crashes, weather overlays, task InfoBoxes, and device support
reported after 7.45.1.

## Downloads

- [XCSoar 7.45.2 downloads]({{ site.download_server_url }}/7.45.2/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.45.2)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.2/NEWS.txt)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.2/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.2/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.2/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.2/XCSoar-WIN32OPENGL.zip)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }})
  or [F-Droid]({{ site.download_fdroid_url }})
- iOS: [App Store]({{ site.download_app_store_url }})
- Linux: [Unix builds]({{ site.download_server_url }}/7.45.2/UNIX/)

Updates in the app stores may take a little longer to appear.

## Highlights

Android now targets Android 16 so Google Play still accepts updates. iOS
64-bit builds require iOS 15 or newer.

UTC offsets can be set manually up to +14:00 in 15-minute increments.
Automatic offsets stay in sync with the operating-system time zone,
including daylight-saving and travel changes.

Icons render at a higher resolution on high-DPI screens. Lists are
easier to scroll: the scroll bar jumps to where you press, a swipe on a
touch screen no longer drags the selection, and settings panels such as
Setup / Look / Pages can be scrolled without locking up.

## Fixes

Android internal and Bluetooth sensors no longer go silent right after
they are opened.

iOS lets Return submit text when using the system keyboard. The app no
longer crashes on exit from a late altimeter callback, or when a Task
Manager button action fails.

Kobo's power-off screen lists flights again after flights.log moved into
the logs directory.

UK XC Therm forecast overlays work again, and XC Therm polygons stay
visible when the map is not north-up. The repetitive airspace warning
sound keeps repeating while inside or near airspace.

CUP FAI quadrants load as quadrants, not plain sectors, in gcc 15
optimized builds. Achieved task distance (planned minus remaining) is
correct, so task speed InfoBoxes and Status stay consistent. Speed Task
Leg no longer stays at zero after the task starts. T Next Leg shows no
wind in the comment when wind is unavailable, and its equivalent thermal
is correct with a headwind or tailwind.

Opening the port monitor no longer crashes. Condor 3 Spectate altitude
is no longer about 40 m (136 ft) too low. IGC downloads from LX Navigation
loggers (Colibri, LX20, LX7007 IGC) no longer show about 65000 m for
negative pressure altitudes.

NOTAM details can be scrolled instead of being truncated. Moving keyboard
focus on the waypoint picture page or in the flugwetter.de image view
no longer crashes. The Wi-Fi connection state stays visible when the
network name is long. Left/Right still change settings pages on Services
until Up selects a service action.

Windows backups skip the NMEA log and IGC file the loggers are writing,
so a backup no longer fails the whole archive. Backup and restore are
refused while flying.

See the [full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.2/NEWS.txt)
for the complete list.

— [Philipp Wollschlegel](https://github.com/lordfolken)
