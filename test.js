'use strict';

var chai = require('chai'),
	should = chai.should,
	expect = chai.expect,
	requirejs = require('requirejs'),
	fetch = require('isomorphic-fetch');


describe("model", function() {

	var gists;
	var Model = requirejs("src/model/model.js");
	var model = new Model();

	before(function(done) {
		var allGistsPromise = model.getAllGists("my8bit");

		allGistsPromise.then(function(gistsFromPromise) {
			gists = gistsFromPromise;
			done();
		});
	});

	it("getAllGists", function() {
		expect(gists).to.have.length.below(30);
	});

	it("filterGists", function() {
		expect(model.filterGists(gists, "application/json", "JSON")).to.have.lengthOf(2);
	});
});
