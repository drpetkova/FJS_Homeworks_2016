"use strict";
/* Ex.3
 * Write a script that finds the maximal sequence of equal elements in an array.
 * Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1} -> {2, 2, 2}.
 */
//var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
var arr = [2, 1, 1, 1, 3, 4, 2, 2, 2, 1, 1, 1];
var start = 0;
var len = 1;
var longestLen = 1;	
var repeatArray = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === arr[i - 1]) {
		len++;
	} else {
		len = 1;
	}
	if (len > longestLen) {
		longestLen = len;
		repeatArray = [];
	}
	if (len == longestLen) {
		repeatArray.push(arr[i]);
	}
}

let allSequences = [];
for (let i = 0; i < repeatArray.length; i++) {
	let sequence = [];
	for (let j = 0; j < longestLen; j++) {
		sequence.push(repeatArray[i]);
	}
	allSequences.push('{' + sequence.join(', ') + '}');	
}
console.log(allSequences.join(', '));