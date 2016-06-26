"use strict";	
/* Ex.2
 * Write a script that shows the sign (+ or -) of the product of
 * three real numbers without calculating it. Use a sequence of if statements.
 */
var x = prompt('Enter the first number: ');
var y = prompt('Enter the second number: ');
var z = prompt('Enter the third number: ');
if (x == 0 || y == 0 || z == 0) {
	console.log('sing :) 0');
} else if (x > 0 && y > 0 && z > 0) {
	console.log('sign +');
} else if (x < 0 && y < 0 && z < 0){
	console.log('sign -');
} else if ((x < 0 && y < 0) || (x < 0 && z < 0) || (z < 0 && y < 0)) {
	console.log('sing +');
} else {
	console.log('sing -');
}