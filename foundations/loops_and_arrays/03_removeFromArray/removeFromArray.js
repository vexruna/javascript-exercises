const removeFromArray = (arr, ...value) => {
	const newArr = [];
	arr.forEach((element) => {
		if (!value.includes(element)) {
			newArr.push(element);
		}
	});
	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
