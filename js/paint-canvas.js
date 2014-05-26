$(document).ready(function() {

	var colourChoice = '';

	$('#paint-ui div').each(function() {
		$(this).click(function(event) {
			event.preventDefault();
			colourChoice = $(this).attr('id');
		});
	});

	$('.paint-cell').each(function() {
		$(this).click(function(event) {
			event.preventDefault();
			$(this).removeClass('blue || yellow || red || white');
			$(this).addClass(colourChoice);
		});
	});

});