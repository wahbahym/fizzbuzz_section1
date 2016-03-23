var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).toBe("1 2 3 4 5");
	});
	
	it("can take a number and return 'fizz' if it is a multiple of 3, and the number otherwise", function(){
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(27)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});

});
