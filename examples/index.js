source = function(success, error){
    success(
        {"geometry": {"type": "Point", "coordinates": [138.0092102571426, -34.651298292445304]}, "type": "Feature", "properties": {}}
        );
}

real_source = {
        url: '//wanderdrone.appspot.com/',
        crossOrigin: true,
        type: 'json'
}

var map = L.map('map'),
    realtime = L.realtime(source, {
        interval: 6 * 1000
    }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

realtime.on('update', function() {
    map.fitBounds(realtime.getBounds(), {maxZoom: 5});
});
