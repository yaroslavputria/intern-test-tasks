'use strict';

window.define(
	function() {
		function Model () {

		}

		Model.prototype.init = function () {
		  console.log('Inited');
		};

		Model.prototype.getAllGists = function (name) {
			return fetch("https://api.github.com/users/" + name + "/gists", {
				method: "GET",
				mode: 'cors'
			})
			.then(res => res.json());
		};

		Model.prototype.filterGists = function (arrOfGists, type, lang) {
			return arrOfGists.filter(function(gist) {
				for(var prop in gist.files) {
					if (gist.files[prop].type === type && gist.files[prop].language === lang) {
						return true;
					} else return false;
				}; 
			});
		};
 
		return Model;
	}
);