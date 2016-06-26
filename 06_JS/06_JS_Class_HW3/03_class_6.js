"use strict";
/* Ex.6
 * Write a script that enters the coefficients a, b and c of a quadratic equation
 * a*x2 + b*x + c = 0
 * and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.
 */
var a = parseFloat(prompt('a = ').replace(',', '.'));
var b = parseFloat(prompt('b = ').replace(',', '.'));
var c = parseFloat(prompt('c = ').replace(',', '.'));
var disc = b * b - 4 * a * c;
if (a == 0) {
	console.log('Invalid input; a cannot be 0.');
} else if (disc > 0) {
	let x1 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(2);
	let x2 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(2);
	console.log('Roots of the quadratic equation "' + a + '*x2 + ' + b + 'x + ' + c + ' = 0" are: x1 = ' + x1 + ' and x2 = ' + x2);
} else if (disc == 0) {
	let x0 = (-b / (2 * a)).toFixed(2);
	console.log('Roots of the quadratic equation "' + a + '*x2 + ' + b + 'x + ' + c + ' = 0" are: x1 = x2 = ' + x0);
} else {
	console.log('The quadratic equation "' + a + '*x2 + ' + b + 'x + ' + c + ' = 0" has no real roots.');
}