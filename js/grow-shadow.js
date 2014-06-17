$(document).ready(function() {

	$('#circle').click(function(event) {
		console.log('You clicked me fool!');
		$(this).css('box-shadow', '0px 1px 15px #888');
	});

});