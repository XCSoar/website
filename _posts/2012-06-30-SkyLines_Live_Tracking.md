---
layout: post
color: blue
title: SkyLines Live Tracking
author: Max
---
One major feature of XCSoar 6.4 will be [SkyLines](http://skylines.aero)
Live Tracking. I would like to introduce you to it.

SkyLines implements a very light-weight tracking protocol that transmits only 48
bytes for each fix, opposed to hundreds of bytes for other protocols. It works
better when the connection is flaky (and it usually is in a glider!), because it
does not require a complicated handshake between client and server. It transmits
not only your position, but also altitude, speed, vario, engine noise level.

Due to these advantages, you can easily set the tracking interval to only a few
seconds, and make the word "live" in "live tracking" credible.

The web interface is under heavy construction. We can always use some help
developing it!

How to use:

- register in SkyLines if you havn't already
  (<https://skylines.aero/users/new>)

- generate a tracking key in the SkyLines system settings
  (<https://skylines.aero/settings/>)

- get XCSoar 6.4_alpha1
  (<https://play.google.com/store/apps/details?id=org.xcsoar.testing>)

- enter this key in XCSoar's tracking settings (Setup System, Setup, Tracking)

- fly!

- your friends click on Live to see current live tracks
  (<https://skylines.aero/tracking/>)

This feature is only available on Android. You need an internet connection
during the flight, so be sure to put your SIM card into your device. As soon as
XCSoar detects take-off, it will transmit your location to the SkyLines server.

Take care, this transmits data over your mobile connection. This may cost you
money. Be sure to have a data plan.
