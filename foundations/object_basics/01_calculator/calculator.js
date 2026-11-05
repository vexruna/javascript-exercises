const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		return arr.reduce((arr, item) => arr += item);
	};
};

const multiply = function(array) {
	const product = array.reduce((obj, item) => obj *= item);
	return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	product = 1;
	for (let i = 1; i <= a; i++){
		product *= i;
	};
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
