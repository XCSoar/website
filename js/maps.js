var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults.defaults({
        attributionOptions: { collapsible: false }
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
                maxZoom: 17,
                attributions: 'Map data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 25]),
        zoom: 2
    })
});

var activeRect = null;
var infoElement = null;

function createStyle(color, fill) {
    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: color,
            width: 2
        }),
        fill: new ol.style.Fill({
            color: fill
        })
    });
}

function addRegionToMap(regionName, extents) {
    var bounds = [
        ol.proj.fromLonLat([extents[0], extents[1]]),
        ol.proj.fromLonLat([extents[2], extents[3]])
    ];

    var rect = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature(new ol.geom.Polygon([[
                    bounds[0],
                    [bounds[0][0], bounds[1][1]],
                    bounds[1],
                    [bounds[1][0], bounds[0][1]],
                    bounds[0]
                ]]))
            ]
        }),
        style: createStyle('#3e73a7', 'rgba(62, 115, 167, 0.2)')
    });

    rect.region = regionName;
    map.addLayer(rect);

    var mapListInfo = '<section class="map-region">\n<h2>' + regionName + '</h2>\n<p><a href="https://download.xcsoar.org/maps/' +
        regionName + '.xcm">Standard map</a> | <a href="https://download.xcsoar.org/source/map/region/' +
        regionName + '_HighRes.xcm">High resolution map</a></p></section>';

    document.getElementById('map_list').insertAdjacentHTML('beforeend', mapListInfo);

    rect.getSource().getFeatures().forEach(function(feature) {
        feature.set('region', regionName);
        feature.set('layer', rect);
    });
}

function handleMapClick(event) {
    if (infoElement) {
        infoElement.style.display = 'none';
        infoElement.remove();
        infoElement = null;
    }

    if (activeRect) {
        activeRect.setStyle(createStyle('#3e73a7', 'rgba(62, 115, 167, 0.2)'));
        activeRect = null;
    }

    var coordinate = event.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
    });

    if (feature) {
        var regionName = feature.get('region');
        var layer = feature.get('layer');
        activeRect = layer;
        activeRect.setStyle(createStyle('#1a4977', 'rgba(26, 73, 119, 0.35)'));

        var content = '<div class="map-popup">\n<p class="map-popup__title">' + regionName + '</p>\n' +
            '<p><a href="https://download.xcsoar.org/source/map/region/' + regionName + '.xcm">Standard map</a></p>\n' +
            '<p><a href="https://download.xcsoar.org/source/map/region/' + regionName + '_HighRes.xcm">High resolution map</a></p></div>';

        if (!infoElement) {
            infoElement = document.createElement('div');
            infoElement.classList.add('map-info-box');
            document.getElementById('map').appendChild(infoElement);
        }

        infoElement.innerHTML = content;
        infoElement.style.display = 'block';

        var offset = 20;
        infoElement.style.left = (pixel[0] + offset) + 'px';
        infoElement.style.top = (pixel[1] + offset) + 'px';
    }
}

fetch('https://download.xcsoar.org/source/map/0_META/maps.config.js')
    .then(response => response.text())
    .then(data => {
        eval(data);
        for (var region in MAPS) {
            if (MAPS.hasOwnProperty(region)) {
                addRegionToMap(region, MAPS[region]);
            }
        }
    })
    .catch(error => {
        console.error('Error fetching MAPS data:', error);
    });

map.on('singleclick', handleMapClick);
