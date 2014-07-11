$(document).ready(function() {

	$('img').on('click', function() {

		console.log('You clicked me!');
		$(this).velocity({
			rotateZ: '50deg'
		});

	});

});