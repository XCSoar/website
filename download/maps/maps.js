var mapOptions = {
  zoom: 2,
  center: new google.maps.LatLng(25, 0),
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  streetViewControl: false
};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var info = null;
var active_rect = null;
google.maps.event.addListener(map, 'click', function() {
    if (info) {
        info.close();
        info = null;
    }
    
    if (active_rect) {
        active_rect.setOptions({      
            strokeColor: "#FF8800",
            fillColor: "#FF8800",
        });
        active_rect = null;
    }
});

for (var name in MAPS) {
    var ext = MAPS[name];
    
    var sw = new google.maps.LatLng(ext[1], ext[0]);
    var ne = new google.maps.LatLng(ext[3], ext[2]);
    var bounds = new google.maps.LatLngBounds(sw, ne);
    var rect = new google.maps.Rectangle({
      strokeColor: "#FF8800",
      strokeOpacity: 0.7,
      strokeWeight: 2,
      fillColor: "#FF8800",
      fillOpacity: 0.2,
      map: map,
      bounds: bounds
    });

    rect.region = name;
 
    google.maps.event.addListener(rect, 'click', function() {
        if (active_rect) {
            active_rect.setOptions({      
                strokeColor: "#FF8800",
                fillColor: "#FF8800",
            });
        }
        active_rect = this;
        active_rect.setOptions({      
            strokeColor: "#0000CC",
            fillColor: "#0000CC",
        });
        var content = "<div style='margin: 0px; padding: 5px;'><span style='font-size: 1.7em;'>" + 
            this.region + "</span><br/><br/>"+
            "<a href='http://download.xcsoar.org/maps/" + this.region + ".xcm' "+
            "type='application/octet-stream'>Standard map</a><br/>" +
            "<a href='http://download.xcsoar.org/maps/" + this.region + "_HighRes.xcm' "+
            "type='application/octet-stream'>High resolution map</a><br/>" +
            "<a href='http://download.xcsoar.org/maps/" + this.region + "_Altair.xcm' "+
            "type='application/octet-stream'>Altair map</a><br/>" +
            "</div>";
            
        if (info) info.close();
        info = new google.maps.InfoWindow({
            content: content
        });        
        info.setPosition(this.getBounds().getCenter());
        info.open(map);   
    });

    var map_list_info = "<hr/><h2>" + name + "</h2><br/><a href=\"http://download.xcsoar.org/maps/" + 
                        name + ".xcm\" type='application/octet-stream'>Standard map</a> | <a href=\"http://download.xcsoar.org/maps/" + 
                        name + "_HighRes.xcm\" type='application/octet-stream'>High resolution map</a> | <a href=\"http://download.xcsoar.org/maps/" + 
                        name + "_Altair.xcm\" type='application/octet-stream'>Altair map</a><br/><br/>";

    $("#map_list").append(map_list_info);
}

