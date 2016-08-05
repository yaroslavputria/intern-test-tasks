'use strict';

window.require(
	['model/model', 'view/view'],
	function(Model, View){
		var model = new Model();
		model.init();
		
		var view = new View();
		view.render(model);
	}
);