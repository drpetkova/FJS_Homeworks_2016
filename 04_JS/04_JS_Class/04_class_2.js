"use strict";
/* Ex.2
 * Numbers not divisable by 3 and 7 from 1 to N
 */
var n = prompt('Enter N');
for (var i = 1; i < n; i++) {
	if (i % 3 == 0 && i % 7 == 0 ) {
		continue;
	}
	console.log(i);
}