"use strict";
/* Ex.8
 * Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation
 */
var num = parseInt(prompt('Enter a number between 0 and 999: '));

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

if (num < 0 || num > 999) {
	console.log('Not in the range');
} else if (num == 0) {
	console.log('zero');
} else if (num >= 1 && num <= 9) {
	console.log(ones[num]);
} else if (num >= 10 && num <= 19) {
	console.log(teens[num - 10]);
} else if (num >= 20 && num <= 99) {
	let digit = num % 10;
	if (digit == 0) {
		console.log(tens[Math.floor(num / 10)]);
	} else {
		console.log(tens[Math.floor(num / 10)] + '-' + ones[digit]);
	}
} else {
	let hundredDigit = Math.floor(num / 100); 
	let tensDigit = Math.floor((num % 100) / 10);
	let onesDigit = Math.floor((num % 100) % 10);
	let words = ones[hundredDigit] + ' hundred';
	if (!(tensDigit == 0 && onesDigit == 0)) {
		words += ' and ';
	} 
	if (tensDigit == 1) {
		words += teens[onesDigit];
	} else {
		if (tensDigit != 0) {
			words += tens[tensDigit];
			if (onesDigit != 0) {
				words += '-';
			}
		}
		words += ones[onesDigit];
	}
	console.log(words);
}