'use strict';

window.define(
	function() {
		function Model () {

		}

		Model.prototype.init = function () {
		  console.log('Inited');
		};
		return Model;
	}
);