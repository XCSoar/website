---
layout: simple
color: green
title: Hardware
description: "Platforms, embedded flight hardware, and XCSoar device drivers — Android, Kobo, OpenVario, varios, loggers, and community-tested setups."
menu: hardware
---

XCSoar runs on many kinds of hardware: **desktop** (Windows, Linux), **Android** (phones, tablets, and car GPS units), **iOS**, and **embedded Linux**. **E-ink** devices such as Kobo e-readers are popular: the screen is monochrome but stays readable in bright sunlight.

XCSoar works with a wide range of **peripherals** (varios, loggers, FLARM, and more). For wiring, protocols, and manuals, see [the documentation](/docs/). The **built-in device drivers** are listed first; further down are **community-reported** Android and Kobo setups.

Those examples are **not product endorsements**. XCSoar’s needs change over time—check the current [download](/download/) page for **minimum OS versions** before you buy. For cockpits, **sunlight readability** matters as much as raw specs.

## Dedicated embedded hardware {#dedicated-embedded-hardware}

Besides consumer phones and tablets, XCSoar is often used with **purpose-built embedded systems**: panel displays, single-board flight computers, and sensor boxes designed for gliders (custom Linux images, embedded Android stacks, or avionics that stream data to XCSoar over serial or Bluetooth).

