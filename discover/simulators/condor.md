---
layout: discover
color: blue
title: XCSoar and the Condor Simulator
menu: discover
---
You have to use a serial cable to connect the COM-Port with your IPaq,
because Condor simply sends NMEA to your PCs COM-Port, like any other
GPS-source (GPS-mouse, logger).

If you don't have a serial cable you can use your USB connection (cradle)
with a special software:

[GPSGate](http://franson.com/gpsgate/) is a software to split one
GPS-source into many 'virtual' sources, so that more than one program can
use a single GPS-source and it's able to sent the GPS-source via ActiveSync

How to setup this?

**Part I: Setup your Windows**

1. Use GPSGate 2.6 or higher
2. Load GPSGate for Windows: <http://franson.com/gpsgate/>
3. Start GPSGate
4. Don't use the Wizard click on "Advanced setup..."
5. Set "Virtual COM" as input (e.g. Com 2) and click "Open"
6. Go to "Output" and add "ActiveSync"
7. Start Condor
8. Enable NMEA output at setup-dialogue and choose your virtual COM port  (COM2 - see above)

Now, GPSGate will take the GPS-data from Condor and provides it via ActiveSync

**Part II: Setup your PocketPC**

1. Install GPSGate for PocketPC: <http://franson.com/gpsgate/>
2. Don't use the Wizard click "Manual"
3. Choose "ActiveSync" as GPS-input
4. Create "Virtual COM Port" as output for your GPS-data (e.g. COM5)
5. Start XCSoar
6. choose your virtual COM port (COM5) as GPS-input

That's it.

I hope you have success with this small tutorial.
