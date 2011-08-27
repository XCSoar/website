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

for (var name in WAYPOINTS) {
    var file_info = WAYPOINTS[name];
    
    var latlon = new google.maps.LatLng(file_info['average'][0], file_info['average'][1]);
    var marker = new google.maps.Marker({
        position: latlon, 
        map: map, 
        title: name
    });

    marker.country = name;
    marker.waypoints = file_info['size'];
 
    google.maps.event.addListener(marker, 'click', function() {
        var content = "<div style='margin: 0px; padding: 5px;'><span style='font-size: 1.7em;'>" + 
            this.country + "</span><br/><br/>" + this.waypoints + " waypoints<br/><br/>"+
            "<a href='http://download.xcsoar.org/waypoints/" + this.country + ".cup'>"+
            "http://download.xcsoar.org/waypoints/" + this.country + ".cup</a></div>";
            
        if (info) info.close();
        info = new google.maps.InfoWindow({
            content: content
        });        
        info.open(map, this);   
    });
}
