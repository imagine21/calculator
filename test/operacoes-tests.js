var expect = require("chai").expect;

function sum(a,b) {
	return a - b;
}

describe("My opeartions", function() {

	it("sum of 2 and three should be 5", () => {
		expect(sum(2,3)).to.equal(5);
	});

});