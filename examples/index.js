source = function(leaflet_success, leaflet_error){
  $.getJSON("http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json?callback=?",
    function(data){
      console.log(
        data.entity[0].vehicle.position
      );
    });
}

real_source = {
        url: '//wanderdrone.appspot.com/',
        crossOrigin: true,
        type: 'json'
}

var map = L.map('map'),
    realtime = L.realtime(source, {
        interval: 10 * 1000
    }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

realtime.on('update', function() {
    map.fitBounds(realtime.getBounds(), {maxZoom: 5});
});
