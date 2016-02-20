
document.addEventListener ('DOMContentLoaded', drawMap);

var map;

function drawMap() {

	var homeLocation = new google.maps.LatLng(-33.8730397, 151.2084714);

	var workLocation = new google.maps.LatLng(-33.8772787, 151.2141388);

	var mapOptions = {
		'center' : homeLocation,
		'zoom' : 16,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : true
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var homeMarker = new google.maps.Marker({
		position: homeLocation,
		map: map,
		title: 'I chill out here'
	});

	var workMarker = new google.maps.Marker({
		position: workLocation,
		map: map,
		title: 'I work here'
	});

	var homePopUpContent = 'The place to chill!';

	var workPopUpContent = 'The place where shit gets done!';

	var homeInfoWindow = new google.maps.InfoWindow({
		content: homePopUpContent,
		maxWidth: 500
	});

	var workInfoWindow = new google.maps.InfoWindow({
		content: workPopUpContent,
		maxWidth: 500
	});

	google.maps.event.addListener(homeMarker, 'click', function() {
		homeInfoWindow.open(map,marker);
	});

	google.maps.event.addListener(workMarker, 'click', function() {
		workInfoWindow.open(map,marker);
	});

}

