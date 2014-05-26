
$(document).ready(function() {

	var getDate = new Date();
	var weekday = getDate.getDay();

	switch (weekday) {
		case 0:
		console.log('Sunday');
		break;
		case 1:
		console.log('Monday');
		$('li#monday').addClass('currentday');
		$('#output').append("I hate Monday!");
		break;
		case 2:
		console.log('Tuesday');
		break;
		case 3:
		console.write('Wednesday');
		break;
		case 4:
		console.write('Thursday');
		break;
		case 5:
		console.write('Friday');
		break;
		case 6:
		console.write('Saturday');
		break;
	}

});