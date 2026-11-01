---
title: "XCSoar 7.46.1 released"
created_at: 2026-10-31 00:09:00 +0100
author: folken
layout: post
---

XCSoar 7.46.1 is out.

This is a maintenance release on the 7.46 line. It changes how an InfoBox
is operated, and fixes airspace acknowledgements, Android crashes, and
task QR drawing reported after 7.46.

## Downloads

- [XCSoar 7.46.1 downloads]({{ site.download_server_url }}/7.46.1/)
- [GitHub release](https://github.com/XCSoar/XCSoar/releases/tag/v7.46.1)
- [Full changelog](https://github.com/XCSoar/XCSoar/blob/v7.46.1/NEWS.txt)
- Android: [Google Play](https://play.google.com/store/apps/details?id={{ site.download_android_google_play_package_id }}),
  [F-Droid]({{ site.download_fdroid_url }}),
  or [APK]({{ site.download_server_url }}/7.46.1/ANDROID/XCSoar.apk)
- iOS: [App Store]({{ site.download_app_store_url }})
  or [IPA]({{ site.download_server_url }}/7.46.1/IOS64/xcsoar-signed.ipa)
- Windows 64-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.46.1/XCSoar-WIN64OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.46.1/XCSoar-WIN64OPENGL.zip)
- Windows 32-bit OpenGL: [installer](https://github.com/XCSoar/XCSoar/releases/download/v7.46.1/XCSoar-WIN32OPENGL-Installer.exe)
  or [portable zip](https://github.com/XCSoar/XCSoar/releases/download/v7.46.1/XCSoar-WIN32OPENGL.zip)
- Linux: [amd64 .deb]({{ site.download_server_url }}/7.46.1/UNIX/xcsoar_7.46.1_amd64.deb)
- macOS: [disk image]({{ site.download_server_url }}/7.46.1/MACOS/XCSoar.dmg)
- Kobo: [KoboRoot.tgz]({{ site.download_server_url }}/7.46.1/KOBO/KoboRoot.tgz)

Updates in the app stores may take a little longer to appear.

## Highlights

A tap or a short Enter runs an InfoBox action at once. Hold Enter to
arrange the InfoBoxes. A double tap no longer opens the menu.

## Fixes

The RASP map keeps the forecast time that was selected.

Android no longer crashes on PowerVR Rogue tablets while panning with
topography. Menu, dialogue and status text stay on the screen on a
high-resolution phone. The IOIO connects again after XCSoar is restarted
with the board still plugged in. G load keeps its sign when the built-in
IMU is Not aligned and the top of the phone points down.

Pages setup no longer crashes when opened from a weather overlay on a
landscape screen.

Ack Day on a lower sector no longer silences the airspace above it, a new
airspace after the list was empty, or a different airspace after a NOTAM
refresh.

On Windows, FLARM aircraft whose id has the high bit set stay separate,
and a downloaded IGC file keeps its carriage returns. SkyLines user names
work on ARM Linux. Drawing the task QR code no longer crashes.

See the [full changelog](https://github.com/XCSoar/XCSoar/blob/v7.46.1/NEWS.txt)
for the complete list.

— [Philipp Wollschlegel](https://github.com/lordfolken)
