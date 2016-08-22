'use strict';

define(
	function() {
		function View () {

		}

		View.prototype.render = function () {
		  var h1 = document.createElement('h1');
		  h1.textContent = 'View works :)';
		  document.body.appendChild(h1);
		  console.log('Render');
		};
		return View;
	}
);