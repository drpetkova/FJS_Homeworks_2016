"use strict";
/* Ex.10
 * Да се прочетат 2 числа от клавиатурата А и В. Да се изведат всички числа от А до В на степен 2(разделени с запетая). 
 * Ако някое число е кратно на 3, да се изведе съобщение че числото се пропуска „skip 3“. 
 * Ако сумата от всички изведени числа (без пропуснатите) стане по-голяма от 200, да се прекрати извеждането. 
 */
var init = parseInt(prompt('Enter A (number): '), 10);
var term = parseInt(prompt('Enter B (number): '), 10);
var sum = 0;
for (var i = init; i <= term; i++) {
	if (i != init) {
		document.write(', ');
	}
	var powerNumber = i * i;
	if (powerNumber % 3 == 0) {
		document.write('skip ' + i);
	} else {
		sum += powerNumber;
		document.write(powerNumber);
		if (sum > 200) {
			break;
		}
	}		
}