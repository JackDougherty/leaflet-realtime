var map = L.map('map'),
    realtime = L.realtime({
        url: 'http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json',
        crossOrigin: true,
        type: 'json'
    }, {
        interval: 6 * 1000
    }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

realtime.on('update', function() {
    map.fitBounds(realtime.getBounds(), {maxZoom: 15});
});
