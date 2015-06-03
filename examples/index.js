bus_data = {"entity":[{"alert":null,"id":"A71","trip_update":null,"vehicle":{"position":{"latitude":41.559536,"longitude":-72.91748},"timestamp":1433293405,"trip":{"route_id":"7447","schedule_relationship":0,"start_date":"20150602","trip_id":"773020"},"vehicle":{"id":"2071","label":"A71"}}},{"alert":null,"id":"A84","trip_update":null,"vehicle":{"position":{"latitude":41.7643738,"longitude":-72.68753},"timestamp":1433293418,"trip":{"route_id":"7447","schedule_relationship":0,"start_date":"20150602","trip_id":"773034"},"vehicle":{"id":"2084","label":"A84"}}},{"alert":null,"id":"1432","trip_update":null,"vehicle":{"position":{"latitude":41.69393,"longitude":-72.7679749},"timestamp":1433293423,"trip":{"route_id":"7389","schedule_relationship":0,"start_date":"20150602","trip_id":"767347"},"vehicle":{"id":"2432","label":"1432"}}},{"alert":null,"id":"1434","trip_update":null,"vehicle":{"position":{"latitude":41.7250252,"longitude":-72.76137},"timestamp":1433293394,"trip":{"route_id":"7391","schedule_relationship":0,"start_date":"20150602","trip_id":"767619"},"vehicle":{"id":"2434","label":"1434"}}},{"alert":null,"id":"1435","trip_update":null,"vehicle":{"position":{"latitude":41.75326,"longitude":-72.74362},"timestamp":1433293414,"trip":{"route_id":"7392","schedule_relationship":0,"start_date":"20150602","trip_id":"767704"},"vehicle":{"id":"2435","label":"1435"}}},{"alert":null,"id":"1436","trip_update":null,"vehicle":{"position":{"latitude":41.7240257,"longitude":-72.66746},"timestamp":1433293404,"trip":{"route_id":"7391","schedule_relationship":0,"start_date":"20150602","trip_id":"767601"},"vehicle":{"id":"2436","label":"1436"}}},{"alert":null,"id":"1438","trip_update":null,"vehicle":{"position":{"latitude":41.7929268,"longitude":-72.74655},"timestamp":1433293420,"trip":{"route_id":"7392","schedule_relationship":0,"start_date":"20150602","trip_id":"767723"},"vehicle":{"id":"2438","label":"1438"}}},{"alert":null,"id":"1446","trip_update":null,"vehicle":{"position":{"latitude":41.67132,"longitude":-72.86785},"timestamp":1433293394,"trip":{"route_id":"7386","schedule_relationship":0,"start_date":"20150602","trip_id":"766854"},"vehicle":{"id":"2446","label":"1446"}}},{"alert":null,"id":"1447","trip_update":null,"vehicle":{"position":{"latitude":41.7310944,"longitude":-72.7897},"timestamp":1433293415,"trip":{"route_id":"7387","schedule_relationship":0,"start_date":"20150602","trip_id":"766995"},"vehicle":{"id":"2447","label":"1447"}}},{"alert":null,"id":"1451","trip_update":null,"vehicle":{"position":{"latitude":41.760788,"longitude":-72.6449661},"timestamp":1433293414,"trip":{"route_id":"7387","schedule_relationship":0,"start_date":"20150602","trip_id":"767067"},"vehicle":{"id":"2451","label":"1451"}}},{"alert":null,"id":"1453","trip_update":null,"vehicle":{"position":{"latitude":41.6749268,"longitude":-72.93503},"timestamp":1433293411,"trip":{"route_id":"7409","schedule_relationship":0,"start_date":"20150602","trip_id":"770513"},"vehicle":{"id":"2453","label":"1453"}}},{"alert":null,"id":"1454","trip_update":null,"vehicle":{"position":{"latitude":41.6854858,"longitude":-72.76813},"timestamp":1433293403,"trip":{"route_id":"7388","schedule_relationship":0,"start_date":"20150602","trip_id":"767263"},"vehicle":{"id":"2454","label":"1454"}}},{"alert":null,"id":"1455","trip_update":null,"vehicle":{"position":{"latitude":41.7253876,"longitude":-72.76388},"timestamp":1433293402,"trip":{"route_id":"7388","schedule_relationship":0,"start_date":"20150602","trip_id":"767214"},"vehicle":{"id":"2455","label":"1455"}}},{"alert":null,"id":"1456","trip_update":null,"vehicle":{"position":{"latitude":41.7612572,"longitude":-72.56344},"timestamp":1433293365,"trip":{"route_id":"7387","schedule_relationship":0,"start_date":"20150602","trip_id":"767066"},"vehicle":{"id":"2456","label":"1456"}}},{"alert":null,"id":"1458","trip_update":null,"vehicle":{"position":{"latitude":41.7541847,"longitude":-72.70615},"timestamp":1433293421,"trip":{"route_id":"7386","schedule_relationship":0,"start_date":"20150602","trip_id":"766884"},"vehicle":{"id":"2458","label":"1458"}}},{"alert":null,"id":"1462","trip_update":null,"vehicle":{"position":{"latitude":41.7645645,"longitude":-72.67404},"timestamp":1433293407,"trip":{"route_id":"7385","schedule_relationship":0,"start_date":"20150602","trip_id":"766658"},"vehicle":{"id":"2462","label":"1462"}}},{"alert":null,"id":"1471","trip_update":null,"vehicle":{"position":{"latitude":41.668808,"longitude":-72.77959},"timestamp":1433293412,"trip":{"route_id":"7385","schedule_relationship":0,"start_date":"20150602","trip_id":"766657"},"vehicle":{"id":"2471","label":"1471"}}},{"alert":null,"id":"1472","trip_update":null,"vehicle":{"position":{"latitude":41.7170219,"longitude":-72.7357},"timestamp":1433293406,"trip":{"route_id":"7385","schedule_relationship":0,"start_date":"20150602","trip_id":"766663"},"vehicle":{"id":"2472","label":"1472"}}},{"alert":null,"id":"1473","trip_update":null,"vehicle":{"position":{"latitude":41.67871,"longitude":-72.76371},"timestamp":1433293405,"trip":{"route_id":"7385","schedule_relationship":0,"start_date":"20150602","trip_id":"766550"},"vehicle":{"id":"2473","label":"1473"}}},{"alert":null,"id":"1478","trip_update":null,"vehicle":{"position":{"latitude":41.76432,"longitude":-72.68757},"timestamp":1433293423,"trip":{"route_id":"7447","schedule_relationship":0,"start_date":"20150602","trip_id":"773033"},"vehicle":{"id":"2478","label":"1478"}}},{"alert":null,"id":"711","trip_update":null,"vehicle":{"position":{"latitude":41.7620277,"longitude":-72.68188},"timestamp":1433293400,"trip":{"route_id":"7393","schedule_relationship":0,"start_date":"20150602","trip_id":"767959"},"vehicle":{"id":"2720","label":"711"}}}],"header":{"incrementality":0,"timestamp":1433293419}}

var coordinates_to_GEOJSON = function(coordinates){
	coords_array = $.map(coordinates, function(v) {
		return v;
	});
	coords_array.reverse();

	return {
		"geometry":
			{"type": "Point", "coordinates": coords_array},
		"type": "Feature", "properties": {}
	};
}

source = function(leaflet_success, leaflet_error){
	busses = [];
	for (i = 0; i < 3; i++){
		busses.push(coordinates_to_GEOJSON(bus_data.entity[i].vehicle.position));
	}
	console.log(busses);
    leaflet_success(busses);
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
    map.fitBounds(realtime.getBounds(), {maxZoom: 11});
});
