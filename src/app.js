var View = require('./view/view.js');
var Model = require('./model/model.js');
var model = new Model();
model.init();
var view = new View();

view.render(model);
