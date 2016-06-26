"use strict";
/* Ex.7
 * Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число.  
 */
var termNumber = parseInt(prompt('Enter a terminal number: '), 10);
for (var i = 1; i <= termNumber; i++ ) {
	if (i % 21 == 0) {
		document.write(i + '<br>');
	}
}
