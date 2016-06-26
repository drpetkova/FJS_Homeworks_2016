"use strict";
/* Ex.6
 * Write a program that finds the most frequent number in an array. Example:
 * {4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} -> 4 (5 times)
 */
var testArr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
//var testArr = ['a', 'b', 'b', 'x', 'c', 'c'];
var frequencyMap = [];
var maxFreq = 0;
for (var i = 0; i < testArr.length; i++) {
	var value = testArr[i];
	if (frequencyMap[value] === undefined) {
		frequencyMap[value] = 1;
	} else {
		frequencyMap[value] += 1;
	}
	maxFreq = Math.max(maxFreq, frequencyMap[value]);
}

for (var key in frequencyMap) {
	if (frequencyMap[key] == maxFreq) {
		console.log(key + ' (' + maxFreq + ' times)');
	}
}