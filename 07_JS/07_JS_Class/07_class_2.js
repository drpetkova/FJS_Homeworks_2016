"use strict";
/* Ex.2
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: ((a+b)/5-d).
 * Example of incorrect expression: )(a+b)).
 */
var strTest = '((a+b';

console.log(isCorrExp(strTest));
 
function isCorrExp(str) {
	var bracketsCounter = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '(') {
			bracketsCounter++;
		} else if (str.charAt(i) == ')') {
			bracketsCounter--;
			if (bracketsCounter < 0) {
				return false;
			}
		}
	}
	return bracketsCounter === 0;
}