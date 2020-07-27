---
layout: post
color: blue
title: XCSoar Map Generator Update
author: Turbo
---
We have updated our Map Generator server today and that means some 
new features for everyone. Next to a few minor bugfixes there are 
three new major features:

* **SeeYou CUP**:  
  Previously you have been able to pass a Cambridge/WinPilot DAT
  file to the Map Generator and it would compute the map boundaries
  automatically. The same works now too for SeeYou CUP files!
  If you choose this option the waypoint file will actually be embedded
  in the map file, so you don't even have to load a seperate waypoint file
  anymore

* **Compressed topography**:  
  Where size matters, compression is a useful thing, so we implemented
  a user option to enable compression for the topography data. The
  map file size will be reduced by around 60% when enabling this option,
  but keep in mind that in this case XCSoar needs to decompress the data 
  while drawing the topography, which might lead to a slightly slower system.

* **Level of detail**:  
  You may now choose how much topography features would like to have in your map.
  Depending on the population in you area it might make sense not to include every
  single village but only the big cities or in other areas exactly that data is
  needed because bigger cities are further away.

## Links

Map Generator:  
<http://mapgen.xcsoar.org/>  
Map Generator git repository:  
<http://github.com/XCSoar/mapgen/>  
Map Generator issues:  
<http://github.com/XCSoar/mapgen/issues>  
