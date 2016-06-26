"use strict";
/* Ex.2
 * Write a function that reverses the digits of given decimal number. Example: 256  652
 */
console.log(reverseNumber(482670));
 
function reverseNumber(num) {
	var result = '';
	var mod = 10;
	var dev = 1;
	var len = num.toString().length;
	for (let i = 0; i < len; i++) {
		var calc = Math.floor((num % mod) / dev);
		result += calc;
		mod *= 10;
		dev *= 10;
	}
	return result;
}