"use strict";
/* Ex.6
 * Write a function that checks if the element at given position in given array of integers
 * is bigger than its two neighbors (when such exist).
 */
var arrNumbers = [0, 5, 2, 4, 7, 4, 7, 5, 0, 7, 9];

function isNextInArray(position, arr) {
	if (position <= 0 || position >= arr.length - 1) {
		return false;
	}
	if (arr[position] > arr[position - 1] && arr[position] > arr[position + 1]) {
		return true;
	}
	return false;
}

console.log('4th elemtent: ' + isNextInArray(3, arrNumbers));
console.log('5th elemtent: ' + isNextInArray(4, arrNumbers));