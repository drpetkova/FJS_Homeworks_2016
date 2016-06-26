"use strict";
/* Ex.4
 * Write a function to count the number of divs on the web page
 */
function divCounter() {
	return document.getElementsByTagName("div").length;
}

window.onload = function() {
	console.log('Numer of DIVs: ' + divCounter());
};