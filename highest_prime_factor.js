function isPrime(number) {
  var primeCheck = true;
	for (j = 2; j < number; j++) {
		if (number%j === 0 && flaggedAsPrime !== true) {
			primeCheck = false;
			var flaggedAsPrime = true;
		}
	}
	return(primeCheck);
}

function isFactor(number) {
	for (i = 2; i < number/2; i++) {
		if (number%i === 0) {
			isPrime(i);
			if (isPrime(i)) {
				var topPrime = i;
				console.log(i + " is the largest prime factor so far.");
			}
		}
	}
	console.log(topPrime + " is the largest prime factor of " + number);
}

isFactor(600851475143);