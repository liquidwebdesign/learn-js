$(document).ready(function() {

	for (var i=0; i<=62; i++) {
		$('#configure-grid').append('<div class="cell"> </div>');
	}

	$('.cell').mouseover(function (event) {
		var randomColour = '#' + Math.random().toString(16).slice(2,8);
		$(this).css('background-color', randomColour);
	});

});