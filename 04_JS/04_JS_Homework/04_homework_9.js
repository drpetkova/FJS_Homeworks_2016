"use strict";
/* Ex.9
 * Започвайки от 3, да се изведат на екрана първите N числа които се делят на 3.
 * Числата да са разделени със запетая. 
 */
var n = parseInt(prompt('Enter N: '), 10);
for (var i = 3; i <= n; i++ ) {
	if (i % 3 == 0) {
		if (i != 3) {
			document.write(', ');
		}
		document.write(i);
	}
}
