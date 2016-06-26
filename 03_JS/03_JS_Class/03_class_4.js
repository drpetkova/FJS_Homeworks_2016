"use strict";
/* Ex.4
 * Sort 3 real values in descending order using nested if statements.
 */
var num1 = prompt('Enter the first number: ');
var num2 = prompt('Enter the second number: ');
var num3 = prompt('Enter the third number: ');
if (num1 >= num2) {
	if (num1 >= num3) {
		if (num2 >= num3) {
			console.log(num1, num2, num3);
		} else {
			console.log(num1, num3, num2);
		}
	} else {
		console.log(num3, num1, num2);
	}	
} else if (num2 >= num3) {
	if (num1 >= num3) {
		console.log(num2, num1, num3);
	} else {
		console.log(num2, num3, num1);
	}
} else {
	console.log(num3, num2, num1);
}