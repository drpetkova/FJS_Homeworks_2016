"use strict";
/* Ex.7
 * Write a program that finds the index of given element in a sorted array of integers
 * by using the binary search algorithm (find it in Wikipedia).
 */
var testArr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 9];
function binarySearch(arr, data) {
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		} else if (arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(binarySearch(testArr, 4));