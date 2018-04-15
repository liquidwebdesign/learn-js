document.addEventListener('DOMContentLoaded',
	function() {

		// Assign the tab interface class to the tab-group div

		document.getElementById('tab-group').className = 'ready';

		/*
		var tab1 = document.getElementById('tab-header-1');
		var tab2 = document.getElementById('tab-header-2');
		var tab3 = document.getElementById('tab-header-3');

		tab1.addEventListener('click', activateTab);
		tab2.addEventListener('click', activateTab);
		tab3.addEventListener('click', activateTab);
		*/

		var tabHeaders = document.getElementsByClassName('tab-header');

		for (var i = 0; i < tabHeaders.length; i++) {
			tabHeaders[i].addEventListener('click', activateTab);
		}

		function activateTab(event) {

			var myID = this.id;
			contentID = myID.replace('header', 'content'); // result: tab-content-1

			deactivateAllTabs();

			document.getElementById(myID).className = 'tab-header active';
			document.getElementById(contentID).className = 'tab-content active';

			function deactivateAllTabs() {

				var changeTabHeaders = document.getElementsByClassName('tab-header');

				for (var i = 0; i < changeTabHeaders.length; i++) {
					changeTabHeaders[i].className = 'tab-header';
					document.getElementById('tab-content-1').className = 'tab-content';
				}
				document.getElementById('tab-header-1').className = 'tab-header';
				document.getElementById('tab-header-2').className = 'tab-header';
				document.getElementById('tab-header-3').className = 'tab-header';
				document.getElementById('tab-header-4').className = 'tab-header';

				document.getElementById('tab-content-1').className = 'tab-content';
				document.getElementById('tab-content-2').className = 'tab-content';
				document.getElementById('tab-content-3').className = 'tab-content';
				document.getElementById('tab-content-4').className = 'tab-content';
			}

		}

	});