"use strict";
/* Ex.10
 * Въведете число от клавиатурата и определете дали е просто. Просто число е това което е по-голямо от 1 и се дели САМО на 1 и на себе си.
 */
var num = parseInt(prompt('Enter a number: '), 10);
var isPrime = true;
if (num < 2) {
	document.write(num + ' cannnot be a prime number <br>');
} else {
	var q = Math.floor(Math.sqrt(num));
	for (var i = 2; i <= q; i++) {
		if (num % i == 0) {
			isPrime = false;
			break;
		} 
	}
	
	if (isPrime) {
		document.write(num + ' is a prime number.');
	} else {
		document.write(num + ' is not prime number.');
	}
}