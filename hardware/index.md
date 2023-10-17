---
layout: simple
color: green
title: Hardware
menu: hardware
---

XCSoar runs on a wide variety of hardware: desktop computers
(Windows, Linux), Android (smartphones, tablets, car GPS), and embedded Linux.
E-ink readers such as the Kobo are very good platforms aswell.

XCSoar is compatible with many peripheral hardware such as varios and
loggers. Consult [the manual](/discover/manual.html) for an extensive
list.

Many users ask us what hardware they shall buy for running XCSoar.  This
section describes setups that have been verified to work well.  Please note
that screen readabillity in direct sunlight is a key feature when choosing a
device.

# Android

XCSoar has been reported to work on many android products, whether they are
smartphones, tablets or car GPS.  Note that XCSoar requires Android 5.0 or up.

Android devices known to work well with XCSoar are:
-   Google Pixel 8
-   Google Pixel 8 Pro
-   Galaxy S22 Ultra
-   Google Pixel 6
-   Google Pixel 2
-   Cat S61

Android devices known to have issues with XCSoar are:
-   Xiaomi * , due to a [Bluetooth issue](https://github.com/XCSoar/XCSoar/issues/1279)


## Built-in GPS

Most Android devices have built-in GPS. It is good enough for many pilots,
but there are reasons to connect to other devices: better accuracy,
MacCready synchronization, task declaration, IGC file download...

## Bluetooth or IOIO

Android devices do not have a serial port. There are two ways to
connect peripherals:

- *Bluetooth*: the wireless solution; you can connect up to 7
  Bluetooth adapters to your Android
- *IOIO*: the wired solution; one IOIO adapter has up to 4 serial
  ports and charges your Android at the same time

Examples for Bluetooth adapters:

- [SoarTronic's bluetooth adapter](http://www.soartronic.net/products)
  BT1 (only compatible with FLARM) and BT2
- [K6-Team K6 BT Mux 2](https://www.k6-team.de/K6-Bt-Mux-2-NMEA-Multiplexer-mit-Bluetooth)
  a solution that allows baud rate switching

Examples for IOIO adapters:

- [SoarTronic](http://www.soartronic.net/products) has a Do-It-Yourself kit
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

[More information about XCSoar on the Kobo Mini](https://max.kellermann.name/projects/xcsoar/kobo.html).

# Windows CE

XCSoar on Windows CE is discontinued.

# Peripherals

## BarOn

The [BarOn](http://aero--tech.ru/en/#BARON) provides atmospheric pressure
changes to XCSoar through bluetooth.

## BlueFlyVario

The [BlueFlyVario](https://www.blueflyvario.com/) provides atmospheric pressure
changes (and, optionally, GPS coordinates) to XCSoar.

## Borgelt B800

The [Borgelt B800](http://www.borgeltinstruments.com/?page_id=48)
is fully supported by XCSoar.
The [Borgelt Bluetooth Blade](http://www.borgeltinstruments.com/?page_id=156)
is the dedicated bluetooth adapter.

## Cambridge CAI302

The CAI302 is fully supported by XCSoar, thanks to Cambridge's
complete protocol documentation. To allow fast IGC file download, it
is recommended to use the
[K6-Team Bluetooth adapter](https://www.k6-team.de/K6-Bt-Mux-2-NMEA-Multiplexer-mit-Bluetooth).

## EW microRecorder

The EW microRecorder is fully supported by XCSoar.

## FLARM

Connecting to a [FLARM](https://flarm.com) gives you barometric height and information
about nearby traffic (FLARM radar). XCSoar can send task declarations
to an IGC FLARM and can read valid IGC files from it.

[SoarTronic's bluetooth adapter](http://www.soartronic.net/products) is a
cheap way to connect a FLARM.

## IMI ERIXX

The [IMI ERIXX](http://www.imi-gliding.com/products/erixx-flight-recorder.html)
is fully supported by XCSoar.

LX navigation
-------------

Era 80 is not working with XCSoar due to a [bug in the device](https://github.com/XCSoar/XCSoar/issues/415).

Era 57 is not supported [at the moment](https://github.com/XCSoar/XCSoar/issues/389).

## LXNAV S7/S8/S100/Nano

LXNAV [S7](https://gliding.lxnav.com/products/s7/), [S8](https://gliding.lxnav.com/products/s8/),
[S100](https://gliding.lxnav.com/products/s100/) and [Nano](https://gliding.lxnav.com/products/nano/)
are fully supported by XCSoar, thanks to LXNAV's hardware donations.

LXNAV S8, S100 and Nano have built-in Bluetooth.
LXNAV sells [a Bluetooth adapter for the S7](https://gliding.lxnav.com/products/s7-s8-s80-bluetooth-module/).

LXNAV Nano [does not support reception of external commands to trigger PEV](https://github.com/XCSoar/XCSoar/issues/1242)


## OpenVario

XCSoar is at the heart of the [OpenVario flight computer](https://www.openvario.org/doku.php).
While OpenVario can be home-built, it can also be assembled for you by a [builder](https://www.openvario.org/doku.php?id=builders:top).

## XCVario

The [XCVario](https://xcvario.com) is an innovative electronic variometer based on both open hard and software.

## XCNav

THe [XCNav](https://xcnav.de/) XCNav edition is a new Android-based multi-platform navigation system for gliding and ultralight flight.
