(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var View = require('./view/view.js');
var Model = require('./model/model.js');
var model = new Model();
model.init();
var view = new View();

view.render(model);

},{"./model/model.js":2,"./view/view.js":3}],2:[function(require,module,exports){
function Model () {

}

Model.prototype.init = function () {
  console.log('Inited');
};

module.exports = Model;
},{}],3:[function(require,module,exports){
function View () {

}

View.prototype.render = function () {
  console.log('Render');
};

module.exports = View;
},{}]},{},[1]);
