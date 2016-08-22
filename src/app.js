'use strict';

window.require(
	['model/model', 'view/view'],
	function(Model, View){
		var model = new Model();
		model.init();
		model.getAllGists("my8bit")
		.then(function(gists) {
			console.log(gists);
			var filteredGists = model.filterGists(gists, "application/json", "JSON");
			console.log(filteredGists);
		});
		
		var view = new View();
		view.render(model);
	}
);