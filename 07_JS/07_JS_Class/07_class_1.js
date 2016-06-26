"use strict";
/* Ex.1
 * Write a JavaScript function reverses string and returns it
 * Example: "sample" -> "elpmas".
 */
var strTest = 'sample';

console.log(reverseString(strTest));
 
function reverseString(str) {
	return str.split('').reverse().join('');
}