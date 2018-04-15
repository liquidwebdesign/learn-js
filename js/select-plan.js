$(document).ready(function() {

	// define global variables to contain user choices

	var answerA = '';
	var answerB = '';

	// hide the second set of questions and products onload

	$('#question2,div[class^="showplan"]').hide();

	// listen for click event, cycle through elements and then store button selection.

	$('#question1 a').each(function() {
		$(this).click(function(event) {
			event.preventDefault();
			$('#question1 a').removeClass('active-button');
			$(this).toggleClass('active-button');
			answerA = $(this).attr('id');
			if ($('#question2:hidden')) {
				$('#question2').show();
			}
			checkNextSet();
		});
	});

	// listen for click events, cycle through elements, store users second choice,
	// determine vales for first and second choice and then show the recommended product

	$('#question2 a').each(function() {
		$(this).click(function(event) {
			event.preventDefault();
			$('#question2 a').removeClass('active-button');
			$(this).toggleClass('active-button');
			answerB = $(this).attr('id');
			checkNextSet();
		});
	});

	function checkNextSet() {

				// Personal Plans - First Block

				if ((answerA == 'personal') && (answerB == 'managed')) {
					$('div[class^="showplan"]').hide();
					$('.showplan1').show();
				} else if ((answerA == 'personal') && (answerB == 'unmanaged')) {
					$('div[class^="showplan"]').hide();
					$('.showplan2').show();
				} else if ((answerA == 'personal') && (answerB == 'unsure-manage')) {
					$('div[class^="showplan"]').hide();
					$('.showplan3').show();
				}

				// Online Store - Second Block

				else if ((answerA == 'ecommerce') && (answerB == 'managed')) {
					$('div[class^="showplan"]').hide();
					$('.showplan4').show();
				} else if ((answerA == 'ecommerce') && (answerB == 'unmanaged')) {
					$('div[class^="showplan"]').hide();
					$('.showplan5').show();
				} else if ((answerA == 'ecommerce') && (answerB == 'unsure-manage')) {
					$('div[class^="showplan"]').hide();
					$('.showplan6').show();
				}

				// Undecided Plan - Undecided Level of Management - Third Block

				if ((answerA == 'unsure-plan') && (answerB == 'managed')) {
					$('div[class^="showplan"]').hide();
					$('.showplan7').show();
				} else if ((answerA == 'unsure-plan') && (answerB == 'unmanaged')) {
					$('div[class^="showplan"]').hide();
					$('.showplan8').show();
				} else if ((answerA == 'unsure-plan') && (answerB == 'unsure-manage')) {
					$('div[class^="showplan"]').hide();
					$('.showplan9').show();
				}

			}

		});

