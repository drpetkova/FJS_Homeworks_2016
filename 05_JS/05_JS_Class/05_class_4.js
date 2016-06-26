"use strict";
/* Ex.4
 * Write a script that finds the maximal increasing sequence in an array. 
 * Example: {3, 2, 3, 4, 2, 2, 4} -> {2, 3, 4}
 */
var arr = [3, 2, 3, 4, 2, 2, 4, 1, 2, 3];
var start = 0;
var len = 1;
var longestLen = 1;	
var repeatArray = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === arr[i - 1] + 1) {
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
	let start = repeatArray[i] - longestLen + 1;
	for (let j = start; j < start + longestLen; j++) {
		sequence.push(j);
	}
	allSequences.push('{' + sequence.join(', ') + '}');	
}
console.log(allSequences.join(', '));