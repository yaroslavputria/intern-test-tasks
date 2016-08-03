// var View = require('./view/view.js');
// var Model = require('./model/model.js');



// require.config({

// });

require(
	['model/model', 'view/view'],
	function(Model, View){
		var model = new Model();
		model.init();
		
		var view = new View();
		view.render(model);
	}
);


