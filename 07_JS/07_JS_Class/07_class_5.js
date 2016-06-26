"use strict";
/* Ex.5
 * Write a function that replaces non breaking white-spaces in a text with &nbsp;
 * 
 */
var str = 'Lorem ipsum dolor sit amet, arcu placerat suspendisse nunc, nec rutrum ut velit, lectus ac aliquam.';

function nbspAdd(str) {
	return str.replace(/ /g, '&nbsp;');
}
