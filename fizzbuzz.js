var count, fizzer;
count = function(start, end) {
	// create a variable for our output
	var output = start;

	// modify output to look like what we want
	for (var i = start; i < end; i += 1) {
		// code to be repeated goes here
		output = output + " " + (i + 1);
	}

	// return the output, e.g "1 2 3 4 5"
	return output;
};

fizzer = function(num) {
	return "fizz";
};

module.exports = {
	count: count,
	fizzer: fizzer
};