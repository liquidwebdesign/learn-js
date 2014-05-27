
$(document).ready(function() {

	var getDate = new Date();
	var weekday = getDate.getDay();

	switch (weekday) {
		case 0:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Sunday</h1>');
		break;
		case 1:
		$('li#monday').addClass('currentday');
		$('#output').append('<h1>Today is Monday</h1>');
		break;
		case 2:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Tuesday</h1>');
		break;
		case 3:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Wednesday</h1>');
		break;
		case 4:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Thursday</h1>');
		break;
		case 5:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Friday</h1>');
		break;
		case 6:
		$('li#tuesday').addClass('currentday');
		$('#output').append('<h1>Today is Saturday</h1>');
		break;
	}

});