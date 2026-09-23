---
title: "XCSoar 7.45.3 released"
created_at: 2026-09-22 23:27:00 +0200
author: folken
layout: post
---

XCSoar 7.45.3 is out.

This is a maintenance release on the 7.45 line. It improves Android
Bluetooth sensors, IGC logging and downloads, and dark mode on Apple
devices, and fixes weather, FLARM, and simulator issues reported after
7.45.2.

## Downloads

- [XCSoar 7.45.3 downloads]({{ site.download_server_url }}/7.45.3/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.45.3)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.3/NEWS.txt)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }}),
  [F-Droid]({{ site.download_fdroid_url }}),
  or [APK]({{ site.download_server_url }}/7.45.3/ANDROID/XCSoar.apk)
- iOS: [App Store]({{ site.download_app_store_url }})
  or [IPA]({{ site.download_server_url }}/7.45.3/IOS64/xcsoar-signed.ipa)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.3/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.3/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.45.3/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.45.3/XCSoar-WIN32OPENGL.zip)
- Linux: [amd64 .deb]({{ site.download_server_url }}/7.45.3/UNIX/xcsoar_7.45.3_amd64.deb)
- macOS: [disk image]({{ site.download_server_url }}/7.45.3/MACOS/XCSoar.dmg)
- Kobo: [KoboRoot.tgz]({{ site.download_server_url }}/7.45.3/KOBO/KoboRoot.tgz)

Updates in the app stores may take a little longer to appear.

## Highlights

Android Bluetooth Low Energy sensors are more reliable. Heart-rate
sensors such as a Xiaomi Smart Band connect on the first try. The
Devices list shows remaining battery for sensors that expose the
standard Battery Service, and it shows Heart Rate, Pressure,
Temperature, and Relative humidity when a device reports them.
Environmental Sensing readings (pressure, temperature, and humidity)
are read from compatible BLE devices. Engine Type stays hidden on
heart-rate sensors; it is only for engine sensors.

A BlueFly Vario on Android connects when you choose the BLE port and
the BlueFly driver. It was previously offered only as a BLE sensor, so
it would not connect.

IGC files include the GPS ellipsoid altitude when the receiver reports
it. Checklist checkbox ticks stay until XCSoar exits or a different
checklist file is selected.

Dark mode Auto on macOS and iOS follows the system appearance,
including a scheduled switch while XCSoar is running.

## Fixes

Linux saves the settings and the flight log when Ctrl-C or a system
stop ends XCSoar.

Windows shows the program version in the file properties of XCSoar.exe
and the installer. `--help` and `--version` print in the Command Prompt
window.

RASP Auto update no longer downloads the same forecast again every time
the page changes. FLARM IGC downloads no longer stop in the middle of
the file, and downloads over a USB cable on Android are reliable again.

Condor 3 UDP air-data is ignored so it cannot override the NMEA GPS and
climb. Quit on the Fly / Simulator screen no longer empties a profile
that was given on the command line.

See the [full changelog](https://github.com/XCSoar/XCSoar/blob/v7.45.3/NEWS.txt)
for the complete list.

— [Philipp Wollschlegel](https://github.com/lordfolken)
