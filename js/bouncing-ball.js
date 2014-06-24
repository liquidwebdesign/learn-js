$(document).ready(function() {

	function bounceBall() {

		var $windowHeight = $('.ball-container').innerHeight();
		console.log($windowHeight);

		var $ball = $('div.bouncing-ball');

		var ballSpeed = 2000;

		$ball.velocity({'top': $windowHeight}, ballSpeed, 'easeInQuad', function() {
			$ball.velocity({'top': 0}, ballSpeed, 'easeOutQuad', function () {
				bounceBall();
			});
		});
	}

	bounceBall();

});


