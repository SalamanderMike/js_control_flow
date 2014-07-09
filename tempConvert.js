// tempConvert.js
// Michael McClure
// [°C] = ([°F] - 32) × 5/9
// [°F] = [°C] × 9/5 + 32

var f = 61;
var c = -1;

var fToC = function(f) {
	return Math.floor((f - 32) * (5 / 9)); 
}

var cToF = function(c) {
	return Math.floor((c * (9 / 5) + 32));
}

console.log(f + "° in Fahrenheit is " + fToC(f) + "° in Celsius!");
console.log(c + "° in Celsius is " + cToF(c) + "° in Fahrenheit!");
