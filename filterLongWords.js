// filterLongWords.js
// Michael McClure


var words = ["Bruhaha","Jot","Crenelations","light","Spontaneous"];
var maxLength = 5;

for (i = 0; i < words.length; i += 1) {
	for (n = 1; n <= words[i].length; n += 1) {
		if (n > maxLength) {
			words.splice(i, 1)
			i = 0
		}
	}
}
console.log(words);
