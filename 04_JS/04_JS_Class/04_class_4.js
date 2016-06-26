"use strict";
/* Ex.4
 * Write a script that finds the lexicographically smallest and largest
 * property in document, window and navigator objects
 */
var min = '';
var max = '';
var firstElement = true;
for (var prop in document) {
	if (firstElement) {
		firstElement = false;
		min = prop;
		max = prop;
	} else {
		if (prop > max) {
			max = prop;
		}
		if (min > prop) {
			min = prop;
		}
	}
}
console.log('Max document property: ' + max);
console.log('Min document property: ' + min);

//Navigator properties
var min = '';
var max = '';
var firstElement = true;
for (var prop in navigator) {
	if (firstElement) {
		firstElement = false;
		min = prop;
		max = prop;
	} else {
		if (prop > max) {
			max = prop;
		}
		if (min > prop) {
			min = prop;
		}
	}
}
console.log('Max document property: ' + max);
console.log('Min document property: ' + min);

//Window properties
var min = '';
var max = '';
var firstElement = true;
for (var prop in window) {
	if (firstElement) {
		firstElement = false;
		min = prop;
		max = prop;
	} else {
		if (prop > max) {
			max = prop;
		}
		if (min > prop) {
			min = prop;
		}
	}
}
console.log('Max document property: ' + max);
console.log('Min document property: ' + min);