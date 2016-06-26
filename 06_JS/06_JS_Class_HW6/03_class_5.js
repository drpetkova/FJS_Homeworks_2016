"use strict";
/* Ex.5
 * Write a function that counts how many times given number appears in given array.
 * Write a test function to check if the function is working correctly.
 */
function numberCounter(arr, num) {	
	var counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (num == arr[i]) {
			counter++;
		}
	}
	return counter;
}

function testNumberCounter() {
	var arrNumbers = [0, 5, 2, 4, 7, 4, 7, 5, 0, 7, 9];
	console.log(numberCounter(arrNumbers, 0) == 2);
	console.log(numberCounter(arrNumbers, 1) == 0);
	console.log(numberCounter(arrNumbers, 2) == 1);
	console.log(numberCounter(arrNumbers, 4) == 2);
	console.log(numberCounter(arrNumbers, 5) == 2);
	console.log(numberCounter(arrNumbers, 7) == 3);
	console.log(numberCounter(arrNumbers, 9) == 1);
}

var arrNumbers = [0, 5, 2, 4, 7, 4, 7, 5, 0, 7, 9];	
var num = prompt('Enter a number to search for: ');
var count = numberCounter(arrNumbers, num);
var word = ' time';
if (count > 2) {
	word += 's';
}
console.log('Number ' + num + ' appears ' + count + word + '.');

testNumberCounter();	