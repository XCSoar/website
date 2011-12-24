var mapOptions = {
  zoom: 2,
  center: new google.maps.LatLng(25, 0),
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  streetViewControl: false
};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var info = null;
google.maps.event.addListener(map, 'click', function() {
    if (info) info.close();
});

function compare(a, b)
{
	a = a[0].toLowerCase();
	a = a.replace(/ä/g,"a");
	a = a.replace(/ö/g,"o");
	a = a.replace(/ü/g,"u");
	a = a.replace(/ß/g,"s");

	b = b[0].toLowerCase();
	b = b.replace(/ä/g,"a");
	b = b.replace(/ö/g,"o");
	b = b.replace(/ü/g,"u");
	b = b.replace(/ß/g,"s");

	return (a == b) ? 0 : ((a > b) ? 1 : -1);
}

var sorted_waypoints = [];
for (var name in WAYPOINTS)
    sorted_waypoints.push([name, WAYPOINTS[name]]);

sorted_waypoints.sort(compare);

for (var country in sorted_waypoints) {
    var file_info = sorted_waypoints[country][1];
    
    var latlon = new google.maps.LatLng(file_info['average'][0], file_info['average'][1]);
    var marker = new google.maps.Marker({
        position: latlon, 
        map: map, 
        title: sorted_waypoints[country][0]
    });

    marker.country = sorted_waypoints[country][0];
    marker.waypoints = file_info['size'];
 
    google.maps.event.addListener(marker, 'click', function() {
        var content = "<div style='margin: 0px; padding: 5px;'><span style='font-size: 1.7em;'>" + 
            this.country + "</span><br/><br/>" + this.waypoints + " waypoints<br/><br/>"+
            "<a href='http://download.xcsoar.org/waypoints/" + this.country + ".cup' "+
            "type='application/octet-stream'>"+
            "http://download.xcsoar.org/waypoints/" + this.country + ".cup</a></div>";
            
        if (info) info.close();
        info = new google.maps.InfoWindow({
            content: content
        });        
        info.open(map, this);   
    });

    var map_list_info = "<hr/><h2>" + sorted_waypoints[country][0] + "</h2><br/><a href=\"http://download.xcsoar.org/waypoints/" + 
                        sorted_waypoints[country][0] + ".cup\" type='application/octet-stream'>Download</a> (" + file_info['size'] + " waypoints)<br/><br/>";

    $("#wp_list").append(map_list_info);
}
