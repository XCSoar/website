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

- [Galaxy Note 2](http://www.samsung.com/galaxynoteII/)
- [Sony Xperia](http://www.sonymobile.com/gb/xperia/): very bright
  screen, but broken Bluetooth, use IOIO instead
- [Caterpillar B15](http://catphones.com/b15-smartphone): not tested,
  but rumor says its screen is transflective

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

- [SoarTronic's bluetooth adapter](http://www.soartronic.net/) is cheap (38 €), but only compatible with FLARM
- [GliderTools VFBT-1](http://www.glidertools.com/products/bluetooth-modul-pro-spojeni-loggeru-a-pda/)
  is an adapter for 85 € which works with all devices that don't need
  to switch baud rates
- [K6-Team K6 BT 2](http://www.k6-team.de/index.php?a=165) costs 148
  €, but is the universal solution that allows baud rate switching
- you can build your own

Examples for IOIO adapters:

- [DroidSoar](http://www.tvlnet.de/): a complete IOIO adapter with 4
  serial ports and 2 pressure sensors for 169 €
- [Glidertools Androport](http://www.glidertools.com/products/androport/):
  a complete IOIO adapter with 2 serial ports for 63.50 €
- [SoarTronic](http://www.soartronic.net/) has a DIY kit for 26 €
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

XCSoar on Windows CE discontinued. It is still supported in XCSoar 6.8.x, but
future XCSoar releases will no support this operating system any more.

## Naviter Oudie

[More information about XCSoar on the Naviter Oudie](oudie.html).

# Peripherals

## Vaulter

[The Vaulter](http://wharingtonsmith.com/vaulter.html) is a variometer
developed by long-time XCSoar developer
[John Wharington](http://wharingtonsmith.com/company.html).  It is
fully supported by XCSoar.

## FLARM

Connecting to a FLARM gives you barometric height and information
about nearby traffic (FLARM radar).  XCSoar can send task declarations
to an IGC FLARM and can read valid IGC files from it.

[SoarTronic's bluetooth adapter](http://www.soartronic.net/) is a
cheap way to connect a FLARM.

## LXNAV V7 / Nano

Both [V7](http://www.lxnav.com/products/v7-v7d.html) and
[Nano](http://www.lxnav.com/products/nano.html) are both fully
supported by XCSoar, thanks to LXNAV's hardware donations.  LXNAV
sells
[a Bluetooth adapter for the V7](http://www.lxnav.com/accessories/v7-bluetooth.html),
and the Nano has built-in Bluetooth.

## Cambridge CAI302

The CAI302 is fully supported by XCSoar, thanks to Cambridge's
complete protocol documentation.  To allow fast IGC file download, it
is recommended to use the K6-Team Bluetooth adapter.
