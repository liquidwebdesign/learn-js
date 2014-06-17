
function estimateTotal(event) {

	'use strict';

	event.preventDefault();

	if ( document.getElementById('s-state').value === '' ) {
		alert('Please choose your shipping state!');
		document.getElementById('s-state').focus();
	}

	// Determine the number of items ordered and shipping state

	var btlExtra = parseInt(document.getElementById('txt-q-extra').value,10) || 0,
	btlCold = parseInt(document.getElementById('txt-q-cold').value,10) || 0,
	btlGarlic = parseInt(document.getElementById('txt-q-garlic').value,10) || 0,
	btlLemon = parseInt(document.getElementById('txt-q-lemon').value,10) || 0,
	state = document.getElementById('s-state').value;

	var methods = document.getElementById('cart-oil').r_method,
	shippingMethod;

	// Determine shipping method

	for (var i = 0; i < methods.length; i++) {
		if (methods[i].checked === true) {
			shippingMethod = methods[i].value;
		}
	}

	var taxFactor = 1;
	if (state === 'TAS') {
		taxFactor = 1.075; // Tax is 7.5% in Tasmania
	} else if (state === 'QLD') {
		taxFactor = 1.065; // Tax is 6.5% in Queensland
	}

	var shippingCostPer = 0;
	switch (shippingMethod) {
		case 'pickup' :
		shippingCostPer = 0;
		break;
		case 'post' :
		shippingCostPer = 2;
		break;
		case 'courier' :
		shippingCostPer = 3;
		break;
	}

	var totalBottles = btlExtra + btlCold + btlGarlic + btlLemon;
	var shippingCost = totalBottles * shippingCostPer;

	var subtotal = ((btlExtra *10) + (btlCold * 8) + (btlGarlic * 10) + (btlLemon * 12)) * taxFactor;

	var estimate = '$' + (subtotal + shippingCost).toFixed(2);

	document.getElementById('txt-estimate').value = estimate;

	document.getElementById('results').innerHTML = 'Total Bottles: ' + totalBottles + '</br>';
	document.getElementById('results').innerHTML += 'Total Shipping: $' + shippingCost.toFixed(2) + '</br>';
	document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor -1) * 100).toFixed(2) + '%';

}

// Define submit event

document.getElementById('cart-oil').addEventListener('submit', estimateTotal);
