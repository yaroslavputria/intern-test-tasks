'use strict';

window.define(
	function() {
		function View () {

		}

		View.prototype.render = function () {
		  var h1 = document.createElement('h1');
		  h1.textContent = 'View works :)';
		  h1.id = "h1";
		  document.body.appendChild(h1);
		  console.log('Render');
		};
		return View;
	}
);