"use strict";
/* Ex.2
 * Write a script that compares two char arrays lexicographically (letter by letter).
 */
var arrFirst = ['g'];
var arrSecond = ['a', 'b'];
var stringFirst = arrFirst.join('');
var stringSecond = arrSecond.join('');
if (stringFirst == stringSecond) {
	document.write('The two char arrays are lexicographically equal.');
} else if (stringFirst > stringSecond) {
	document.write('The first char array is lexicographically greater than the second one.');
} else {
	document.write('The second char array is lexicographically greater than the first one.');
}

	