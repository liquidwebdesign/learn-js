$(document).ready(function() {

	var animations = [ 'spinner',
	'explode',
	'rattle',
	'shuffle',
	'whipper' ];

	function getRandomInt (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		// var item = items[Math.floor(Math.random()*items.length)];
	}

	$('ul.fruit-container').on ('click', 'img', function () {
		var sushi = this;
		var animation = animations[getRandomInt(0, 4)];

		$(sushi).addClass(animation);

		setTimeout(function () {
			$(sushi).removeClass(animation);
		}, 2100);
	});

});