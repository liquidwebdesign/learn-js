$(document).ready(function() {

	for (var i=0; i<=62; i++) {
		$('#configure-grid').append('<div class="cell"> </div>');
	}

	$('.cell').mouseover(function (event) {

		if ( $(this).hasClass('hover-off') ) {
			$(this).removeClass('hover-off').addClass('hover');
		} else {
			$(this).addClass('hover');
		}

		var randomColour = '#' + Math.random().toString(16).slice(2,8);
		$(this).css('background-color', randomColour);

		$(this).mouseleave(function(event) {
			$(this).removeClass('hover').addClass('hover-off');
		});

	});

});