"use strict";
/* Ex.3
 * Write a script that finds the max and min number from a sequence of numbers
 */
var arr = [2,6,9,-1,33,-3.2,-8,666];
var min, max;
for (var i = 0; i < arr.length; i++) {
	if (i == 0) {
		min = arr[i];
		max = arr[i];
	} else {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (min > arr[i]) {
			min = arr[i];
		}
	}
}
console.log('Max value: ' + max);
console.log('Min value: ' + min);