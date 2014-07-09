// grade.js
// Michael McClure


var students = [["Lisa", 86], 
								["Marge", 73], 
								["Bart", 61],
								["Homer", 8], 
								["Consuela", 100]];

for (i = 0; i < students.length; i += 1) {
	var score = students[i][1];
	var name = students[i][0];

	switch (true) {
		case (score >= 90):
			console.log(name + "\'s grade is: *A*");
			break;
		case (score >= 80):
			console.log(name + "\'s grade is: B");
			break;
		case (score >= 70):
			console.log(name + "\'s grade is: C");
			break;
		case (score >= 60):
			console.log(name + "\'s grade is: D");
			break;
		case (score < 60):
			console.log(name + "\'s grade is: F");
			break;
	}
}
