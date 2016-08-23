'use strict';

window.require(
	['model/model', 'view/view'],
	function(Model, View){
		var model = new Model();
		model.init();
		// model.getAllGists("my8bit")
		// .then(function(gists) {
		// 	console.log(gists);
		// 	var filteredGists = model.filterFiles(gists, "application/json", "JSON");
		// 	console.log(filteredGists);
		// });
		var view = new View();
		view.render(model);
		var sendReq = document.getElementById("sendRequest");
		sendReq.addEventListener("click", function(e) {
			model.getAllGists(userName.value)
			.then(function(gists) {
				console.log(gists);
				var filteredGists = model.filterFiles(gists, type.value, lang.value);
				var fileNames = model.filterByName(filteredGists);
				console.log(fileNames);
				tmpAppendListOfName(fileNames);
			});
		});

		function tmpAppendListOfName(list) {
			var ul = document.createElement("ul");
			ul.textContent = "File(s) with chosen criteria:";
			list.map(function(item) {
				var tmpLi = document.createElement("li");
				tmpLi.textContent = item;
				ul.appendChild(tmpLi);
			});
			document.body.appendChild(ul);
		}

	}
);