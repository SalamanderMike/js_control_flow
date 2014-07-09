// pluralizer.js
// Michael McClure

var things = {	cat: 5,
				dog: 9,
				bird: 2,
				Homer: 1
}

for (var animals in things) {
	var conjugation = " is only ";
	var plural = "";

	if (things[animals] > 1) {
		var conjugation = " are ";
		var plural = "s ";
	}
	console.log("There" + conjugation + things[animals] + " " + animals + plural);
}
