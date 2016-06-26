"use strict";
/* Ex.5
 * Sorting an array means to arrange its elements in increasing order.
 * Write a script to sort an array. Use the "selection sort" algorithm:
 * Find the smallest element, move it at the first position, find the smallest from the rest,
 * move it at the second position, etc.
 * Hint: Use a second array
 */
var testArr = [3, 2, 3, 4, 2, 2, 4, 1, 2, 3];

function selectionSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var tmp = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[tmp]) {
				tmp = j;
			}
		}
		if (tmp != i) {
			var tmp2 = arr[tmp];
			arr[tmp] = arr[i];
			arr[i] = tmp2;
		}
	}
}

selectionSort(testArr);
console.log(testArr);