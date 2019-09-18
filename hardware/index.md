---
layout: simple
color: green
title: Hardware
menu: hardware
---

XCSoar runs on a wide variety of hardware: all desktop computers
(Windows, Linux, Mac OS X), Android (smartphones, tablets), Windows CE
(PDAs, PNAs, ...) and embedded Linux.

XCSoar is compatible with many peripheral hardware such as varios and
loggers.  Consult [the manual](/discover/manual.html) for an extensive
list.

Many users ask us what hardware they shall buy for running XCSoar.
This section describes setups that have been verified to work well.

# Android

The [Dell Streak 5"](https://en.wikipedia.org/wiki/Dell_Streak) is the
best Android device to run XCSoar.  It is a smartphone with a transflective 5
inch screen that is perfectly readable in sunlight.  Unfortunately, it
is out of production.  You can still get one on eBay.  The official car
docking kit is a good choice.

Other Android products that have been reported to be reasonably good
(but not quite as good as the Streak):

- YotaPhone 2: has an e-ink screen on the backside, which can be used for XCSoar
- [Galaxy S6](http://www.samsung.com/de/smartphones/galaxy-s6-g920f/)
- [Sony Xperia](http://www.sonymobile.com/gb/xperia/): very bright
  screen, but broken Bluetooth, use IOIO instead

## Built-in GPS

Most Androids have built-in GPS.  It is good enough for many pilots,
but there are reasons to connect to other devices: better accuracy,
MacCready synchronization, task declaration, IGC file download, ...

## Bluetooth or IOIO?

Android devices don't have a serial port.  There are two ways to
connect peripherals:

- *Bluetooth*: the wireless solution; you can connect up to 7
  Bluetooth adapters to your Android
- *IOIO*: the wired solution; one IOIO adapter has up to 4 serial
  ports and charges your Android at the same time

Examples for Bluetooth adapters:

- [SoarTronic's bluetooth adapter](http://www.soartronic.net/products) is cheap (38 €), but only compatible with FLARM
- [K6-Team K6 BT Mux 2](https://www.k6-team.de/K6-Bt-Mux-2-NMEA-Multiplexer-mit-Bluetooth) costs 218
  €, but is the universal solution that allows baud rate switching
- you can build your own

Examples for IOIO adapters:

- [SoarTronic](http://www.soartronic.net/products) has a DIY kit for 39 €
  (without the actual IOIO board)
- you can [build your own](https://github.com/ytai/ioio/wiki)

# Kobo

XCSoar supports multiple Kobo e-book readers. These device have an e-ink screen.
It is black and white, but is perfectly readable in direct sunlight.

The following Kobo models are supported:

- Kobo Mini
- Kobo Glo
- Kobo Touch 2.0
- Kobo Glo HD
- Kobo Aura Edition 2

[More information about XCSoar on the Kobo Mini](http://max.kellermann.name/projects/xcsoar/kobo.html).

# Windows CE

XCSoar on Windows CE is discontinued. It is still supported in XCSoar 6.8.x, but
future XCSoar releases will no support this operating system any more.

## Naviter Oudie

[More information about XCSoar on the Naviter Oudie](oudie.html).

# Peripherals

## Borgelt B800
The [Borgelt B800](http://www.borgeltinstruments.com/?page_id=48) is fully supported by XCSoar.
The [Borgelt Bluetooth Blade](http://www.borgeltinstruments.com/?page_id=156) is the dedicated bluetooth adapter.

## Cambridge CAI302

The CAI302 is fully supported by XCSoar, thanks to Cambridge's
complete protocol documentation.  To allow fast IGC file download, it
is recommended to use the [K6-Team Bluetooth adapter](https://www.k6-team.de/K6-Bt-Mux-2-NMEA-Multiplexer-mit-Bluetooth).

## EW microRecorder
The EW microRecorder is fully supported by XCSoar.

## FLARM

Connecting to a FLARM gives you barometric height and information
about nearby traffic (FLARM radar).  XCSoar can send task declarations
to an IGC FLARM and can read valid IGC files from it.

[SoarTronic's bluetooth adapter](http://www.soartronic.net/products) is a
cheap way to connect a FLARM.

## IMI ERIXX

The [IMI ERIXX](http://www.imi-gliding.com/products/erixx-flight-recorder.html) is fully supported by XCSoar.

## LXNAV S7 / Nano

Both [S7](https://www.lxnav.nl/v7.html) and
[Nano](http://www.lxnav.com/products/nano.html) are both fully
supported by XCSoar, thanks to LXNAV's hardware donations.  LXNAV
sells
[a Bluetooth adapter for the S7](https://gliding.lxnav.com/products/s7-s8-s80-bluetooth-module/),
and the Nano has built-in Bluetooth.

## Triadis Altair / Vega
The Triadis Altair and Vega are fully supported by XCSoar.

## Vaulter

The Vaulter is a variometer
developed by long-time XCSoar developer
John Wharington.  It is
fully supported by XCSoar.
