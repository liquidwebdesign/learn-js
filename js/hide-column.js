function hideColumn() {

	$( "#headerText" ).click(function() {

		$("#col1").toggle();
		if ( $("#col2").hasClass("large-4 columns") ) {
			$("#col2").removeClass("large-4 columns").addClass("large-8 columns");
		} else if ( $("#col2").hasClass("large-8 columns") ) {
			$("#col2").removeClass("large-8 columns").addClass("large-4 columns");
		}
	});

}

// now call it when the window is resized.

function removeElementOnResize() {
	var width = 0;
	width = $(window).width();

	if (width <= 600) {
		$("#hidePara").hide();
	} else if (width > 600) {
		$("#hidePara").show();
	}
}

$(window).resize(function() {
	removeElementOnResize();
});

$(window).load(function() {
	removeElementOnResize();
});

$(document).ready(function() {
	hideColumn();
	$("#accordion").accordion();
});