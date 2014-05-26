$(document).ready(function() {
	$('#changeColour').click(function (event) {
		event.preventDefault();
		var randomColour = '#' + Math.random().toString(16).slice(2,8);
		$('body').css('background-color', randomColour);
	});

});