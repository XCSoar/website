var map;

(function() {
    function onFeatureSelect(feature) {
        var popupContent = "<span style='font-size: 1.7em;'>Map: " + feature.attributes.title + "</span><br/>"+
            "<a href='http://download.xcsoar.org/maps/" + feature.attributes.title + ".xcm'>"+
            "http://download.xcsoar.org/maps/" + feature.attributes.title + ".xcm</a>";
        popup = new OpenLayers.Popup.FramedCloud("selected-map", feature.geometry.getBounds().getCenterLonLat(),
                                                 null, popupContent, null, false, null);
        feature.popup = popup;
        map.addPopup(popup);
    }

    function onFeatureUnselect(feature) {
        map.removePopup(feature.popup);
        feature.popup.destroy();
        feature.popup = null;
    }

    map = new OpenLayers.Map({div: "map", projection: new OpenLayers.Projection("EPSG:900913")});
    map.addLayer(new OpenLayers.Layer.Google("Google Terrain", {type: google.maps.MapTypeId.TERRAIN}));

    var boxes = new OpenLayers.Layer.Vector("XCSoar Maps");
    for (var name in MAPS) {
        var ext = MAPS[name];
        var bounds = new OpenLayers.Bounds(ext[0], ext[1], ext[2], ext[3]).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
        boxes.addFeatures(new OpenLayers.Feature.Vector(bounds.toGeometry(), {title: name}));
    }

    map.addLayer(boxes);

    var selectControl = new OpenLayers.Control.SelectFeature(boxes,
                                                             { onSelect: onFeatureSelect,
                                                               onUnselect: onFeatureUnselect });

    map.addControl(selectControl);
    selectControl.activate();

    map.setCenter(new OpenLayers.LonLat(0, 20.0).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913")), 2);
})();
