$(document).ready(function() {

	$('#circle').click(function(event) {
		var current = $(this).css('box-shadow');
		console.log(current);
		var a = current.split('px');
		console.log(a);
		var blur = a[a.length-3];
		console.log(blur);
		var spread = a[a.length-2];
		console.log(spread);
		var newBlur = parseInt(blur) + 1;
		console.log(newBlur);
		var newSpread = parseInt(spread) + 3;
		console.log(newSpread);

		$(this).css('box-shadow', 'rgba(-1, 1, 0, 0.35) 0px 0px ' + newBlur + 'px ' + newSpread + 'px');

	});

});