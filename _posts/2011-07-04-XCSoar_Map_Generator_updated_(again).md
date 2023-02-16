---
layout: post
color: blue
title: XCSoar Map Generator updated (again)
author: Turbo
---
Once again we have updated our Map Generator with three new features:

* **Welt2000 Waypoints**:
  If you activate this option, your map file will contain all the
  waypoint from the Welt2000 waypoint database of the chosen area.
  The algorithm to determine the type of waypoint isn't entirely
  perfected yet, but we are working on it. If you feel that some
  waypoints have the wrong type, please tell us!

* **Border around given waypoints**:
  When you gave us a waypoint file the generated background map
  stopped exactly at the last waypoint without any border or padding.
  Now we have added a fixed 15km padding for the cases where you
  provide the Map Generator with a waypoint file of yourself.

* **Google Terrain Maps**:
  The boundary chooser widget on the front page is now using the
  Google Maps API in Terrain mode instead of the old VMAP0 map.

## Links

Map Generator:
<http://mapgen.xcsoar.org/>
Map Generator git repository:
<https://github.com/XCSoar/mapgen>
Map Generator Bugtracker:
<https://github.com/XCSoar/mapgen/issues>
