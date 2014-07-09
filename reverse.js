// reverse.js
// Michael McClure


var inputString = "building";
var array = [];

for (i = inputString.length - 1; i >= 0; i -= 1) {
	array.push(inputString[i]);
}
console.log(array.join(""));
