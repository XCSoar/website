---
title: "XCSoar 7.14 released"
created_at: 2021-08-20 19:08:03 +0200
author: folken
layout: post
---

7.14 required some bugfixes on the android platform.

Version 7.14 - 2021/08/20
* Android
  - keep screen on, even if not in full-screen mode
  - fix bottom bar background in non-full-screen mode
  - fix touch position in non-full-screen mode

Version 7.13 - 2021/08/19
* fix freeze bug
* fix terrain cache file bug
* task management
  - Use task defaults for start and finish height ref (MSL or AGL) when loading
    tasks from soarscore.com
* Kobo
  - fix crash in Kobo menu
* Android
  - fix GPS time from the Flytec Sensbox
  - support speed, track and acceleration from Flytec Sensbox
  - don't apply Geoid separation to Flytec Sensbox GPS altitude
  - use the 8 Hz vario from Flytec Sensbox GPS altitude instead of 1 Hz
  - restore full-screen mode properly after returning to XCSoar
  - disable full-screen mode in multi-window mode
  - make full-screen mode optional
