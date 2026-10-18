const reverseString = (str) => {
	const newarr = [];
	const arr = str.split("");
	for (i = arr.length - 1; i >= 0; i--) {
		newarr.push(arr[i]);
	}
	newstr = newarr.join("");
	return newstr;
};

// Do not edit below this line
module.exports = reverseString;
