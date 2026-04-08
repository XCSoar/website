---
layout: discover
color: blue
title: Docs
description: "XCSoar documentation — manuals, quick guides, hardware compatibility, and developer links."
menu: docs
---

## Manual

Manuals of the stable version {{ site.xcsoar_stable_version }}:

- {% country_flag gb %} [XCSoar in a flash]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-in-a-flash.pdf)
- {% country_flag gb %} [XCSoar Manual]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual.pdf)
- {% country_flag de %} [XCSoar Blitzeinstieg]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-Blitzeinstieg.pdf) Quick guide in German
- {% country_flag de %} [XCSoar Handbuch]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual-de.pdf) Complete German manual
- {% country_flag fr %} [XCSoar Prise en main]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-Prise-en-main.pdf) Quick guide in French
- {% country_flag fr %} [XCSoar Manuel de l'utilisateur]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual-fr.pdf) Mostly complete French manual
- {% country_flag br %} [XCSoar XCSoar em um flash]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-in-a-flash-pt_BR.pdf) Quick guide in Portuguese
- {% country_flag br %} [XCSoar Manual do Usuário]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-manual-pt_BR.pdf) Complete Portuguese manual

## File formats & configuration reference

These **[Read the Docs](https://xcsoar.readthedocs.io/en/latest/)** chapters are **reference** material—file layouts, syntax, and hooks.

- [Map data file formats](https://xcsoar.readthedocs.io/en/latest/mapfile.html) — terrain, topography, airspace, and waypoint files XCSoar loads
- [Checklists](https://xcsoar.readthedocs.io/en/latest/checklist.html) — checklist file format: paths, Markdown, checkboxes, and links (`https:`, `tel:`, `sms:`, `geo:`, `xcsoar://` dialogs, …)
- [Input events](https://xcsoar.readthedocs.io/en/latest/input_events.html) — `.xci` mapping of keys, hardware buttons, and touch labels to actions; default F-key groups and glide-computer events
- [Lua scripting](https://xcsoar.readthedocs.io/en/latest/lua.html) — Lua API inside XCSoar for automation (often used with input events)

## Developer Docs

Documentation for people **building or hacking on** XCSoar:

- [Developer manual — full index](https://xcsoar.readthedocs.io/en/latest/) — compiling, dev environment, architecture, policy, debugging utilities, Git tips, and more

### Manufacturer Protocols

Protocol documentation for various manufacturers' devices supported by XCSoar.

- [Cambridge CAI302 Protocol](https://cambridge-aero.com/300series.htm) - 302 Dataport User's Guide (PDF available from Cambridge Aero)
- [FLARM Data Port Interface ICD (FTD-012)](https://flarm.com/wp-content/uploads/2025/09/FTD-012-Data-Port-Interface-Control-Document-ICD-7.22.pdf) - FLARM protocol specification (PDF)
- [FLARM Downloads](https://flarm.com/support/downloads/) - Additional FLARM documentation
- [LX navigation Protocol](https://downloads.lxnavigation.com/details.php?id=17) - LX navigation communication protocols (PDF)
- [LXNAV Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/LXNAV) - LXNAV device protocol implementation
- [Borgelt Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/Borgelt) - Borgelt device protocol implementation
- [IMI ERIXX Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/IMI) - IMI ERIXX protocol implementation
- [EW Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/EW) - EW device protocol implementation
- [Loefgren Vario Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/Loeg) - Loefgren vario protocol implementation
- [Vaulter Protocol](https://github.com/XCSoar/XCSoar/tree/master/src/Device/Driver/Vaulter) - Vaulter device protocol implementation
