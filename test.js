'use strict';
var expect = chai.expect,
	should = chai.should;

describe("view", function() {
	it("h1", function() {
		document.addEventListener("DOMContentLoaded", function() {
			var h1 = document.querySelector('#h1');
			expect(h1.textContent).to.equal("View works :)");
		});
	});
});

