"use strict";	
/* Ex.3
 * Write a script that finds the biggest of three integers using nested if statements.
 */
var num1 = prompt('Enter the first number: ');
var num2 = prompt('Enter the second number: ');
var num3 = prompt('Enter the third number: ');
if (num1 > num2) {
	if (num1 > num3) {
		console.log('The biggest number is ' + num1);
	} else {
		console.log('The biggest number is ' + num3);
	}	
} else if (num2 > num3) {
	console.log('The biggest number is ' + num2);
} else {
	console.log('The biggest number is ' + num3);
}