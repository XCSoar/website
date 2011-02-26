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

    map = new OpenLayers.Map('map');
    map.addLayer(new OpenLayers.Layer.WMS("OpenLayers WMS",
                                          "http://vmap0.tiles.osgeo.org/wms/vmap0?", {layers: 'basic'}));

    var boxes = new OpenLayers.Layer.Vector("XCSoar Maps");
    for (var i = 0; i < MAPS.length; i++) {
        var ext = MAPS[i];
        var bounds = new OpenLayers.Bounds(ext[1], ext[2], ext[3], ext[4]);
        boxes.addFeatures(new OpenLayers.Feature.Vector(bounds.toGeometry(), {title: ext[0]}));
    }

    map.addLayer(boxes);

    var selectControl = new OpenLayers.Control.SelectFeature(boxes,
                                                             { onSelect: onFeatureSelect,
                                                               onUnselect: onFeatureUnselect });

    map.addControl(selectControl);
    selectControl.activate();

    map.zoomToMaxExtent();
    map.zoomIn();
})();
