$(document).ready(function() {

	var $ball = $('div.bouncing-ball');

	$ball.on('click', function(event) {
		event.preventDefault();
		$ball.velocity(
			{
				'width': 100,
				'top': 220
			}, 1000, 'swing', function() {
			console.log('Animation complete!');
		});
	});

});


