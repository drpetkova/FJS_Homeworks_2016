"use strict";
/* Ex.8
 * Да се въведат N на брой числа и да се намерят най-малкото и най-голямото измежду тях.
 */
var numbersCount = parseInt(prompt('How many numbers do you want to enter?'), 10);
var arr = [];
var min, max;
for(let i = 0; i < numbersCount; i++) {
	arr.push(parseInt(prompt("Enter a number"), 10));
	if (i == 0) {
		min = arr[i];
		max = arr[i];
	} else {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
}  
document.write('Max value: ' + max + '<br>');
document.write('Min value: ' + min);

