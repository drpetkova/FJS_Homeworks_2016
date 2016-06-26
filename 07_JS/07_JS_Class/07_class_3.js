"use strict";
/* Ex.3
 * Write a JavaScript function that finds how many times a substring is contained
 * in a given text (perform case insensitive search).
 * Example: The target substring is "in". The text is as follows:
 * We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.
 * The result is: 9.
 */
var searchStr = 'in';
var textString = 'We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'; 
console.log(wordCounter(searchStr,textString));
 
function wordCounter(patt, textString) {
	var regEx = new RegExp(patt, 'gi');
	var counter = (textString.match(regEx) || []).length;
	return counter;
}
/* 
function wordCounterNoRegEx(patt, textString) {
	textString = textString.toLowerCase();
	patt = patt.toLowerCase();
	var counter = 0;
	var index;
	var len = patt.length;
	while ((index = textString.indexOf(patt)) >= 0) {
		counter++;
		textString = textString.substring(index + len);
	}
	return counter;
}
*/