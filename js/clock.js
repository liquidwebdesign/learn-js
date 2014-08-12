$(document).ready(function() {
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	$('h2#currentTime').text(hour + ':' + minutes + ':' + seconds);
});