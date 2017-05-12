var numt = 3;
var numf = 5;
var sum = 0;

while (numt <= 1000) {
	if (numt%3 === 0) {
		sum = sum + numt;
	}
	numt = numt + 1;
}

while (numf <= 1000) {
	if (numf%5 === 0) {
		sum = sum + numf;
	}
	numf = numf + 1;
}

console.log(sum);