"use strict";
/* Ex.5
 * Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях. 
 */
var initNumber = parseInt(prompt('Enter an inital number: '), 10);
var termNumber = parseInt(prompt('Enter a terminal number: '), 10);
for (var i = initNumber; i <= termNumber; i++ ) {
		document.write(i + '<br>');
}