- **[OpenVario](https://www.openvario.de/)** — open flight computer stack; build your own or source an assembled unit via the project site.
- **[SteFly](https://www.stefly.aero/)** (stefly.aero) — **Larus** gliding sensor hardware and related avionics; works with OpenVario, tablets, or other displays running XCSoar.
- **[XCNav](https://xcnav.de/)** — Android-based embedded navigation hardware for gliding and ultralight flying.
- **[XCVario](https://xcvario.com/)** — stand-alone variometer family that exports sensor data to XCSoar (OpenVario, Borgelt, Cambridge-style protocols, Bluetooth/Wi‑Fi/serial).

## Built-in device drivers {#built-in-device-drivers}

These are the **instrument and simulator drivers** shipped with XCSoar (the labels you pick in *System → Devices*). They are defined in [`src/Device/Register.cpp`](https://github.com/XCSoar/XCSoar/blob/master/src/Device/Register.cpp) in the [XCSoar source tree](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver). Use **Generic** for standard NMEA when your hardware does not have a dedicated entry.

### Variometers and glide computers {#variometers-and-glide-computers}

- [BlueFly Vario](https://www.blueflyvario.com/)
- [Borgelt B50/B800](http://www.borgeltinstruments.com/)
- [Cambridge CAI302](https://cambridge-aero.com/)
- [Cambridge CAI GPS-NAV](https://cambridge-aero.com/)
- [Cambridge L-Nav](https://cambridge-aero.com/)
- [Digifly Leonardo](https://www.digifly.it/en/)
- [Flymaster F1](https://www.flymaster.net/)
- [FlyNet Vario](http://www.asinstrument.ch/) — ASI
- [Flytec 5030 / Brauniger](https://www.flytec.com/) — Flytec / Bräuniger (Volirium)
- [ILEC SN10](https://www.ilec.de/)
- [Larus](https://www.stefly.aero/en/product/larus_glider_sensor/) — [SteFly](https://www.stefly.aero/) (stefly.aero), Larus open sensor project
- [LöFGREN Variometer](https://www.lofgren-electronics.fr/)
- [Lx Eos / Era](https://www.lxnavigation.com/) — LX Navigation
- [LXNAV](https://gliding.lxnav.com/) — variometer and instrument line (S-series, V7, Nano, …)
- [OpenVario](https://www.openvario.de/)
- [Thermal Express](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/ThermalExpress) — *protocol-only driver in tree; unknown OEM link—use **Generic** if needed*
- [Vega](https://cambridge-aero.com/) — Cambridge
- [Westerboer VW1150](https://www.westerboer.de/)
- [XC-Tracer Vario](https://www.xctracer.com/en/)
- [XCVario](https://xcvario.com/)
- [Zander / SDI](https://github.com/XCSoar/XCSoar/blob/master/src/Device/Driver/Zander.cpp) — Zander instruments with SDI-family data (related to PosiGraph / SDI; see driver notes)

### Sensors only {#sensors-only}

- [Altair Recording Unit](https://cambridge-aero.com/) — Cambridge
- [Compass C-Probe](https://www.compass-italy.com/)
- [EYE sensor-box](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/Eye.cpp) (experimental) — *no stable OEM page; use **Generic** if needed*
- [EW Logger](https://www.ew.aero/)
- [EW microRecorder](https://www.ew.aero/)
- [FLARM](https://flarm.com/)
- [IMI ERIXX](http://www.imi-gliding.com/)
- [Levil AHRS](https://levil.com/)
- PosiGraph Logger — Streamline Digital Instruments (SDI); legacy hardware often documented alongside [LX Navigation](https://www.lxnavigation.com/) / [LXNAV](https://gliding.lxnav.com/) support
- [Stratux](https://github.com/cyoung/stratux)
- [Volkslogger](http://www.volkslogger.org/) — Garrecht / Volkslogger
- [WSI Vaulter](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/Vaulter) — WSI (*upstream site not linked in XCSoar*)

### Transponders and radios

- [Air Control Display](https://www.air-avionics.com/) — AIR Avionics
- [ATR833](https://www.funkwerk.com/) — Funkwerk Avionics
- [KRT2](https://www.tqaviation.com/) — TQ Avionics
- [XCOM760](http://www.xcom760.com/) — XCOM Avionics

**Desktop flight simulators** (not panel hardware): [Condor Soaring Simulator](https://www.condorsoaring.com/) (incl. Condor 3). **Generic I/O:** **Generic** (plain NMEA fallback), **NMEA output** (send-only to other equipment).

Driver sets and behaviour change by release; see upstream **[NEWS.txt](https://github.com/XCSoar/XCSoar/blob/master/NEWS.txt)**.

## Android {#android}

XCSoar runs on many Android devices (phones, tablets, car GPS). **Android 5.0 or newer** is required.

For **phones** used in the cockpit, prefer a **high-nit** display (high peak brightness) so the map stays readable in direct sun on the canopy. Units that are **tested or rated to [MIL-STD-810](https://en.wikipedia.org/wiki/MIL-STD-810)** are often a good fit: that family of tests covers environmental stress, including **pressure altitude** and **temperature** (heat and cold), which matches sailplane use better than typical consumer-only ratings.

### Devices reported to work well {#android-devices-reported}

- Google Pixel 8
- Google Pixel 8 Pro
- Galaxy S22 Ultra
- Google Pixel 6
- Google Pixel 2
- Cat S61

### Devices with known issues {#android-devices-known-issues}

- **Xiaomi** models (various), due to a [Bluetooth issue](https://github.com/XCSoar/XCSoar/issues/1279)

### Built-in GPS {#android-built-in-gps}

Most Android devices include GPS that is adequate for many flights. External units are still useful for higher accuracy, MacCready sync, task declaration, faster IGC download, and other features.

### Barometer and accelerometer {#android-barometer-accelerometer}

Many Android phones and tablets also ship with an internal **barometer** (pressure sensor) and **accelerometer**. XCSoar can use these for pressure altitude, vario-related behaviour, and motion data where the platform exposes them—**sensor quality and sampling differ widely by device**, so a dedicated vario or external GPS/pressure source is still preferable when you need consistent, high-rate data in turbulence or competitions.

### Bluetooth and IOIO {#android-bluetooth-ioio}

Android has no built-in serial port. Typical options:

- **Bluetooth** — wireless; you can connect multiple Bluetooth adapters (up to seven in many configurations).
- **IOIO** — wired; one IOIO board can expose several serial ports and charge the device.

**Bluetooth adapters**

- [SoarTronic Bluetooth adapters](http://www.soartronic.net/products) — BT1 (FLARM-oriented) and BT2
- [K6-Team K6 BT Mux 2](https://www.k6-team.de/K6-Bt-Mux-2-NMEA-Multiplexer-mit-Bluetooth) — NMEA multiplexer with baud rate switching

**IOIO**

- [SoarTronic](http://www.soartronic.net/products) — DIY kit (IOIO board not included)
- [Build your own](https://github.com/ytai/ioio/wiki) — IOIO project wiki

## Kobo e-readers {#kobo-e-readers}

XCSoar supports several Kobo models. The **e-ink** display is black and white but easy to read in direct sun.

Models recognised in software (by internal hardware ID) are listed in [`src/Kobo/Model.cpp`](https://github.com/XCSoar/XCSoar/blob/master/src/Kobo/Model.cpp) in the XCSoar source. They include:

- Kobo Aura
- Kobo Aura Edition 2
- Kobo Clara 2E
- Kobo Clara HD
- Kobo Glo (incl. refurbished variants covered by the same IDs)
- Kobo Glo HD
- Kobo Libra 2
- Kobo Libra H2O
- Kobo Mini
- Kobo Nia
- Kobo Touch (original)
- Kobo Touch 2.0
