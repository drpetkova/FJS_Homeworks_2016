"use strict";
/* Ex.1
 * Write a function that returns the last digit of given integer as an English word. Examples: 512  "two", 1024  "four", 12309  "nine"
 */
function lastDigit(num) {
	var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	return ones[num % 10];
}
console.log(lastDigit(1231230947));