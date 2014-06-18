
// Find the right method, call on correct element

function launchFullScreen(grabElement) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else {
		console.log("Full screen support is not supported");
	}
}

// Launch fullscreen for browsers that support it!

// launchFullScreen(document.documentElement); // the whole page

grabElement = document.getElementById('headerText');
	grabElement.onmouseover = function() {
	console.log('Hello World!');
};


// document.getElementById("headerText").onclick() {
// launchFullScreen( document.getElementById("headerText") ); // any individual element
// }


