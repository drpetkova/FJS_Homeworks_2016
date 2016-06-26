"use strict";
/* Ex.6
 * Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число.  
 */
var termNumber = parseInt(prompt('Enter a terminal number: '), 10);
var sum = 0;
for (var i = 1; i <= termNumber; i++ ) {
	sum += i;
}
document.write(sum);