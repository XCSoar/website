---
layout: develop
color: red
menu: develop
title: Contribute
---

## Contributing

XCSoar is a free software project, that is run by many volunteers in their free time. 
If you would like to help, here are a few things you can do:

- **Core development**: Can you speak C++? The [XCSoar Developer Manual]({{ site.download_server_url }}/{{ site.xcsoar_stable_version }}/XCSoar-developer-manual.pdf) has instructions on how to get the source code, hack it, and submit your patches.  You can contact other developers [here](/contact/).
You can [pick an issue](https://github.com/XCSoar/XCSoar/issues) and make a pull request.
- **Testing**: 
	- [Download the released version](https://xcsoar.org/download/) of XCSoar, test it, and [report bugs](/develop/new_ticket.html).
	- [Download the nightly-build version](https://download.xcsoar.org/nightly_builds/) of XCSoar, test it, and [report bugs](/develop/new_ticket.html). You will be at the cutting edge of XCSoar development. This version may not be stable, but you will be able to try the new features and eventually report recently-introduced bugs.
- **Translation**: The XCSoar interface comes in more than 30 languages. Check our [Hosted Weblate page](https://hosted.weblate.org/projects/xcsoar) to improve the translations.
- **Documentation**: 
	- **Manual**: Can you edit in LaTeX? We need editors for the XCSoar manual. It is outdated, and needs some care. See the final section of the XCSoar Developer Manual mentioned above for instructions on how to edit the manuals.
	- **Website**: The website needs to be improved. See the [current issues](https://github.com/XCSoar/website/issues).
- **Dataset management**: XCSoar makes uses of datasets (maps, waypoints) to display locations and manage tasks.
	- **Map generation**: Automatic map generation has [issues](https://github.com/XCSoar/xcsoar-mapgen-data/issues).
	- **Data repository**: XCsoar file manager connects to a dedicated repository to download maps and waypoints. This repository has [issues](https://github.com/XCSoar/xcsoar-data-repository/issues).
	- **Data content**: Airspace maps and waypoints have [issues](https://github.com/XCSoar/xcsoar-data-content/issues). 

## XCSoar source code

[Browse our git repository online](https://github.com/XCSoar/XCSoar), or clone it:

	git clone git://github.com/XCSoar/XCSoar

