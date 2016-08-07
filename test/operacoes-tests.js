var expect = require("chai").expect;
var sum = require("../src/operacoes").sum;
var subtract = require("../src/operacoes").subtract;
var multiply = require("../src/operacoes").multiply;
var divide = require("../src/operacoes").divide;


describe("My opeartions", function() {

	it("sum of 2 and three should be 5", () => {
		expect(sum(2,3)).to.equal(5);
	});

	it("should subtract 5 from 2", () => {
		expect(subtract(5,2)).to.equal(3);
	});

	it("sould multiply 2 and 3", function() {
		expect(multiply(2,3)).to.equal(6);

	});

	it("should divide 6 by 2", function(){
		expect(divide(6,2)).to.equal(3)
	});

});